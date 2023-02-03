import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartContainer = styled.div`
  display: ${({ cartStatus }) => (cartStatus ? 'flex' : 'none')};
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

export const CartWrap = styled.div`
  max-width: 940px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  position: relative;

  @media screen and (max-width: 700px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export const CartHeader = styled.h1`
  width: 100%;
  padding: 30px 0;
  color: #d3d3d3;
`;

export const CartCloseContainer = styled.div`
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

export const CartHeaderBarrier = styled.div`
  margin-top: 20px;
  width: 50px;
  height: 3px;
  background-color: red;
`;

export const CartFooter = styled.footer`
  width: 100%;
  height: 170px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    padding-top: 20px;
  }
`;

export const CartContinueBtn = styled(Link)`
  display: flex;
  gap: 10px;
  color: #d3d3d3;
  align-items: center;
  height: 50px;

  &:hover {
    color: #3b3d3f;
  }

  @media screen and (max-width: 750px) {
    height: auto;
  }
`;

export const CartLink = styled.span`
  text-decoration: underline;
`;

export const CartCheckInBlock = styled.div`
  max-width: 330px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #3b3d3f;
`;

export const CartTotalPrice = styled.p`
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size: 25px;
  font-weight: 100;
`;

export const CartCheckInBtn = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  background-color: #8ec1ec;
  color: #fff;
  height: 50px;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: 13px;

  &:hover {
    cursor: pointer;
    background-color: #80c0fb;
    font-size: 15px;
  }
`;

export const CartH2 = styled.h2`
  color: #d3d3d3;
  font-weight: bold;
`;

//------- Cart Items Container

export const CartItemsContainer = styled.div`
  width: 100%;
  min-height: 200px;
`;
