import React from "react";
import useFirestore from "../hooks/useFirestore";
import styled from "styled-components";

const ImageGrid = ({setSelectedImg}) => {
  const {docs} = useFirestore("images");

  return (
    <ImageGridStyles>
      {docs &&
        docs.map((doc) => (
          <ImageWrap key={doc.id} onClick={() => setSelectedImg(doc.url)}>
            <Img src={doc.url} alt="uploaded pic" />
          </ImageWrap>
        ))}
    </ImageGridStyles>
  );
};

export default ImageGrid;

const ImageGridStyles = styled.div`
  margin: 20px 300px;
  display: grid;
  grid-template-row: 1fr 1fr 1fr;
  grid-gap: 40px;
  border: 1px solid red;
`;

const ImageWrap = styled.div`
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  position: relative;
  // opacity: 0.8;
`;

const Img = styled.img`
  min-width: 100%;
  min-height: 100%;
  max-width: 150%;
  position: absolute;
  top: 0;
  left: 0;
`;
