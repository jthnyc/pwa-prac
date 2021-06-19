import React from "react";
import styled from "styled-components";
import {device} from "../device";
import PhotoTile from "../components/PhotoTile";
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
    {
      id: 1,
      name: "picture 1",
      image: woods_gabe_jo_veil,
    },
    {
      id: 2,
      name: "picture 2",
      image: woods_gabe_jo,
    },
    {
      id: 3,
      name: "picture 3",
      image: woods_jo,
    },
    {
      id: 4,
      name: "picture 4",
      image: campus_gabe_jo_basement,
    },
    {
      id: 5,
      name: "picture 5",
      image: campus_gabe_jo_hallway,
    },
    {
      id: 6,
      name: "picture 6",
      image: campus_gabe_jo_stairs,
    },
    {
      id: 7,
      name: "picture 7",
      image: tea_gabe_jo,
    },
    {
      id: 8,
      name: "picture 8",
      image: tea_gabe_jo_scrolls,
    },
    {
      id: 9,
      name: "picture 9",
      image: tea_gabe_jo_sunglasses,
    },
    {
      id: 10,
      name: "picture 10",
      image: market_gabe,
    },
    {
      id: 11,
      name: "picture 11",
      image: market_gabe_jo,
    },
    {
      id: 12,
      name: "picture 12",
      image: market_jo,
    },
  ];

  return (
    <div id="album">
      <Tiles>
        {photos.map((photo, index) => {
          return <PhotoTile photo={photo} key={index} />;
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
