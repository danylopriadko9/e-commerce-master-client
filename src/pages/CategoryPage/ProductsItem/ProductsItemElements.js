import styled from 'styled-components';

export const ProductsItemContainer = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 50px auto 0;

  @media screen and (max-width: 960px) {
    width: 95%;
  }
`;
export const ProductsItemHeader = styled.header`
  width: 100%;
`;
export const ProductsItemH1 = styled.h1`
  color: #cbccce;
  margin: 25px 0;
`;
export const ProductsItemBarrier = styled.div`
  width: 50px;
  height: 3px;
  background-color: red;
  margin-bottom: 30px;
`;

export const ProductsItemWrap = styled.div``;

//---------------------Product card styles

export const ProductsItemProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 220px;
  color: #3b3d3f;
  font-size: 15px;
  line-height: 25px;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 435px;

  @media screen and (max-width: 760px) {
    width: 180px;
  }

  @media screen and (max-width: 500px) {
    width: 180px;
  }

  @media screen and (max-width: 410px) {
    width: 180px;
  }

  @media screen and (max-width: 320px) {
    width: 180px;
  }

  @media screen and (max-width: 380px) {
    width: 220px;
  }
`;

export const ProductsItemBtnsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductsItemImageContainer = styled.div`
  width: 100%;
  height: 230px;
  max-height: 230px;
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

export const ProductsItemImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ProductsItemCategoryName = styled.p`
  font-weight: bold;
  line-height: 20px;
  padding: 0 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: 370px) {
    font-size: 13px;
  }
`;

export const ProductsItemModelName = styled.p`
  padding: 0 10px;

  @media screen and (max-width: 370px) {
    font-size: 13px;
  }
`;

export const ProductsItemPrice = styled.p`
  padding: 0 10px;
`;

export const ProductsItemDiscount = styled.p`
  padding: 0 10px;
  display: flex;

  @media screen and (max-width: 370px) {
    flex-direction: column;
  }
`;

export const ProductsItemOldPrice = styled.span`
  text-decoration: line-through;
  color: #bfc0c1;
  font-size: 13px;
`;

export const ProductsItemDiscountPercent = styled.span`
  text-decoration: none;
  color: red;
  font-size: 15px;
  margin-left: 20px;
  padding: 0 10px;
`;

export const ProductsItemAddToCartBtn = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  background-color: #8ec1ec;
  color: #fff;
  padding: 15px 0;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: 13px;

  &:hover {
    cursor: pointer;
    background-color: #80c0fb;
  }
`;

export const ProductsItemCompareBtn = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f6;
  color: #3b3d3f;
  padding: 15px 0;
  transition: all 0.2s ease-in-out;
  font-size: 13px;

  &:hover {
    cursor: pointer;
    background-color: #d3d3d3;
  }
`;
