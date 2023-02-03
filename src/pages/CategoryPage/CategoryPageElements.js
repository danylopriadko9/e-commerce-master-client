import styled from 'styled-components';

export const CategoryPageContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
`;

export const CategoryPageFilterContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f4f5f6;
  min-height: 240px;
  display: ${({ filterStatus }) => (filterStatus ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const CategoryPageBrandsAndCostContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const CategoryPageBrandsContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
`;

export const CategoryPageH3 = styled.h3`
  color: #878888;
  margin-bottom: 10px;
`;

export const CategoryPageBrand = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 10px;
`;

export const CategoryPageRadio = styled.input``;

export const CategoryPageCharacteristics = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryPageCharacteristicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CategoryPageSelectContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 1fr;
  justify-content: space-between;
`;

export const CategoryPageSpan = styled.span`
  font-size: 13px;
  color: #2d2d2d;
`;

export const CategoryPageSelect = styled.select`
  width: 120px;
`;

export const CategoryPageOption = styled.option``;

export const CategoryPageBtnContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  height: 50px;
  background-color: ${({ filterStatus }) =>
    filterStatus ? '#EAEBEC' : '#fff'};
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const CategoryPageSubmitBtn = styled.div`
  width: 50px;
  height: 50px;
  display: ${({ filterStatus }) => (filterStatus ? 'flex' : 'none')};
  background-color: #bfc0c1;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #eaebec;
    cursor: pointer;
  }
`;

export const CategoryPageFilterBtn = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  gap: 5px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const CategoryPageBtnSpan = styled.span`
  font-size: 13px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CategoryPageProductsContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 90px;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
  }

  @media screen and (max-width: 410px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
`;

export const CategoryPageH1 = styled.h1`
  color: #cbccce;
  padding: 20px 0;
  display: flex;
  flex-direction: ${({ flexRow }) => (flexRow ? 'row' : 'column')};
`;

export const CategoryPageBarrier = styled.div`
  width: 50px;
  height: 3px;
  background-color: red;
  margin-bottom: 30px;
`;
