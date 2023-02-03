import styled from 'styled-components';

export const LanguagePopupContainer = styled.div`
  display: ${({ languageStatus }) => (languageStatus ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const LanguagePopupWrap = styled.div`
  max-width: 440px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  position: relative;
  min-height: 200px;

  @media screen and (max-width: 700px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export const LanguagePopupH1 = styled.h1`
  text-align: center;
  color: #cbcccd;
`;

export const LanguagePopupSelectWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: auto 0;
`;

export const LanguagePopupLan = styled.span`
  font-size: 30px;
  color: #878888;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    font-size: 40px;
    color: #2d2d2d;
    cursor: pointer;
  }
`;
