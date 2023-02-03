import styled from 'styled-components';

export const ProductSliderContainer = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 50px auto 0;

  @media screen and (max-width: 960px) {
    width: 95%;
  }
`;
export const ProductSliderHeader = styled.header`
  width: 100%;
`;
export const ProductSliderH1 = styled.h1`
  color: #cbccce;
  margin: 25px 0;
`;
export const ProductSliderBarrier = styled.div`
  width: 50px;
  height: 3px;
  background-color: red;
  margin-bottom: 30px;
`;

export const ProductSliderWrap = styled.div`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
`;

//---------------------Product card styles

export const ProductSliderProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 220px;
  gap: 10px;
  color: #3b3d3f;
  font-size: 15px;
  line-height: 25px;
  position: relative;
  margin: ${({ center }) => (center ? '0 auto' : '0 10px')};

  @media screen and (max-width: 760px) {
    width: 180px;
  }

  @media screen and (max-width: 500px) {
    width: 180px;
  }

  @media screen and (max-width: 410px) {
    width: 150px;
  }

  @media screen and (max-width: 370px) {
    width: 130px;
  }

  @media screen and (max-width: 280px) {
    width: 180px;
  }
`;

export const ProductSliderProductOverflow = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  opacity: 0;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  /* @media screen and (max-width: 500px) {
    display: none;
  } */

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductSlideIcon = styled.div`
  padding: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);

  &:hover {
    transform: scale(1.3);
  }
`;

export const ProductSliderImageContainer = styled.div`
  width: 100%;
  height: 230px;
  max-height: 230px;
  min-height: 230px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`;

export const ProductSliderImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ProductSliderCategoryName = styled.p`
  font-weight: bold;
  line-height: 20px;
  padding: 0 10px;

  @media screen and (max-width: 370px) {
    font-size: 13px;
  }
`;

export const ProductSliderModelName = styled.p`
  padding: 0 10px;

  @media screen and (max-width: 370px) {
    font-size: 13px;
  }
`;

export const ProductSliderPrice = styled.p`
  padding: 0 10px;
`;

export const ProductSliderDiscount = styled.p`
  padding: 0 10px;
  display: flex;

  @media screen and (max-width: 370px) {
    flex-direction: column;
  }
`;

export const ProductSliderOldPrice = styled.span`
  text-decoration: line-through;
  color: #bfc0c1;
  font-size: 13px;
`;

export const ProductSliderDiscountPercent = styled.span`
  text-decoration: none;
  color: red;
  font-size: 15px;
  margin-left: 20px;
  padding: 0 10px;
`;
