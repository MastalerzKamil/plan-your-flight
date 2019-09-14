import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./OffersCarousel.css";
var React = require("react");
var Carousel = require("react-responsive-carousel").Carousel;

function OffersCarousel() {
  return (
    <div className="OffersCarousel__container">
      <Carousel showArrows={true} dynamicHeight={false} showStatus={false}>
        <div  className="carousel-container">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" />
          <div className="centered title-small">Morze</div>
        </div>
        <div className="carousel-container">
          <img src="https://images.unsplash.com/photo-1445217064281-fcdbe62b62c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          <div className="centered title-small">Góry</div>
        </div>
      </Carousel>
    </div>
  );
}

export default OffersCarousel;
