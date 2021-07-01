import React, {useState} from "react";
import styled from "styled-components";
import {device} from "../device";

const PhotoTile = (props) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [open, setOpen] = useState(false);
  let tileStyle = {};

  const mouseEnter = (e) => {
    e.preventDefault();
    if (mouseOver === false) {
      setMouseOver(true);
    }
  };

  const mouseLeave = (e) => {
    e.preventDefault();
    if (mouseOver === true) {
      setMouseOver(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  if (open) {
    tileStyle = {
      width: "62vw",
      height: "80vw",
      position: "absolute",
      top: "50%",
      left: "50%",
      margin: "0",
      marginTop: "-31vw",
      marginLeft: "-31vw",
      boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
      transform: "none",
    };
  } else {
    tileStyle = {
      width: "18vw",
      height: "18vw",
    };
  }

  return (
    <Tile style={tileStyle}>
      <TileImage
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={handleClick}
        src={props.photo.image}
        alt={props.photo.name}
      />
    </Tile>
  );
};

export default PhotoTile;

const Tile = styled.div`
  margin: 5px;
  cursor: pointer;
  overflow: hidden;
  width: 40vw;
  height: 40vw;
  @media ${device.laptop} {
    margin: 15px;
    width: 18vw;
    height: 18vw;
  }
`;

const TileImage = styled.img`
  width: 100%;
  min-height: 15.625rem;
  transition: transform 500ms ease;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
  }
`;
