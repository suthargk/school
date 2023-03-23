import { styled } from "@stitches/react";
import React from "react";

const BadgeStyled = styled("div", {
  backgroundColor: "#fff",
  color: "$mauveDark1",
  padding: "4px 10px",
  borderRadius: "15px",
  variants: {
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
        fontSize: "24px",
      },
      xl: {
        fontSize: "28px",
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
        fontWeight: 700,
      },
    },
  },
});

const Badge = ({ children, ...rest }) => {
  return (
    <div>
      <BadgeStyled as="span" {...rest}>
        {children}
      </BadgeStyled>
    </div>
  );
};

export default Badge;
