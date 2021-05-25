import React from "react";
import styled from "styled-components";
import {g_bw, j_color, jg_bw, jg_bw2, jg_color, jg_rings} from "../img/index";

const Photos = () => {
  return (
    <PhotoWrapper>
      <img src={jg_bw} alt="jg_bw" />
      <img src={jg_rings} alt="jg_rings" />
      <img src={g_bw} alt="g_bw" />
      <img src={j_color} alt="j_color" />
      <img src={jg_bw2} alt="jg_bw2" />
      <img src={jg_color} alt="jg_color" />
    </PhotoWrapper>
  );
};

export default Photos;

const PhotoWrapper = styled.div`
  //   border: 10px solid green;
`;
