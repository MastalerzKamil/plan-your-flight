import React from 'react';
import { Input } from 'semantic-ui-react'

import './index.css';
import 'semantic-ui-css/semantic.min.css';

function Filters({ actions }) {
  return (
    <div className='Filters'>
      <div className='Filters__input'>
        <Input focus onChange={(e) => actions.setStartDate(e.target.value)} placeholder='Od' />
      </div>
    </div>
  );
}

export default Filters;
