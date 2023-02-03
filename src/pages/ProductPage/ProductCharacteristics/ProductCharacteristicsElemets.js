import styled from 'styled-components';

export const ProductCharacteristicsMainContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.03);
`;

export const ProductCharacteristicsContainer = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 70px 0;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    gap: 50px;
    width: 80%;
  }
`;

export const ProductCharacteristicsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 50%;
`;

export const ProductCharacteristicsH1 = styled.h1`
  color: #bfc0c1;
  width: 50%;
`;

export const ProductCharacteristicsBarrier = styled.div`
  width: 50px;
  height: 3px;
  background-color: red;
  margin-bottom: 30px;
`;

export const ProductCharacteristicsText = styled.p`
  color: #3b3d3f;
  font-size: 13px;
`;

export const ProductCharacteristicsP = styled.p`
  color: #3b3d3f;
  line-height: 25px;
`;
