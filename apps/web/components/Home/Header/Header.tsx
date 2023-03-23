import Heading from "@components/common/Heading";
import Text from "@components/common/Text";
import { styled } from "@stitches/react";
import React from "react";

const HeaderContainer = styled("div", {
  height: "68vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const HeaderMain = styled("div", {
  width: "80%",
  textAlign: "center",

  "h1::selection": {
    backgroundColor: "transparent",
  },
});

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderMain>
        <Heading
          style={{
            backgroundImage:
              "linear-gradient(30deg, #FF4060 40%, #FD4391 80%, #FF7E44 100%);",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          level={1}
          color="mauveDark"
        >
          A Place to Grow and Thrive
        </Heading>
        <Text size="lg" color="normal">
          We believe that every student can achieve greatness with the right
          support, guidance, and resources.
        </Text>
      </HeaderMain>
    </HeaderContainer>
  );
};

export default Header;
