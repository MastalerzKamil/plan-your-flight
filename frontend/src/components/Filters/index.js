import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

class Filters extends Component {
  constructor() {
    super();
    this.state = {
      startDate: '',
      endDate: '',
    }
  }

  handleStartDate(e, {name, value}) {
    const { actions } = this.props;
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
    actions.setStartDate(value)
  }

  handleEndDate(e, {name, value}) {
    const { actions } = this.props;
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
    actions.setEndDate(value)
  }

  render() {
    const { startDate, endDate } = this.state;
    const { actions } = this.props;
    return (
      <div className='Filters'>
        <div className='Filters__row'>
          <Input className='Filters__flightInput' focus onChange={(e) => actions.setfromFlight(e.target.value)} placeholder='Skąd lecimy' />
          <Input className='Filters__flightInput' focus onChange={(e) => actions.setToFlight(e.target.value)} placeholder='Dokąd lecimy' />
        </div>
  
        <div className='Filters__row'>
          <div className='Filters__dates'>
            <DateInput
              className='Filters__dateInput'
              name="startDate"
              placeholder="Od kiedy"
              value={startDate}
              iconPosition="right"
              onChange={(e, {name, value}) => this.handleStartDate(e, {name, value})}
            />
            <DateInput
              className='Filters__dateInput'
              name="endDate"
              placeholder="Od kiedy"
              value={endDate}
              iconPosition="right"
              onChange={(e, {name, value}) => this.handleEndDate(e, {name, value})}
            />
          </div>
          <Button className='Filters__confirm' color='red'>Zatwierdź</Button>
        </div>
      </div>
    );
  }
}

export default Filters;
