import React from "react";
import styled from "styled-components";

const PhotoTile = (props) => {
  return (
    <Tile>
      {props}
      <img src={props.data} alt="123" />
    </Tile>
  );
};

export default PhotoTile;

const Tile = styled.div`
  margin: 15px;
  cursor: pointer;
  overflow: hidden;
  width: 18vw;
  height: 18vw;
`;
