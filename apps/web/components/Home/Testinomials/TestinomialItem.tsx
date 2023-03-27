import Text from "@components/common/Text";
import { styled } from "@stitches/react";
import React from "react";

const TestinomialStyle = styled("figure", {});
const TestinomialCaption = styled("figcaption", {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
  alignItems: "center",
});

const TestinomialQuotes = styled("blockquote", {});

const TestinomialItem = ({ testinomial }) => {
  return (
    <TestinomialStyle>
      <TestinomialCaption>
        <img src={testinomial.img} width={50} height={50} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Text
            style={{ marginBottom: "5px" }}
            weight="extraBold"
            size="sm"
            color="brightness"
          >
            {testinomial.name}
          </Text>
          <Text weight="medium" size="xs" color="normal">
            {testinomial.designation}
          </Text>
        </div>
      </TestinomialCaption>
      <TestinomialQuotes>
        <Text
          weight="light"
          size="sm"
          color="bright"
          style={{ lineHeight: "1.3" }}
        >
          {testinomial.words}
        </Text>
      </TestinomialQuotes>
    </TestinomialStyle>
  );
};

export default TestinomialItem;
