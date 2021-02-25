import React from "react";
import styled from "styled-components";
import g_bw from "../img/g_bw.JPG";
import j_color from "../img/j_color.JPG";

const StoryImage = () => {
  return (
    <StoryContainer>
      <StoryImg1></StoryImg1>
      <StoryImg2></StoryImg2>
    </StoryContainer>
  );
};

export default StoryImage;

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`;

const StoryImg1 = styled.div`
  border: 1px solid gray;
  background: transparent url(${g_bw}) no-repeat center;
  background-size: contain;
  height: 600px;
  width: 50%;
`;

const StoryImg2 = styled.div`
  border: 1px solid gray;
  background: transparent url(${j_color}) no-repeat center;
  background-size: contain;
  height: 600px;
  width: 50%;
  position: relative;
  top: -400px;
  left: 500px;
`;
