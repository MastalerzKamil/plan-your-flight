const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const jq = require("node-jq");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apikey = "9YFNNKS31u9gCFKPetPWdAAjEXnED0B3K18AeYgg";

const getToken = async () => {
  var options = {
    method: "POST",
    url: "https://api.lot.com/flights-dev/v2/auth/token/get",
    headers: {
      "content-type": "application/json",
      "x-api-key": apikey
    },
    body: { secret_key: "2przp49a52" },
    json: true
  };
  return new Promise((res, rej) =>
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
      "x-api-key": apikey,
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

const getFlights = async ({
  cabinClass,
  departureDate,
  returnDate,
  origin,
  destination,
  adultsCount
}) => {
  let token = await getToken();

  if (!(cabinClass == "E" || cabinClass == "B" || cabinClass == "F")) {
    throw new Error(
      "Invalid cabin class [" + cabinClass + "]. Valid options: E,B,F"
    );
  }
  // TODO: add departureDate validation
  // TODO: add returnDate validation
  // TODO: add orogin validation
  // TODO: add destination validation

  var options = {
    method: "POST",
    url: "https://api.lot.com/flights-dev/v2/booking/availability",
    headers: {
      "content-type": "application/json",
      "x-api-key": apikey,
      authorization: "Bearer " + token
    },
    body: {
      params: {
        cabinClass: cabinClass,
        market: "PL",
        departureDate: [departureDate],
        returnDate: returnDate,
        origin: [origin], // shortcode for city GET /flights
        tripType: "R", // roundtrip
        adt: adultsCount,
        destination: [destination]
      }
    },
    json: true
  };
  return new Promise((res, rej) => {
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      res(body);
    });
  });
};

const parseFlightsData = json => {
  let filter = ".data[][]";

  return new Promise((res, rej) => {
    jq.run(filter, json, { input: "json" })
      .then(output => {
        //console.log(output);
        res(output);
      })
      .catch(err => {
        //  console.error(err);
        rej(err);
      });
  });
};

app.get("/airport", async (req, res) => {
  let response = await getAirports();
  res.send(response);
});

app.post("/flights", async (req, res) => {
  console.info("request", req.body);
  let response = await getFlights(req.body);
  console.log(response);
  if (response.status != 200) {
    res.status(500).send("error");
    return;
  }

  let parsedResponse = await parseFlightsData(response);
  res.type('json').send(parsedResponse);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
