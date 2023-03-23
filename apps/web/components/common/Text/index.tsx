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

    weight: {
      light: {
        fontWeight: 300,
      },
      medium: {
        fontWeight: 400,
      },
      semiBold: {
        fontWeight: 500,
      },

      bold: {
        fontWeight: 600,
      },
      extraBold: {
        fontWeight: 700,
      },
    },

    size: {
      xxs: {
        fontSize: "12px",
      },
      xs: {
        fontSize: "14px",
      },
      sm: {
        fontSize: "16px",
      },
      md: {
        fontSize: "18px",
      },
      lg: {
        fontSize: "22px",
      },
      xl: {
        fontSize: "26px",
      },
    },
  },
});

const Text = ({ as = "p", size, ...rest }) => {
  return <TextStyle as={as} size={size} {...rest}></TextStyle>;
};

export default Text;
