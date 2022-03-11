import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BsUpload } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
const Slide = ({ img, title }) => {
  return (
    <div>
      <img
        width="720px"
        height="360px"
        src={
          img
            ? img
            : 'https://images.unsplash.com/photo-1634117622592-114e3024ff27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
        }
      />
      <YoutubeContainer>
        {/* <Banner /> */}
        <MainContainer>
          <Title>{title}</Title>
          <ButtonContainer>
            <IconBtn>
              <FiHeart size="32" />
            </IconBtn>
            <IconBtn>
              <BsUpload size="32" />
            </IconBtn>
          </ButtonContainer>
        </MainContainer>
      </YoutubeContainer>
    </div>
  );
};

const YoutubeContainer = styled.div`
  width: 720px;
  background-color: white;
`;
const MainContainer = styled.div`
  /* display: flex; */
  width: 720px;

  justify-content: space-between; ;
`;
const ButtonContainer = styled.div`
  text-align: right;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
`;
const IconBtn = styled.button`
  border: none;
  color: silver;
  background-color: white;
  padding: 10px;
`;

Slide.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default Slide;
