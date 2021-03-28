import React from "react";
import styled from "styled-components";
import g_bw from "../img/g_bw.JPG";
import j_color from "../img/j_color.JPG";
import {device} from "../device";

const StoryImage2 = () => {
  return (
    <ImageContainer>
      <StoryImg1></StoryImg1>
      <StoryImg2></StoryImg2>
    </ImageContainer>
  );
};

export default StoryImage2;

const ImageContainer = styled.div`
  border: 1px solid green;
  width: 100%;
  display: initial;
  position: absolute;
  top: 1400px;

  @media ${device.laptop} {
    display: none;
  }
`;

const StoryImg1 = styled.div`
  // border: 1px solid gray;
  background: transparent url(${g_bw}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
  display: flex;
  margin: 0.625rem;
`;

const StoryImg2 = styled.div`
  // border: 1px solid gray;
  background: transparent url(${j_color}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
  display: flex;
  margin: 0.625rem;
`;
