import Heading from "@components/common/Heading";
import Text from "@components/common/Text";
import { styled } from "@stitches/react";
import LinkIcon from "assets/Icons/LinkIcon";
import React from "react";

const NewsItemContainer = styled("li", {});

const NewsLink = styled("a", {
  display: "block",
  border: "1px solid rgba(255,255,255, .3)",
  borderRadius: "15px",
  padding: "32px",
  textAlign: "left",
  transition: "all .2s",
  textDecoration: "none",

  "> *:not(:last-child)": {
    marginBottom: "15px",
  },

  "&:hover": {
    border: "1px solid #fff",
  },

  "&:hover svg": {
    color: "#fff",
  },
});

const NewsItem = ({ data }) => {
  return (
    <NewsItemContainer>
      <NewsLink href="/root">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <Text weight="bold" size="xs" color="normal">
              {data.category}
            </Text>
            <Text size="xs" color="normal">
              {" "}
              May 12 2020
            </Text>
          </div>
          <LinkIcon />
        </div>
        <Heading weight="bold" color="mauveDark" level={6}>
          {data.title}
        </Heading>
        <Text size="sm" color="normal">
          {data.description}
        </Text>
      </NewsLink>
    </NewsItemContainer>
  );
};

export default NewsItem;
