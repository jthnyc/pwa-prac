import React from "react";
import styled from "styled-components";
// import {useTranslation} from "react-i18next";

const Questionnaire = () => {
  //   const {t} = useTranslation();
  return (
    <QuestionnaireContainer id="questionnaire">
      {/* <h2>{t("questionnaire.t")}</h2> */}
    </QuestionnaireContainer>
  );
};

export default Questionnaire;

const QuestionnaireContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
