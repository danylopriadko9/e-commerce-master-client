import styled from 'styled-components';

export const CompareItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompareItemProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 220px;
  gap: 10px;
  color: #3b3d3f;
  font-size: 15px;
  line-height: 25px;
  position: relative;
  margin: 0 auto;
  min-height: 340px;
  max-height: 340px;
  background-color: #f8f8f8;

  @media screen and (max-width: 760px) {
    width: 180px;
  }

  @media screen and (max-width: 410px) {
    width: 150px;
  }

  @media screen and (max-width: 370px) {
    width: 130px;
  }
`;

export const CompareItemImageContainer = styled.div`
  width: 100%;
  max-height: 180px;
  min-height: 180px;
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

export const CompareItemImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CompareItemCategoryName = styled.p`
  font-weight: bold;
  line-height: 20px;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 370px) {
    font-size: 13px;
  }
`;

export const CompareItemModelName = styled.p`
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 370px) {
    font-size: 13px;
  }
`;

export const CompareItemPrice = styled.p`
  padding: 0 10px;
`;

export const CompareItemDiscount = styled.p`
  padding: 0 10px;
  display: flex;

  @media screen and (max-width: 370px) {
    flex-direction: column;
  }
`;

export const CompareItemOldPrice = styled.span`
  text-decoration: line-through;
  color: #bfc0c1;
  font-size: 13px;
`;

export const CompareItemDiscountPercent = styled.span`
  text-decoration: none;
  color: red;
  font-size: 15px;
  margin-left: 20px;
  padding: 0 10px;
`;

export const CompareItemParams = styled.div`
  display: flex;
  width: 220px;
  flex-direction: column;
  height: 200px;
  margin-bottom: 100px;

  @media screen and (max-width: 760px) {
    width: 180px;
  }

  @media screen and (max-width: 410px) {
    width: 150px;
  }

  @media screen and (max-width: 370px) {
    width: 130px;
  }
`;

export const CompareItemParam = styled.p`
  width: 100%;
  font-size: 13px;
  text-align: center;
  padding: 10px 0;
  background-color: ${({ secound }) => (secound ? '#fff' : '#f8f8f8')};
`;
