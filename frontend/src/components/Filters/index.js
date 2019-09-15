import React, { Component } from "react";
import { Input, Grid, Button, Checkbox, Dropdown } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

import "./index.css";
import "semantic-ui-css/semantic.min.css";

const airports = [
  { key: "WAW", value: "Warszawa", text: "Warszawa (WAW)" },
  { key: "GDA", value: "Gdańsk", text: "Gdańsk (GDA)" },
  { key: "JFK", value: "Nowy Jork", text: "Nowy Jork (JFK)" },
  { key: "MIA", value: "Miami", text: "Miami (MIA)" }
];
function Filters({ actions, flightFilter, startDate, endDate }) {
  console.log(actions);
  return (
    <div className="Filters">
      <Grid className="Filters__grid">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Dropdown
              className="Filters__flightInput"
              onChange={e => actions.setFromFlight(e.target.value)}
              placeholder="Skąd lecimy"
              search
              selection
              options={airports}
              fluid
            />
          </Grid.Column>
          <Grid.Column>
            <Dropdown
              className="Filters__flightInput"
              onChange={e => actions.setToFlight(e.target.value)}
              placeholder="Dokąd lecimy"
              search
              selection
              options={airports}
              fluid
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <DateInput
              className="Filters__dateInput"
              name="startDate"
              placeholder="Od kiedy"
              value={startDate}
              iconPosition="right"
              onChange={(e, { name, value }) =>
                this.handleStartDate(e, { name, value })
              }
              fluid
            />
          </Grid.Column>
          <Grid.Column>
            <DateInput
              className="Filters__dateInput"
              name="endDate"
              placeholder="Od kiedy"
              value={endDate}
              iconPosition="right"
              onChange={(e, { name, value }) =>
                this.handleEndDate(e, { name, value })
              }
              fluid
            />
          </Grid.Column>
          <Grid.Column>
            <Button className="Filters__confirm" color="red" fluid>
              Zatwierdź
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div className="Filters__checkbox">
              <Checkbox
                className="Filters__checkbox"
                checked={true}
                label="Bilet w 2 strony"
              />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Filters;
