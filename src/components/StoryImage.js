import React from "react";
import styled from "styled-components";
import {g_bw, j_color, jg_bw, jg_color} from "../img/index";
import {device} from "../device";
import Slider from "react-slick";

const StoryImage = () => {
  return (
    <LeftContainer>
      {/* <StoryContainer>
        <StoryImg1></StoryImg1>
        <StoryImg2></StoryImg2>
      </StoryContainer> */}
      <Slider
        autoplay={true}
        infinite={true}
        speed={2000}
        slidesToScroll={1}
        arrows={true}
        slidesToShow={3}
      >
        <StoryImg1></StoryImg1>
        <StoryImg2></StoryImg2>
        <StoryImg3></StoryImg3>
        <StoryImg4></StoryImg4>
      </Slider>
    </LeftContainer>
  );
};

export default StoryImage;

const LeftContainer = styled.div`
  display: none;

  @media ${device.laptopL} {
    width: 60%;
    margin: 1.5rem;
    margin-bottom: 0;
    display: initial;
  }
`;

// const StoryContainer = styled.div`
//   // border: 1px solid green;
//   display: grid;
//   grid-template-columns: repeat(6, 16.5%);
//   grid-template-rows: repeat(4, 20%);
//   column-gap: 1rem;
//   margin-left: 2rem;
// `;

const StoryImg1 = styled.div`
  // border: 1px solid gray;
  background: transparent url(${g_bw}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
  width: 50%;
  // grid-column: 1 / span 5;
  // grid-row: 1 / span 3;
`;

const StoryImg2 = styled.div`
  background: transparent url(${j_color}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
  // grid-column: 4 / span 6;
  // grid-row: 2 / span 5;
`;

const StoryImg3 = styled.div`
  background: transparent url(${jg_bw}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
`;

const StoryImg4 = styled.div`
  background: transparent url(${jg_color}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
`;
