import React from "react";
import styled from "styled-components";

const Story = () => {
  return (
    <StoryContainer>
      <h2>Our Story</h2>
      <p>It was a drizzly Tuesday night....</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi. Justo
        eget magna fermentum iaculis eu non diam. Euismod in pellentesque massa placerat
        duis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Vestibulum
        morbi blandit cursus risus. Sed egestas egestas fringilla phasellus faucibus.
        Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Nunc sed velit
        dignissim sodales ut eu sem integer. Consequat mauris nunc congue nisi vitae
        suscipit tellus mauris a. Cras sed felis eget velit aliquet. Eget lorem dolor sed
        viverra ipsum nunc aliquet bibendum enim.
      </p>
      <p>
        Malesuada fames ac turpis egestas sed tempus urna. Orci ac auctor augue mauris
        augue neque. Enim ut tellus elementum sagittis vitae et leo. Amet nisl purus in
        mollis. Habitant morbi tristique senectus et netus et malesuada fames ac. Ultrices
        tincidunt arcu non sodales neque sodales. Ullamcorper eget nulla facilisi etiam
        dignissim. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu.
        Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Est ante in
        nibh mauris cursus. Tincidunt praesent semper feugiat nibh sed pulvinar proin.
        Habitant morbi tristique senectus et netus et malesuada. Eu non diam phasellus
        vestibulum lorem sed risus ultricies. Non arcu risus quis varius quam quisque id.
        Eu mi bibendum neque egestas congue quisque egestas diam in. Metus vulputate eu
        scelerisque felis imperdiet proin fermentum leo.
      </p>
    </StoryContainer>
  );
};

export default Story;

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
