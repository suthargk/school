import { styled } from "@stitches/react";
import React from "react";

const ButtonStyled = styled("button", {
  border: "1px solid rgba(255,255,255, .3)",
  width: "min(375px, 100%)",
  borderRadius: "5px",
  padding: "8px 12px",

  variants: {
    color: {
      dim: {
        backgroundColor: "$mauveDark3",
      },
      light: {
        color: "$mauveDark6",
      },
      normal: {
        color: "$mauveDark9",
      },
      bright: {
        color: "$mauveDark12",
      },
    },
  },
});

const Button = ({ ...rest }) => {
  return <ButtonStyled {...rest} />;
};

export default Button;
