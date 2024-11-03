import PropTypes from "prop-types";
import styled from "styled-components";

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
`;

const PanelImageDouble = ({ className = "", image, image1 }) => {
  return (
    <PanelImageDoubleContainer className={`panelImageDouble ${className}`}>
      <ImageIcon className="imageIcon" alt="" src={image} />
      <ImageIcon className="imageIcon" alt="" src={image1} />
    </PanelImageDoubleContainer>
  );
};

PanelImageDouble.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
};

export default PanelImageDouble;