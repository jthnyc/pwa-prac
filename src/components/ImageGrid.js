import React from "react";
import useFirestore from "../hooks/useFirestore";
import styled from "styled-components";
import {device} from "../device";

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
  margin: 20px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  @media ${device.laptop} {
    margin: 20px 200px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ImageWrap = styled.div`
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  position: relative;
  opacity: 1;

  @media ${device.tablet} {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  min-width: 100%;
  min-height: 100%;
  max-width: 150%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
  }
`;
