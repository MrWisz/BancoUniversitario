import React from 'react';
import styled from 'styled-components';

const FrameContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: fit-content;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FrameItem = styled.div`
  text-align: center;
  margin: 0 20px;

  @media screen and (max-width: 600px) {
    margin: 10px 0;
  }
`;

const FrameImage = styled.img`
  position: relative;
  border-radius: var(--radius-400);
  max-height: 100%;
  object-fit: cover;
  width: 300px;
  height: 150px;
  max-width: 100%;

  @media screen and (max-width: 900px) {
    width: 250px;
    height: 125px;
  }

  @media screen and (max-width: 600px) {
    width: 200px;
    height: 100px;
  }

  @media screen and (max-width: 400px) {
    width: 150px;
    height: 75px;
  }

  @media screen and (max-width: 290px) {
    width: 100px;
    height: 50px;
  }
`;

const FrameComponent4 = () => {
  return (
    <FrameContainer>
      <FrameItem>
        <FrameImage
          className="download1Icon"
          loading="lazy"
          alt=""
          src="/download-1@2x.png"
        />
        <p>¡Cancela tu matrícula!</p>
      </FrameItem>
      <FrameItem>
        <FrameImage
          className="images1Icon"
          loading="lazy"
          alt=""
          src="/images-1@2x.png"
        />
        <p>Sigue adelante...</p>
      </FrameItem>
      <FrameItem>
        <FrameImage
          className="images2Icon"
          loading="lazy"
          alt=""
          src="/images-2@2x.png"
        />
        <p>¡Alcanza la meta!</p>
      </FrameItem>
    </FrameContainer>
  );
};

export default FrameComponent4;