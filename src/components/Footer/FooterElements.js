import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 960px;
  padding-top: 100px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  position: relative;

  @media screen and (max-width: 960px) {
    padding: 100px 10px 0 10px;
    width: 90%;
  }
`;

export const FooterPhoneBtn = styled.div`
  position: absolute;
  top: -35px;
  right: 0;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #00adf6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const FooterWrap = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  width: 70%;
  gap: 55px;

  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FooterLogoContainer = styled.div`
  width: 75px;
  max-width: 75px;
`;

export const FooterBarrier = styled.div`
  width: 50px;
  height: 3px;
  background-color: red;
  margin-bottom: 30px;
`;

export const FooterLogo = styled.img`
  width: 100%;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled(Link)`
  color: #3b3d3f;
  font-size: 15px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 580px) {
    font-size: 13px;
  }

  @media screen and (max-width: 440px) {
    font-size: 11px;
  }
`;

export const FooterLinksFirst = styled.div`
  display: flex;
  gap: 30px;
  color: #3b3d3f;

  @media screen and (max-width: 570px) {
    gap: 15px;
  }

  @media screen and (max-width: 390px) {
    flex-wrap: wrap;
  }
`;

export const FooterLinksSecound = styled.div`
  display: flex;
  gap: 20px;
  color: #bfc0c1;
  margin-bottom: 10px;

  @media screen and (max-width: 570px) {
    gap: 10px;
  }

  @media screen and (max-width: 390px) {
    flex-wrap: wrap;
  }
`;

export const FooterLinksThird = styled.div`
  display: flex;
  gap: 20px;
  color: #bfc0c1;

  @media screen and (max-width: 570px) {
    gap: 15px;
  }

  @media screen and (max-width: 390px) {
    flex-wrap: wrap;
  }
`;

export const FooterPaymentImg = styled.img`
  width: 120px;
`;

export const FooterRight = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const FooterMainNumber = styled.p`
  font-size: 30px;
  color: #0066b8;
`;

export const FooterPhones = styled.p`
  color: #bfc0c1;

  @media screen and (max-width: 580px) {
    font-size: 13px;
  }
`;

export const FooterNames = styled.span`
  color: red;
  margin-left: 10px;
`;

export const FooterSupportName = styled.span`
  color: #0066b8;
  margin-left: 10px;
`;

export const FooterFacebookLink = styled.div`
  color: #4267b2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    justify-content: flex-start;
    gap: 10px;
    margin-top: 20px;
  }
`;

export const FooterAdress = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #bfc0c1;
  margin: 20px auto;

  @media screen and (max-width: 960px) {
    width: 80%;
  }

  @media screen and (max-width: 580px) {
    font-size: 13px;
  }

  @media screen and (max-width: 440px) {
    font-size: 11px;
  }
`;

export const FooterCopywriting = styled.div`
  max-width: 960px;
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
  border-top: 1px solid #bfc0c1;
  text-align: center;
  color: #bfc0c1;

  @media screen and (max-width: 960px) {
    width: 80%;
  }

  @media screen and (max-width: 580px) {
    font-size: 13px;
  }

  @media screen and (max-width: 440px) {
    font-size: 11px;
  }
`;
