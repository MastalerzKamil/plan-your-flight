import React from 'react';
import { Input } from 'semantic-ui-react'
import { handleChangeFrom } from 'components/Filters/handlers';

import './index.css';

function Filters() {
  return (
    <div className='Filters'>
      <div className='Filters__input'>
        <Input focus onChange={handleChangeFrom} placeholder='Od' />
      </div>
    </div>
  );
}

export default Filters;
