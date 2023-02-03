import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoriesPageContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    padding-top: 100px;
  }
`;

export const CategoriesPageH1 = styled.h1`
  width: 100%;
  max-width: 100%;
  padding: 30px 0;
  color: #d3d3d3;

  @media screen and (max-width: 960px) {
    padding: 30px;
  }
`;

export const CategoryPageBarrier = styled.div`
  margin-top: 20px;
  width: 50px;
  height: 3px;
  background-color: red;
`;

export const CategoriesPageWrap = styled.div`
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
    grid-column-gap: 0px;
  }

  @media screen and (max-width: 410px) {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
`;

export const CategoriesPageItem = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 200px;
  width: 200px;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const CategoriesPageImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  overflow: hidden;
`;

export const CategoryItemImage = styled.img`
  object-fit: contain;
`;

export const CategoryItemLink = styled.p`
  text-align: center;
  width: 100%;
  color: #2d2d2d;
`;
