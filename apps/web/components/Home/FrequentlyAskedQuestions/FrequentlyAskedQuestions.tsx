import Heading from "@components/common/Heading";
import Text from "@components/common/Text";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { keyframes, styled } from "@stitches/react";
import React, { useState } from "react";
import { frequentlyAskedQuestionsData } from "./utils";

const slideDown = keyframes({
  "0%": {
    height: 0,
  },
  "100%": {
    height: "100px",
  },
});

const slideUp = keyframes({
  "0%": {
    height: "100px",
  },
  "100%": {
    height: 0,
  },
});

const Section = styled("section", {
  padding: "30px",
  marginTop: "20px",
});
const SectionContainer = styled("div", {
  width: "50%",
  margin: "0 auto",
});
const Header = styled("div", {
  padding: "30px",
  textAlign: "center",
  marginBottom: "40px",

  "> *:not(:last-child)": {
    marginBottom: "24px",
  },
});
const Main = styled("div", {
  width: "80%",
  margin: "0 auto",
});

const AccordionRoot = styled(Accordion.Root, {
  boxShadow: "0 2px 10px $blackA4",
});

const AccordionItem = styled(Accordion.Item, {
  overflow: "hidden",
  marginTop: "10px",
  borderRadius: "10px",
  padding: "5px 15px",

  "&[data-state='open']": {
    backgroundColor: "$mauve2",
  },

  "&:focus": {
    outline: "1px solid blue",
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: "0 0 0 2px $mauve12",
  },
});

const AccordionTrigger = styled(Accordion.Trigger, {
  fontFamily: "inherit",
  backgroundColor: "transparent",
  padding: "10px",
  height: "45px",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "24px",
  color: "#fff",
  lineHeight: 1,
  boxShadow: "0 1px 0 $mauve6",
  borderRadius: "10px",

  "&:focus": {
    outline: "none",
  },

  "&[data-state='open'] > .AccordionChevron": {
    transform: "rotate(180deg)",
  },
});

const AccordionContent = styled(Accordion.Content, {
  overflow: "hidden",
  fontSize: "15px",
  color: "$mauve11",
  height: "100px",

  "&[data-state='open']": {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  "&[data-state='closed']": {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const AccordionChevron = styled(ChevronDownIcon, {
  color: "$mauveDark12",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
});

const Trigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header style={{ display: "flex" }}>
      <AccordionTrigger {...props} ref={forwardedRef}>
        {children}
        <AccordionChevron
          width={24}
          height={24}
          className="AccordionChevron"
          aria-hidden
        />
      </AccordionTrigger>
    </Accordion.Header>
  )
);

const Content = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <AccordionContent {...props} ref={forwardedRef}>
      <div style={{ padding: "10px" }}>
        <Text size="sm">{children}</Text>
      </div>
    </AccordionContent>
  )
);

const FrequentlyAskedQuestions = () => {
  const [frequentlyAskedQuestions, setFrequentlyAskedQuestions] = useState(
    frequentlyAskedQuestionsData
  );

  return (
    <Section>
      <SectionContainer>
        <Header>
          <Heading level={4}>Frequently Asked Questions </Heading>
          <Text
            // style={{ width: "50%", margin: "0 auto" }}
            size="lg"
            color="normal"
          >
            Here, we have compiled a list of commonly asked questions by
            students, parents, and visitors to our school.
          </Text>
        </Header>
        <Main>
          <AccordionRoot type="single" defaultValue="item-1" collapsible>
            {frequentlyAskedQuestions.map((question) => {
              return (
                <AccordionItem
                  key={question.question}
                  className="AccordionItem"
                  value={`item-${question.id}`}
                >
                  <Trigger>
                    <Text size="md" weight="semiBold">
                      {question.question}
                    </Text>
                  </Trigger>
                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }}
                  ></div>
                  <Content>{question.answer}</Content>
                </AccordionItem>
              );
            })}
          </AccordionRoot>
        </Main>
      </SectionContainer>
    </Section>
  );
};

export default FrequentlyAskedQuestions;
