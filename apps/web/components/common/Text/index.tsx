import { styled } from "@styles/stiches.config";
import React from "react";

const TextStyle = styled("span", {
  variants: {
    color: {
      dim: {
        color: "$mauveDark3",
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

    size: {
      xs: {
        fontSize: "12px",
      },
      sm: {
        fontSize: "14px",
      },
      md: {
        fontSize: "18px",
      },
      lg: {
        fontSize: "24px",
      },
      xl: {
        fontSize: "30px",
      },
    },
  },
});

const Text = ({ as = "p", size, ...rest }) => {
  return <TextStyle as={as} size={size} {...rest}></TextStyle>;
};

export default Text;
