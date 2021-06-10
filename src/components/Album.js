import React from "react";
import styled from "styled-components";
import {device} from "../device";
import {
  campus_gabe_jo_basement,
  campus_gabe_jo_hallway,
  campus_gabe_jo_stairs,
  market_gabe_jo,
  market_gabe,
  market_jo,
  tea_gabe_jo,
  tea_gabe_jo_scrolls,
  tea_gabe_jo_sunglasses,
  woods_gabe_jo_veil,
  woods_gabe_jo,
  woods_jo,
} from "../img/index";

const Album = () => {
  const photos = [
    woods_gabe_jo_veil,
    woods_gabe_jo,
    woods_jo,
    campus_gabe_jo_basement,
    campus_gabe_jo_hallway,
    campus_gabe_jo_stairs,
    tea_gabe_jo,
    tea_gabe_jo_scrolls,
    tea_gabe_jo_sunglasses,
    market_gabe,
    market_gabe_jo,
    market_jo,
  ];

  return (
    <div id="album">
      <Tiles>
        {photos.map((photo) => {
          return (
            <Tile>
              <img src={photo} alt={photos.indexOf(photo)} />
            </Tile>
          );
        })}
      </Tiles>
    </div>
  );
};

export default Album;

const Tiles = styled.div`
  padding: 3vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction; row;
  justify-content: center;
  position: relative;

  @media ${device.laptop} {
    padding: 6vh 16vw;
  }
`;

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
