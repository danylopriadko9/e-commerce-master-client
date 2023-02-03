import styled from 'styled-components';
import logo from '../../assets/logo2.png';

export const ProductPageContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  min-height: 50vh;
`;

export const ProductPageProductContant = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  /* border-bottom: 2px solid #e6e6e7; */

  @media screen and (max-width: 960px) {
    padding-top: 150px;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (max-width: 435px) {
    width: 100%;
  }
`;

export const ProductPagePhotosBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 760px) {
    margin: 0 auto;
  }
`;

export const ProductPageMainFotoContainer = styled.div`
  width: 450px;
  max-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    height: 550px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`;

export const ProductPageMainPhoto = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
`;

export const ProductPagePhotosContainer = styled.div`
  width: 450px;
  display: flex;
  gap: 3px;
  margin-top: 5px;

  @media screen and (max-width: 960px) {
    width: 350px;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 365px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const ProductPagePhotoContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ProductPagePhoto = styled.img`
  width: 100%;
`;

//----- Product Page Information

export const ProductPageInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  @media screen and (max-width: 435px) {
    margin: 0 10px;
  }
`;

export const ProductPageInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductPageId = styled.p`
  color: #bfc0c1;
`;

export const ProductPageCategory = styled.p`
  color: #3b3d3f;
  font-weight: bold;
`;

export const ProductPageModel = styled.p`
  color: #3b3d3f;
  margin-bottom: 10px;
`;

export const ProductPagePrice = styled.p`
  color: #3b3d3f;
  font-size: 15px;
`;

export const ProductPageDiscount = styled.p`
  display: flex;
  gap: 20px;
`;

export const ProductPageOldPrice = styled.span`
  text-decoration: line-through;
  color: #bfc0c1;
`;

export const ProductPageDiscountPercent = styled.span`
  color: red;
  font-size: 15px;
`;

export const ProductPageButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  font-size: 13px;
  margin-top: 10px;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const ProductPageAddToCartBtn = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  background-color: #8ec1ec;
  color: #fff;
  padding: 15px 0;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #80c0fb;
  }
`;

export const ProductPageCompareBtn = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  background-color: #f4f5f6;
  color: #3b3d3f;
  padding: 15px 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #d3d3d3;
  }
`;

export const ProductPageGlobalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  width: 400px;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.03);
  margin-top: 100px;

  position: relative;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 110%;
  }

  @media screen and (max-width: 760px) {
    width: 100%;

    &::before {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      background-image: url(${logo});
      background-repeat: no-repeat;
      background-position: right;
      background-size: 70%;
    }
  }
`;

export const ProductPageGlobalInfoP = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #3b3d3f;
`;

export const ProductPageShareContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`;
export const ProductPaheShareP = styled.p`
  color: #3b3d3f;
  font-size: 14px;
`;

export const ProductPageShareLinks = styled.div`
  display: flex;
  gap: 3px;
`;
