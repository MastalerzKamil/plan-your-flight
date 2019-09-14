const express = require("express");
const request = require("request");

const app = express();
const port = 3000;

const getToken = () => {
  var options = {
    method: "POST",
    url: "https://api.lot.com/flights-dev/v2/auth/token/get",
    headers: {
      "content-type": "application/json",
      "x-api-key": "9YFNNKS31u9gCFKPetPWdAAjEXnED0B3K18AeYgg"
    },
    body: { secret_key: "2przp49a52" },
    json: true
  };
  new Promise((res, rej) =>
    request(options, function(error, response, body) {
      if (error) throw new Error(error);

      res(body.access_token);
    })
  );
};
const getAirports = async () => {
  let token = await getToken();
  var options = {
    method: "GET",
    url: "https://api.lot.com/flights-dev/v2/common/airports/get",
    headers: {
      "x-api-key": "9YFNNKS31u9gCFKPetPWdAAjEXnED0B3K18AeYgg",
      authorization: "Bearer " + token
    }
  };
  return new Promise((res, rej) =>
    request(options, function(error, response, body) {
      if (error) throw new Error(error);

      res(body);
    })
  );
};

app.get("/airport", async (req, res) => {
  let response = await getAirports();
  res.send(response);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
