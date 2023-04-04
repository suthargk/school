import Text from "@components/common/Text";
import { keyframes, styled } from "@stitches/react";
import React, { useState } from "react";
import TestinomialItem from "./TestinomialItem";
import testinomialsData from "./utils";

const moveUp = keyframes({
  "0%": {
    transform: "translateY(0%)",
  },
  "100%": {
    transform: "translateY(-100%)",
  },
});

const Section = styled("section", {
  padding: "30px",
});
const SectionContainer = styled("div", {
  width: "80%",
  margin: "0 auto",
});
const Header = styled("div", {
  padding: "30px",
  textAlign: "center",
  marginBottom: "40px",
});
const Main = styled("div", {});

const Cards = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "flex-start",
  WebkitBoxPack: "center",
  animation: `${moveUp} 25s linear infinite`,
  padding: "20px",
});

const Card = styled("li", {
  width: "25%",
  padding: "20px",
  backgroundColor: "$mauveDark1",
  boxShadow: "inset 0 1px 0 0 hsla(0,0%,100%,.05)",
  borderRadius: "15px",
});

const TestinomialsContainer = styled("div", {
  height: "600px",
  overflow: "hidden",
  position: "relative",

  "&::before": {
    display: "block",
    content: "",
    width: "100%",
    paddingTop: "2rem",
    paddingBottom: "8rem",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0), rgba(0,0,0, 0))`,
    zIndex: 1,
  },

  "&::after": {
    display: "block",
    content: "",
    width: "100%",
    paddingTop: "12rem",
    paddingBottom: "2rem",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0, 0))`,
  },
});

const Testinomials = () => {
  const [testinomialData, setTestinomialData] = useState(testinomialsData);
  return (
    <Section>
      <SectionContainer>
        <Header>
          <Text
            weight="bold"
            size="xxs"
            color="normal"
            style={{ textTransform: "uppercase", letterSpacing: "3.2px" }}
          >
            Let's hear from our school community
          </Text>
        </Header>
        <Main>
          <TestinomialsContainer>
            <Cards>
              {testinomialData.map((testinomial) => {
                return (
                  <Card key={testinomial.img}>
                    <TestinomialItem
                      testinomial={testinomial}
                    ></TestinomialItem>
                  </Card>
                );
              })}
            </Cards>
            <Cards>
              {testinomialData.map((testinomial) => {
                return (
                  <Card key={testinomial.img}>
                    <TestinomialItem
                      testinomial={testinomial}
                    ></TestinomialItem>
                  </Card>
                );
              })}
            </Cards>
          </TestinomialsContainer>
        </Main>
      </SectionContainer>
    </Section>
  );
};

export default Testinomials;
