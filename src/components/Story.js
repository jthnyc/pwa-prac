import React from "react";
import styled from "styled-components";
// import g_bw from "../img/g_bw.JPG";
// import j_color from "../img/j_color.JPG";

const Story = () => {
  return (
    <StoryContainer>
      <h2>Our Story</h2>
      <StoryText>
        <p>
          {/* <StoryStart>I</StoryStart> */}
          It was a drizzly Tuesday night....
        </p>
        {/* <StoryImg1></StoryImg1> */}
        <p>
          Joanna and Gabe first crossed paths on a dark and stormy night (really!) at a
          fundraiser in midtown Manhattan. They bonded over a mutual love of music and the
          arts—though they disagreed strongly on whether Lang Lang is a great pianist.
        </p>
        <p>
          After a few evenings exchanging Spotify lists, watching films, and discovering a
          shared appreciation for Eataly, Broadway, and cocktail bars—they knew they had
          found something special in each other. In the years since, they’ve called the
          diverse community of Long Island City home, while continuing to explore the arts
          and culinary scene in New York.
        </p>
        <p>
          In 2019, Gabe proposed during a candlelight cruise in the Riviera Maya, Mexico.
          A year later, Joanna and Gabe were married in an intimate ceremony on October
          10, 2020—-as much fun as that was, they can’t wait to celebrate with all of
          their favorite people.
        </p>
        <p>
          They also still disagree on Lang Lang—-although they both agree Martha Argerich
          is better anyway.
        </p>
      </StoryText>
      {/* <StoryImg2></StoryImg2> */}
    </StoryContainer>
  );
};

export default Story;

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

const StoryText = styled.div`
  // border: 1px solid green;
  margin-top: 2em;
  line-height: 2em;
`;

// const StoryStart = styled.span`
//   font-size: 6rem;
// `;

// const StoryImg1 = styled.div`
//   border: 1px solid gray;
//   background: transparent url(${g_bw}) no-repeat center;
//   background-size: contain;
//   height: 400px;
//   width: auto;
// `;

// const StoryImg2 = styled.div`
//   border: 1px solid gray;
//   background: transparent url(${j_color}) no-repeat center;
//   background-size: contain;
//   height: 400px;
//   width: auto;
// `;
