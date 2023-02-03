import styled from 'styled-components';

export const SliderContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
`;

export const Slide = styled.div`
  width: 100%;
  max-width: 960px;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
  object-fit: contain;
  height: 500px;

  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SlideText = styled.h2`
  margin: 190px 0 20px 65px;
  line-height: 50px;
  font-size: 50px;
  font-weight: bold;
  color: white;
  z-index: 2;

  @media screen and (max-width: 500px) {
    font-size: 32px;
    text-align: center;
    margin: 50px 0 20px 0;
  }

  @media screen and (max-width: 320px) {
    font-size: 25px;
    width: 90%;
    margin: 50px auto 20px;
  }
`;

export const SlideBtn = styled.button`
  width: 200px;
  height: 50px;
  margin-left: 65px;
  background-color: red;
  color: white;
  z-index: 2;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    margin: 0;
    font-size: 20px;
  }
`;

export const SliderOverflow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
