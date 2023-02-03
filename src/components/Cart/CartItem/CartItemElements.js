import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 20px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
// Left ------------------------------------

export const CartItemPhotoContainer = styled.div`
  width: 125px;
  height: 125px;
  overflow: hidden;
`;

export const CartItemPhoto = styled.img`
  object-fit: contain;
`;

export const CartItemLeft = styled.div`
  display: flex;
  gap: 10px;
`;

export const CartItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const CartItemId = styled.p`
  color: #bfc0c1;
`;

export const CartItemCategory = styled.p`
  color: #3b3d3f;
  font-weight: bold;
`;

export const CartItemModel = styled.p`
  color: #3b3d3f;
  margin-bottom: 10px;
`;

export const CartItemPrice = styled.p`
  color: #3b3d3f;
  font-size: 15px;
`;

export const CartItemDiscount = styled.p`
  display: flex;
  gap: 20px;
`;

export const CartItemOldPrice = styled.span`
  text-decoration: line-through;
  color: #bfc0c1;
`;

export const CartItemDiscountPercent = styled.span`
  color: red;
  font-size: 15px;
`;

//Center ----------------------------

export const CartItemCenter = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media screen and (max-width: 700px) {
    margin: 20px 0;
    justify-content: center;
  }
`;

export const CartItemCounterBtn = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    font-size: 20px;
  }
`;

export const CartItemCounterInput = styled.input`
  width: 50px;
  height: 50px;
  text-align: center;
  outline: none;
  border: 1px solid #3b3d3f;
  font-size: 15px;
`;

// Right ---------------

export const CartItemRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: #3b3d3f;

  @media screen and (max-width: 700px) {
    flex-direction: row;
    margin: 0 0 30px;
    width: 100%;
    justify-content: center;
  }
`;

export const CartItemSum = styled.span`
  font-size: 13px;
`;

export const CartItemSumValue = styled.span`
  font-size: 15px;
`;
