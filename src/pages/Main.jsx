import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ContentList from '../components/ContentList';

const Main = () => {
  const { type } = useParams();
  return (
    <MainContainer>
      <ContentList type={type} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: #f7f6fb;
  width: 100%;
  height: 100%;
  padding-top: 60px;
`;
export default Main;
