import React, {useState, useCallback, createRef} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import {photos} from "./PhotoFiles";
import styled from "styled-components";
import {device} from "../device";

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const domNodeRef = createRef();

  const openLightbox = useCallback((event, {photo, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    // ref={domNodeRef}
    <PhotoGalleryContainer ref={domNodeRef}>
      {/* direction={"column"}  */}
      <Gallery photos={photos} onClick={openLightbox} />
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
  // padding: 8rem 0;
  // margin-left: 8%;
  // margin-right: 8%;

  @media ${device.laptop} {
    padding: 5rem 0;
    margin-left: 5%;
    margin-right: 5%;
  }
`;
