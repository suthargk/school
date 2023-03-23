import { styled } from "@stitches/react";
import { theme } from "@styles/stiches.config";
import React from "react";

const HeadingStyled = styled("h1", {
  variants: {
    color: {
      mauveDark: {
        color: theme.colors.mauveDark12
        }
    },

    level: {
      1: {
        fontSize: "100px",
      },

      2: {
        fontSize: "80px",
      },

      3: {
        fontSize: "60px"
      },

      4: {
        fontSize: "40px"
      },

      5: {
        fontSize: "24px"
      },

      6: {
        fontSize: "18px"
      }
    },
  },
});

const Heading = ({ level, ...rest }) => {
  return <HeadingStyled as={`h${level}`} level={level} {...rest}></HeadingStyled>;
};

export default Heading;
