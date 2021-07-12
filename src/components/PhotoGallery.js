import React, {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import {photos} from "./PhotoFiles";
import styled from "styled-components";
import {device} from "../device";

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {photo, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <PhotoGalleryContainer id="album">
      <Gallery photos={photos} onClick={openLightbox} columns={3} direction={"column"} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </PhotoGalleryContainer>
  );
};

export default PhotoGallery;

const PhotoGalleryContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  padding: 8rem 0;
  margin-left: 3%;
  margin-right: 3%;

  @media ${device.laptop} {
    padding: 5rem 0;
    margin-left: 5%;
    margin-right: 5%;
  }
`;
