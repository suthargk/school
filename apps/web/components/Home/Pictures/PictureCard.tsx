import { styled } from "@stitches/react";
import React from "react";
// import * from '../../../assets/images/'

const PictureStyle = styled("div", {
  borderRadius: "10px",
  border: "1px solid #333",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 10px",
});

const PictureCard = ({ picture }) => {
  return (
    <PictureStyle>
      <img
        style={{ width: "100%", height: " 100%" }}
        src={picture.img_url}
        alt={picture.img_name}
      />
    </PictureStyle>
  );
};

export default PictureCard;
