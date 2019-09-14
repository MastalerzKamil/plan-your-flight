import React from 'react';
import { Input, Button } from 'semantic-ui-react'

import './index.css';
import 'semantic-ui-css/semantic.min.css';

function Filters({ actions, flightFilter, dateFilter }) {
  return (
    <div className='Filters'>
      <div className='Filters__row'>
        <Input className='Filters__flightInput' focus onChange={(e) => actions.setfromFlight(e.target.value)} placeholder='Skąd lecimy' />
        <Input className='Filters__flightInput' focus onChange={(e) => actions.setToFlight(e.target.value)} placeholder='Dokąd lecimy' />
      </div>

      <div className='Filters__row'>
        <Input className='Filters__dateInput' focus onChange={(e) => actions.setStartDate(e.target.value)} placeholder='Od kiedy' />
        <Input className='Filters__dateInput' focus onChange={(e) => actions.setEndDate(e.target.value)} placeholder='Do kiedy' />
        <Button className='Filters__confirm' color='red'>Zatwierdź</Button>
      </div>
    </div>
  );
}

export default Filters;
