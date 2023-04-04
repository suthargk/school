import { keyframes, styled } from "@stitches/react";
import React, { useState } from "react";
import PictureCard from "./PictureCard";
import { picturesData } from "./utils";

const moveLeft = keyframes({
  "0%": {
    transform: "translateX(0%)",
  },
  "100%": {
    transform: "translateX(-100%)",
  },
});

const Section = styled("section", {
  padding: "30px",
  marginTop: "20px",
});
const SectionContainer = styled("div", {});

const PictureContainer = styled("div", {
  display: "flex",
  overflow: "hidden",
});

const PictureCards = styled("div", {
  // display: "flex",
  width: "100%",
  display: "grid",
  gridGap: "30px",
  gridTemplateRows: "repeat(2, 200px)",
  gridTemplateColumns: "repeat(3, 300px)",
  // animation: `${moveLeft} 20s linear infinite`,
});

const Pictures = () => {
  const [pictures, setPictures] = useState(picturesData);
  return (
    <Section>
      <SectionContainer>
        <PictureContainer>
          <PictureCards>
            {pictures.map((picture) => {
              return <PictureCard picture={picture} />;
            })}
          </PictureCards>
          {/* <PictureCards>
            {pictures.map((picture) => {
              return <PictureCard picture={picture} />;
            })}
          </PictureCards> */}
        </PictureContainer>
      </SectionContainer>
    </Section>
  );
};

export default Pictures;
