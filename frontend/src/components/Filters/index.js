import React from 'react';
import { Button, Checkbox, Dropdown } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const airports = [
  { key: 'WAW', value: 'Warszawa', text: 'Warszawa (WAW)' },
  { key: 'GDA', value: 'Gdańsk', text: 'Gdańsk (GDA)' },
  { key: 'JFK', value: 'Nowy Jork', text: 'Nowy Jork (JFK)' },
  { key: 'MIA', value: 'Miami', text: 'Miami (MIA)' }
];

function Filters({ actions, flightFilter, startDate, endDate }) {
  return (
    <div className='Filters'>
      <div className='Filters__row'>
        <Dropdown className='Filters__flightInput' onChange={(e) => actions.setFromFlight(e.target.value)} placeholder='Skąd lecimy' search selection options={airports} />
        <Dropdown className='Filters__flightInput' onChange={(e) => actions.setToFlight(e.target.value)} placeholder='Dokąd lecimy' search selection options={airports} />
      </div>

      <div className='Filters__row'>
        <Checkbox className='Filters__checkbox' checked={true} label='Bilet w 2 strony' />
        <Checkbox className='Filters__checkbox' label='Bilet w jedną stronę' />
      </div>

      <div className='Filters__row'>
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
        <Button className='Filters__confirm' color='red'>Zatwierdź</Button>
      </div>
    </div>
  );
}

export default Filters;
