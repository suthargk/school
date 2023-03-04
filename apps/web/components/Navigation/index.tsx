import { styled } from "@styles/stiches.config";
import React from "react";

const NavigationContainer = styled("div", {
  background: "white",
  color: "IndianRed",
  fontSize: "50px",
  "&:hover": {
    background: "pink",
  },
});

const Navigation = () => {
  return <NavigationContainer>Navigation</NavigationContainer>;
};

export default Navigation;
