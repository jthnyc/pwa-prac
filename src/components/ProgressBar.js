import React, {useEffect} from "react";
import useStorage from "../hooks/useStorage";
import styled from "styled-components";
import {motion} from "framer-motion";

const ProgressBar = ({file, setFile}) => {
  const {url, progress} = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <ProgressBarStyles
      initial={{width: 0}}
      animate={{width: progress + "%"}}
    ></ProgressBarStyles>
  );
};

export default ProgressBar;

const ProgressBarStyles = styled(motion.div)`
  height: 5px;
  background: orange;
  margin-top: 20px;
`;
