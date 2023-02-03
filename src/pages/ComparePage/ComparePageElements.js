import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ComparePageContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  min-height: 50vh;

  @media screen and (max-width: 960px) {
    padding-top: 140px;
  }
`;

export const CompareItemH2 = styled.h2`
  color: #cbccce;
  padding: 20px;
  max-width: 100%;
`;

export const ComparePageHeader = styled.header`
  color: #cbcccd;
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 960px) {
    padding-left: 20px;
  }
`;
export const ComparePageH1 = styled.h1`
  font-weight: bold;
  font-size: 40px;
`;

export const ComparePageBarrier = styled.div`
  width: 50px;
  height: 3px;
  background-color: red;
  margin-bottom: 20px;
`;

export const ComparePageCompareProductQty = styled.span`
  font-weight: 200;
  color: #878888;
  font-size: 30px;
  margin-left: 20px;
`;

export const ComparePageWrap = styled.div`
  display: flex;
`;

export const ComparePageCategoryBtns = styled.div`
  width: 80%;
  overflow: scroll;
  display: flex;
  gap: 10px;
  margin: 20px 0;

  @media screen and (max-width: 960px) {
    padding-left: 20px;
  }
`;

export const ComparePageCategoryBtn = styled.div`
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid ${({ active }) => (active ? '#fff' : '#eaebec')};
  color: ${({ active }) => (active ? '#fff' : '#CBCCCD')};
  transition: all 0.2s ease-in-out;
  background-color: ${({ active }) => (active ? '#80B6EA' : '#fff')};

  &:hover {
    cursor: pointer;
    background-color: ${({ active }) => (active ? '#80B6EA' : '#eaebec')};
    border: 1px solid #fff;
  }
`;

export const CompagePageCharacteristics = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompagePageCharacteristicsHeader = styled.header`
  width: 240px;
  padding: 20px;
  background-color: #f8f8f8;
  height: 340px;

  @media screen and (max-width: 550px) {
    width: 200px;
  }

  @media screen and (max-width: 500px) {
    width: 150px;
  }

  @media screen and (max-width: 375px) {
    width: 130px;
  }
`;

export const CompagePageBtn = styled(Link)`
  color: black;
  font-size: 13px;
  display: flex;
  gap: 5px;
  align-items: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const CompagePageBtnIcon = styled.div`
  color: #878888;
`;

export const CompagePageParams = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  margin-bottom: 100px;

  @media screen and (max-width: 550px) {
    width: 200px;
  }

  @media screen and (max-width: 500px) {
    width: 150px;
  }

  @media screen and (max-width: 375px) {
    width: 130px;
  }
`;

export const CompagePageParam = styled.p`
  width: 100%;
  max-width: 100%;
  font-size: 13px;
  text-align: center;
  padding: 10px 0;
  background-color: ${({ secound }) => (secound ? '#fff' : '#f8f8f8')};

  @media screen and (max-width: 550px) {
    text-align: left;
    padding: 10px;
  }
`;

export const CompareItemsContainer = styled.div`
  display: flex;
  overflow: scroll;
  max-width: 740px;
`;

export const CompareItemCloseContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  top: 0;
  right: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
