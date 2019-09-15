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
      <div className='Home__offersTitle'>Oto przygotowane przez nas oferty dla Ciebie</div>
        <OffersList />
      </div>
    </div>
  );
}

export default Home;
