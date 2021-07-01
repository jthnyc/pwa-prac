import React, {useState} from "react";
// import ImageGrid from "./ImageGrid";
import useFirestore from "../hooks/useFirestore";
import Modal from "./Modal";
import styled from "styled-components";
import {GridList, GridListTile} from "@material-ui/core";

const AlbumUI = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const {photos} = useFirestore("images");
  return (
    <AlbumContainer id="album">
      <GridListStyle cellHeight={160} cols={3}>
        {photos &&
          photos.map((photo) => (
            <GridListTile key={photo.id} cols={1}>
              <img src={photo.url} alt={photo.id} />
            </GridListTile>
          ))}
      </GridListStyle>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </AlbumContainer>
  );
};

export default AlbumUI;

const AlbumContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 3.125rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`;

const GridListStyle = styled(GridList)`
  width: 500;
  height: 450;
  border: 1px solid red;
`;
