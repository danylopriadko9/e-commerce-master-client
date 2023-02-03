import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const OferContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  overflow: scroll;
`;

export const OferWrap = styled.div`
  max-width: 940px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  position: relative;
  overflow: scroll;

  @media screen and (max-width: 700px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export const OferHeader = styled.h1`
  width: 100%;
  padding: 30px 0 10px;
  color: #d3d3d3;
  background-color: #fff;
`;

export const OferCloseContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #3b3d3f;
  background-color: rgba(0, 0, 0, 0.03);
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  @media screen and (max-width: 750px) {
    font-size: 25px;
  }
`;

export const OferHeaderBarrier = styled.div`
  margin-top: 20px;
  width: 50px;
  height: 3px;
  background-color: red;
`;

export const OferHero = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 30px 20px;
  background-color: #e3effb;
  color: #2d2d2d;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 670px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const OferHeroSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: ${({ alingCenter }) => (alingCenter ? 'center' : 'flex-start')};

  @media screen and (max-width: 670px) {
    width: 100%;
  }
`;

export const OferHeroH3 = styled.h3``;

export const OferP = styled.p`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const OferSpan = styled.span``;

export const OferBth = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  background-color: #80b6ea;
  color: white;
  font-size: 15px;
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: #99c5ee;
  }
`;

export const OferConfirmLink = styled(Link)`
  width: 70%;
  font-size: 13px;
  text-align: center;
  color: #3b3d3f;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
`;

export const OferBlock = styled.div`
  display: flex;
  flex-direction: ${({ directionColumn }) =>
    directionColumn ? 'column' : 'row'};
  width: 100%;
  padding: 40px 0;
  border-bottom: 1px solid #d3d3d3;
`;

export const OferTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const OferH2 = styled.h2`
  color: #d3d3d3;
`;

export const OferSectionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const OferInputs = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 550px) {
    width: 100%;
    gap: 10px;
    margin-top: 10px;
  }
`;

export const OferInputContainer = styled.div`
  width: ${({ widthPercent }) => widthPercent};
  background-color: red;
  height: 20px;
`;

export const OferInput = styled.input`
  max-width: 100%;
  padding: 10px 20px;
  border: 1px solid #d3d3d3;
  width: 100%;
  outline: none;

  &:focus {
    border: 1px solid #3b3d3f;
  }
`;

export const OferRadioContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: ${({ directionColumn }) =>
    directionColumn ? 'column' : 'row'};
  gap: 30px;

  @media screen and (max-width: 670px) {
    flex-direction: column;
  }
`;

export const OferRadioWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 49%;

  @media screen and (max-width: 670px) {
    width: 100%;
  }
`;

export const OferRadioFirlsLine = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 670px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const OferRadio = styled.input``;

export const OferRadioLabel = styled.label`
  color: #3b3d3f;
  font-weight: 300;
`;

export const OferConfirmBlock = styled.div`
  padding: 60px 0 30px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
