import React from "react";
import styled from "styled-components";

const Questionnaire = () => {
  return (
    <QuestionnaireContainer>
      <h2>Questionnaire</h2>
    </QuestionnaireContainer>
  );
};

export default Questionnaire;

const QuestionnaireContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
