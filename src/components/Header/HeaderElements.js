import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  background-color: #fff;
  gap: 20px;
  border-top: 3px solid #0066b8;
  padding: 20px 10px 0;

  position: relative;
  margin-bottom: 10px;

  @media screen and (max-width: 960px) {
    position: fixed;
    padding-bottom: 10px;
    box-shadow: 0 5px 20px -15px gray;
  }
`;

export const HamburgerContainer = styled.div`
  @media screen and (max-width: 500px) {
    display: ${({ inputStatus }) => (inputStatus ? 'none' : 'block')};
  }
`;

export const HeaderLogoContainer = styled(Link)`
  width: 75px;

  @media screen and (max-width: 750px) {
    width: 50px;
  }

  @media screen and (max-width: 500px) {
    display: ${({ inputStatus }) => (inputStatus ? 'none' : 'block')};
  }
`;

export const HeaderLogo = styled.img`
  width: 100%;
`;

export const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const HeaderLinksContainer = styled.nav`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const HeaderLinks = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  color: black;
  line-height: 25px;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderInputContainer = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 550px) {
    display: none;
  }

  @media screen and (max-width: 550px) {
    display: ${({ status }) => (status ? 'flex' : 'none')};
  }

  @media screen and (max-width: 320px) {
    gap: 0;
  }
`;

export const HeaderInput = styled.input`
  width: 415px;
  border: none;
  border-bottom: 1px solid #ecedee;
  height: 40px;
  outline: none;

  @media screen and (max-width: 750px) {
    width: 200px;
  }

  @media screen and (max-width: 320px) {
    width: 150px;
  }
`;

export const HeaderInputBtn = styled.button`
  width: 70px;
  background-color: #f4f5f6;
  border: none;
  color: #c1c2c3;
  transition: 0.2s all;
  height: 100%;

  &:hover {
    background-color: #d4d6d8;
    color: #8d8d8d;
    cursor: pointer;
  }

  @media screen and (max-width: 320px) {
    width: 60px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const HeaderRightLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export const HeaderRightLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  color: #ccc;
  line-height: 25px;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderRightWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNumber = styled.span`
  font-size: 30px;
  color: #0066b8;
`;

export const HeaderMobileButtons = styled.div`
  display: none;

  @media screen and (max-width: 1050px) {
    display: flex;
    align-items: center;
    margin-right: 10px;
    gap: 15px;
  }
`;

export const HeaderIconContainer = styled.div`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 30px;
  display: none;

  @media screen and (max-width: 550px) {
    display: flex;
  }
`;

export const HeaderCartContainer = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 30px;
  position: relative;

  @media screen and (max-width: 500px) {
    display: ${({ inputStatus }) => (inputStatus ? 'none' : 'block')};
  }
`;

export const HeaderCartQty = styled.div`
  display: flex;
  position: absolute;
  font-size: 13px;
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: white;
  top: -10px;
  right: -10px;
`;

export const HeaderFooter = styled.footer`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  bottom: -110px;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const HeaderCatalog = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  left: -50px;
  bottom: 50px;
`;

export const HeaderFooterRight = styled.div`
  height: 80px;
  width: 120px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: white;
`;

export const HeaderRigthCart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  cursor: pointer;
`;

export const HeaderRightLogin = styled.div`
  color: #0058cf;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const HeaderBarrier = styled.div`
  position: absolute;
  height: 2px;
  width: 15px;
  background-color: #0058cf;
  bottom: -1px;
  left: 12px;
`;

export const HeaderPrice = styled.span`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 13px;
`;

export const HeaderSpan = styled.span`
  margin-left: 10px;
`;

export const HeaderFooterLink = styled(Link)`
  display: flex;
`;

export const HeaderFooterIcon = styled.div`
  font-size: 20px;
  margin-left: 5px;
`;

export const HeaderLanguageBtn = styled.div`
  font-size: 20px;
  color: #8d8d8d;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: black;
    cursor: pointer;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
