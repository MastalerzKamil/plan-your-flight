import React, { Component } from "react";
import { Input, Grid, Button, Checkbox, Dropdown } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import * as moment from 'moment';

import "./index.css";
import "semantic-ui-css/semantic.min.css";

const airports = [
  { key: "WAW", value: "Warszawa", text: "Warszawa (WAW)" },
  { key: "GDA", value: "Gdańsk", text: "Gdańsk (GDA)" },
  { key: "JFK", value: "Nowy Jork", text: "Nowy Jork (JFK)" },
  { key: "MIA", value: "Miami", text: "Miami (MIA)" }
];
class Filters extends Component {

  constructor() {
    super();
    this.state = {
      startDate: '',
      endDate: ''
    }
  }

  handleFromDateChange = (e, {name, value}) => {
    const { actions } = this.props;
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
    actions.setStartDate(value);
  }

  handleEndDateChange = (e, {name, value}) => {
    const { actions } = this.props;
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
    actions.setEndDate(value);
  }
  submitFilters = () => {
    const { actions, fromFlight, toFlight } = this.props;
    const { startDate, endDate } = this.state;
    this.setState({ 
      startDate: moment(startDate,'DD-MM-YYYY').format("DDMMYYYY"),
      endDate: moment(endDate, "DDMMYYYY"),
    });
    /*
    actions.setStartDate(this.state.startDate);
    actions.setEndDate(this.state.endDate);
    */
    console.log(this.state);
    console.log(this.props);
    // window.location.assign(`https://bookerproxy.lot.com/service.php?COUNTRY_CODE=PL&LANGUAGE_CODE=PL&ORIGIN=${fromFlight}&DESTINATION=${toFlight}&DEPARTURE_DATE={${this.props.startDate}}&ARRIVAL_DATE={${this.props.endDate}}&ADULT_COUNT={adults}&CHILD_COUNT=0&INFANT_COUNT=0&PARTNER=TFFNZEZK88W4&CLASS=E&utm_source=github&utm_medium=api`);
    window.location.assign("https://bookerproxy.lot.com/service.php?COUNTRY_CODE=PL&LANGUAGE_CODE=PL&ORIGIN=WAW&DESTINATION=CDG&DEPARTURE_DATE=15092019&ARRIVAL_DATE=22092019&ADULT_COUNT=1&CHILD_COUNT=0&INFANT_COUNT=0&PARTNER=TFFNZEZK88W4&CLASS=E&utm_source=github&utm_medium=api");

  }

  render() {
    const { actions } = this.props;
    const { startDate, endDate } = this.state;
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
                onChange={(e, { name, value }) => this.handleFromDateChange(e, { name, value })}
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
                onChange={(e, { name, value }) => this.handleEndDateChange(e, { name, value })}
                fluid
              />
            </Grid.Column>
            <Grid.Column>
              <Button className="Filters__confirm" color="red" fluid onClick={()=>this.submitFilters()}>
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
}

export default Filters;
