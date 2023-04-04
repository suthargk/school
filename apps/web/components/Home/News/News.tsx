import Badge from "@components/common/Badge";
import Button from "@components/common/Button";
import Heading from "@components/common/Heading";
import Text from "@components/common/Text";
import { styled } from "@stitches/react";
import React, { useState } from "react";
import { newsData } from "./data";
import NewsItem from "./NewsItem";

const Section = styled("section", {
  width: "100%",
  padding: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const SectionContainer = styled("div", {
  border: "1px solid rgba(255,255,255, .1)",
  borderRadius: "15px",
  textAlign: "center",
  width: "80%",
  padding: "62px",
});

const Header = styled("div", {
  textAlign: "center",
  marginBottom: "60px",

  "> *:not(:last-child)": {
    marginBottom: "24px",
  },
});

const Main = styled("main", {});

const NewsList = styled("ul", {
  listStyle: "none",
  margin: "0 15%",
  marginBottom: "60px",

  "> *:not(:last-child)": {
    marginBottom: "24px",
  },
});

const News = () => {
  const [news, setNews] = useState(newsData);
  return (
    <Section>
      <SectionContainer>
        <Header>
          <Badge size="xs" weight="semiBold">
            Announcements
          </Badge>
          <Heading level={4}>News and Notice</Heading>
          <Text size="lg" color="normal">
            You'll find all the latest updates and important announcements
            regarding our school.
          </Text>
        </Header>
        <Main>
          <NewsList>
            {news.map((data) => {
              return <NewsItem key={data.title} data={data} />;
            })}
          </NewsList>
          <Button style={{ backgroundColor: "#fff", color: "#000" }}>
            See More
          </Button>
        </Main>
      </SectionContainer>
    </Section>
  );
};

export default News;
