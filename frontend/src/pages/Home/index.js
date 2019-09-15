import React from 'react';
import './index.css';
import FiltersContainer from 'containers/FiltersContainer';
import OffersCarousel from 'components/OffersCarousel'
import QuestionForm from 'components/QuestionForm';

function Home() {
  return (
    <div className='Root'>
      <FiltersContainer />
      <OffersCarousel />
      <QuestionForm/>
    </div>
  );
}

export default Home;
