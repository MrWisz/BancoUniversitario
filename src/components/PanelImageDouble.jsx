import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PanelImageDoubleContainer = styled.div`
  background-color: var(--background-default-default);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--space-1600);
  box-sizing: border-box;
  gap: var(--space-1200);
  opacity: 0.8;
  align-self: stretch;
  max-width: 100%;

  @media (max-width: 1300px) {
    padding: var(--space-800);
    gap: var(--space-600);
  }

  @media (max-width: 768px) {
    padding: var(--space-400);
    gap: var(--space-300);
  }

  @media (max-width: 400px) {
    padding: var(--space-200);
    gap: var(--space-150);
    flex-direction: column;
  }
`;

const ImageIcon = styled.img`
  flex: 1;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  min-width: 599px;
  min-height: 350px;
  align-self: stretch;
  max-width: 100%;

  @media (max-width: 1300px) {
    min-width: 400px;
    min-height: 233px;
  }

  @media (max-width: 768px) {
    min-width: 200px;
    min-height: 117px;
  }

  @media (max-width: 400px) {
    min-width: 100px;
    min-height: 58px;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-prev, .slick-next {
    z-index: 1;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }
`;

const PanelImageDouble = ({ className = "", image, image1 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // Duración más larga entre cambios de imagen
    arrows: true,
  };

  return (
    <PanelImageDoubleContainer className={`panelImageDouble ${className}`}>
      <CarouselContainer>
        <Slider {...settings}>
          <ImageIcon className="imageIcon" alt="" src={image} />
          <ImageIcon className="imageIcon" alt="" src={image1} />
        </Slider>
      </CarouselContainer>
    </PanelImageDoubleContainer>
  );
};

PanelImageDouble.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
};

export default PanelImageDouble;