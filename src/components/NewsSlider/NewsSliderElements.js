import styled from 'styled-components';

export const NewsSliderContainer = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 50px auto 0;

  @media screen and (max-width: 960px) {
    width: 95%;
  }
`;

export const NewsSliderHeader = styled.header`
  width: 100%;
`;

export const NewsSliderH1 = styled.h1`
  color: #cbccce;
  margin: 25px 0;
`;

export const NewsSliderBarrier = styled.div`
  width: 50px;
  height: 3px;
  background-color: red;
`;

export const NewsSliderWrap = styled.div``;

//-------- NewItem styles

export const NewItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 220px;
  color: #3b3d3f;
  font-size: 15px;
  position: relative;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 760px) {
    width: 180px;
  }

  @media screen and (max-width: 500px) {
    width: 150px;
  }

  @media screen and (max-width: 320px) {
    width: 130px;
  }

  @media screen and (max-width: 280px) {
    width: 180px;
  }
`;

export const NewItemImageContainer = styled.div`
  width: 100%;
  height: 150px;
  max-height: 150px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const NewItemImage = styled.img`
  width: 100%;
  border-radius: 10px;
  height: ${({ src }) => (src ? 'auto' : '150px')};
  background-color: ${({ src }) => (src ? 'none' : 'blue')};
`;

export const NewItemDate = styled.p`
  color: #3b3d3f;
  font-weight: bold;
  padding: 0 10px;
`;

export const NewItemDescription = styled.p`
  width: 100%;
  max-width: 100%;
  padding: 10px;
  color: #3b3d3f;
  height: 80px;
  font-size: 13px;

  &::after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 2em;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white 100%);
    pointer-events: none;
  }
`;

// export const NewItemButton = styled.p`
//   color: red;
//   padding: 0 10px;
// `;
