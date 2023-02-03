import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BreadcrumbsWrap = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 960px) {
    padding-top: 120px;
  }
`;

export const BreadcrumbsContainer = styled.div`
  width: 100%;
  overflow: scroll;
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
`;

export const BreadcrumbsTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;

  border-left: 5px solid #db0029;
`;

export const BreadcrumbsLink = styled(Link)`
  font-size: 13px;
  color: #2d2d2d;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

export const CompareLinkContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 13px;
  color: #cbccce;
  padding: 20px 0;
  border-top: 2px solid #f8f8f8;
`;

export const CompareSpan = styled.span`
  color: black;
`;

export const CompareLink = styled(Link)`
  color: #cbccce;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
