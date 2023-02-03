import styled from 'styled-components';

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;

  @media screen and (max-width: 960px) {
    padding-top: 100px;
  }
`;
export const SearchPageH1 = styled.h1`
  color: #cbcccd;
  font-weight: bold;
  max-width: 90%;
  padding-left: 10px;
`;
export const SearchPageBarrier = styled.div`
  width: 50px;
  height: 3px;
  background-color: red;
  margin-bottom: 30px;
`;

export const SearchPageWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 20px;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
  }

  @media screen and (max-width: 410px) {
    grid-column-gap: 0px;
    grid-row-gap: 10px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
`;
