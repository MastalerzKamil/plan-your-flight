import React from 'react';
import './index.css';
import FiltersContainer from 'containers/FiltersContainer';
import OffersCarousel from 'components/OffersCarousel'
import QuestionForm from 'components/QuestionForm';
import OffersList from 'components/OffersList';

function Home() {
  return (
    <div className='Root'>
      <FiltersContainer />
      <OffersCarousel />
      <QuestionForm/>
      <div className='Home__offersList'>
        <OffersList />
      </div>
    </div>
  );
}

export default Home;
