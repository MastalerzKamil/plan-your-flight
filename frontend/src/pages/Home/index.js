import React from 'react';
import './index.css';
import Filters from 'components/Filters';
import QuestionForm from 'components/QuestionForm';

function Home() {
  return (
    <div className='Root'>
      <Filters />
      ---
      <QuestionForm/>
    </div>
  );
}

export default Home;
