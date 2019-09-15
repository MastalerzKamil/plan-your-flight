import React from 'react';
import { Input, Button } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

function Filters({ actions, flightFilter, startDate, endDate }) {
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
            name="fromDate"
            placeholder="Od kiedy"
            value={startDate}
            iconPosition="right"
            onChange={(e, {name, value}) => actions.setStartDate(value)}
          />
          <DateInput
            className='Filters__dateInput'
            name="toDate"
            placeholder="Od kiedy"
            value={endDate}
            iconPosition="right"
            onChange={(e, {name, value}) => actions.setEndDate(value)}
          />
        </div>
        <Button className='Filters__confirm' color='red'>Zatwierdź</Button>
      </div>
    </div>
  );
}

export default Filters;
