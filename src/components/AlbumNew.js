import React, {useState} from "react";
// import ProgressBar from "./ProgressBar";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import styled from "styled-components";

const Album = () => {
  // const [file, setFile] = useState(null);
  // const [error, setError] = useState(null);
  // const types = ["image/png", "image/jpeg"];
  const [selectedImg, setSelectedImg] = useState(null);

  // keeping changeHandler below commented out - using it to upload photos to firebase
  // const changeHandler = (e) => {
  //   let selected = e.target.files[0];
  //   if (selected && types.includes(selected.type)) {
  //     setFile(selected);
  //     setError("");
  //   } else {
  //     setFile(null);
  //     setError("Please select an image file (png or jpeg)");
  //   }
  // };

  return (
    <AlbumContainer id="album">
      {/* keeping form section below commented out - using it to upload photos to firebase */}
      {/* <form>
        <input type="file" onChange={changeHandler} />
        <div>
          {error && <div>{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form> */}
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </AlbumContainer>
  );
};

export default Album;

const AlbumContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 3.125rem 0;
`;
