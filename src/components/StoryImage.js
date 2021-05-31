import React from "react";
import styled from "styled-components";
import {g_bw, j_color, jg_bw, jg_bw2, jg_color, jg_rings} from "../img/index";
import {device} from "../device";
import Slider from "react-slick";

const StoryImage = () => {
  return (
    <LeftContainer>
      <Slider
        autoplay={true}
        infinite={true}
        speed={2000}
        slidesToScroll={1}
        arrows={false}
        slidesToShow={3}
      >
        <StoryImg1></StoryImg1>
        <StoryImg2></StoryImg2>
        <StoryImg3></StoryImg3>
        <StoryImg4></StoryImg4>
        <StoryImg5></StoryImg5>
        <StoryImg6></StoryImg6>
      </Slider>
    </LeftContainer>
  );
};

export default StoryImage;

const LeftContainer = styled.div`
  display: none;

  @media ${device.laptop} {
    width: 60%;
    margin: 1.5rem;
    margin-bottom: 0;
    display: initial;
  }
`;

const StoryImg1 = styled.div`
  background: transparent url(${g_bw}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
  width: 50%;
`;

const StoryImg2 = styled.div`
  background: transparent url(${j_color}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
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

const StoryImg5 = styled.div`
  background: transparent url(${jg_bw2}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
`;

const StoryImg6 = styled.div`
  background: transparent url(${jg_rings}) no-repeat center;
  background-size: contain;
  height: 37.5rem;
`;
