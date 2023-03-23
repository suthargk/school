import { keyframes, styled } from "@stitches/react";
import React, { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { navigationCategory } from "Helper/navigation.helpers";

// Animations

const enterFromRight = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(200px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const enterFromLeft = keyframes({
  "0%": { opacity: 0, transform: "translateX(-200px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const exitToRight = keyframes({
  "0%": { opacity: 1, transform: "translateX(0)" },
  "100%": { opacity: 0, transform: "translateX(200px)" },
});

const exitToLeft = keyframes({
  "0%": { opacity: 1, transform: "translateX(0)" },
  "100%": { opacity: 0, transform: "translateX(-200px)" },
});

const scaleIn = keyframes({
  "0%": { opacity: 0, transform: "rotateX(-30deg) scale(0.9)" },
  "100%": { opacity: 1, transform: "rotateX(0deg) scale(1)" },
});

const scaleOut = keyframes({
  "0%": { opacity: 1, transform: "rotateX(0deg) scale(1)" },
  "100%": { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
});

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  zIndex: 1,
});

const NavigationMenuList = styled(NavigationMenu.List, {
  display: "flex",
  justifyContent: "center",
  padding: "4px",
  borderRadius: "6px",
  listStyle: "none",
  boxShadow: "0 2px 10px $blackA7",
  margin: "0",
  backgroundColor: "rgba(0,0,0,.5)",
  backdropFilter: "saturate(180%) blur(5px)",
  border: "1.2px solid $gray12",
});

const CaretDown = styled(CaretDownIcon, {
  position: "relative",
  top: "1px",
  transition: "transform 250ms ease",
  color: "$gray8",
});

const commonStyle = {
  padding: "8px 12px",
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: "4px",
  fontSize: "15px",
  color: "$gray8",

  "&:focus": {
    boxShadow: "0 0 0 2px $violet7",
  },

  "&:hover": {
    backgroundColor: "$grayDark2",
  },
};

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  ...commonStyle,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2px",

  "&[data-state='open'] > .CaretDown": {
    transform: "rotate(-180deg)",
  },
});

const NavigationMenuContent = styled(NavigationMenu.Content, {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  animationDuration: "250ms",
  animationTimingFunction: "ease",

  "&[data-motion='from-start']": { animationName: `${enterFromLeft}` },
  "&[data-motion='from-end']": { animationName: `${enterFromRight}` },
  "&[data-motion='to-start']": { animationName: `${exitToLeft}` },
  "&[data-motion='to-end']": { animationName: `${exitToRight}` },
});

const NavigationMenuLink = styled(NavigationMenu.Link, {
  ...commonStyle,
  display: "block",
  textDecoration: "none",
  fontSize: "15px",
  lineHeight: 1,
});

const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: "10px",
  top: "100%",
  overflow: "hidden",
  zIndex: 1,
  transition: "width, transform 250ms ease",

  "&[data-state='visible']": { animation: `${fadeIn} 200ms ease` },
  "&[data-state='hidden']": { animation: `${fadeOut} 200ms ease` },
});

const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: "relative",
  transformOrigin: "top center",
  marginTop: "10px",
  minWidth: "530px",
  backdropFilter: "blur(20px)",
  backgroundColor: "$blackA12",
  border: "1.2px solid $gray12",
  borderRadius: "6px",
  overflow: "hidden",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  height: "var(--radix-navigation-menu-viewport-height)",
  transition: "width, height, 300ms ease",

  "&[data-state='open']": { animation: `${scaleIn} 200ms ease` },
  "&[data-state='closed']": { animation: `${scaleOut} 200ms ease` },
});

const List = styled("ul", {
  display: "flex",
  padding: "22px",
  margin: "0",
  columnGap: "10px",
  listStyle: "none",
});

const ViewportPosition = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  top: "100%",
  left: "0",
  perspective: "2000px",
});

const Arrow = styled("div", {
  position: "relative",
  top: "70%",
  backgroundColor: "$blackA12",
  border: "1.2px solid $gray12",
  width: "10px",
  height: "10px",
  transform: "rotate(45deg)",
  borderTopLeftRadius: "2px",
});

const ListItemLink = styled("a", {
  display: "block",
  outline: "none",
  textDecoration: "none",
  userSelect: "none",
  padding: "12px",
  borderRadius: "6px",
  fontSize: "15px",
  lineHeight: 1,

  "&:focus": { boxShadow: "0 0 0 2px white" },
  "&:hover": { backgroundColor: "$grayDark2" },
});

const ListItemHeading = styled("div", {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: "5px",
  color: "$mauveDark12",
});

const ListItemText = styled("p", {
  color: "$mauveDark9",
  lineHeight: 1.4,
  fontWeight: "initial",
});

const Callout = styled("a", {
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  background: "hsla(0,0%,100%,.07)",
  borderRadius: "6px",
  padding: "20px",
  textDecoration: "none",
  outline: "none",
  userSelect: "none",

  "&:hover": {
    backgroundColor: "hsla(0,0%,100%,.09)",
  },

  focus: { boxShadow: "0 0 0 2px $violet7" },
});

const CalloutHeading = styled("div", {
  color: "white",
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: 1.2,
  marginTop: "16px",
  marginBottom: "7px",
});

const CalloutText = styled("p", {
  color: "$mauveDark12",
  fontSize: "14px",
  lineHeight: 1.3,
});

const ListItem = React.forwardRef(
  ({ subCategory, children, ...props }, forwardedRef) => (
    <li>
      <NavigationMenuLink asChild>
        <ListItemLink {...props} ref={forwardedRef}>
          <ListItemHeading>{subCategory.name}</ListItemHeading>
          <ListItemText>{subCategory.description}</ListItemText>
        </ListItemLink>
      </NavigationMenuLink>
    </li>
  )
);

const Navigation = () => {
  const [navigationCategoryList, setNavigationCategoryList] =
    useState(navigationCategory);

  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        {navigationCategoryList.map((category) => {
          return category.subCategories.length ? (
            <NavigationMenu.Item key={category.name}>
              <NavigationMenuTrigger>
                {category.name}
                <CaretDown aria-hidden className="CaretDown" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <List>
                  {category.subCategories.length ? (
                    <li style={{ width: "40%" }}>
                      <NavigationMenuLink asChild>
                        <Callout href={category.subCategories[0].path}>
                          {category.icon}
                          <CalloutHeading>
                            {category.subCategories[0].name}
                          </CalloutHeading>
                          <CalloutText>
                            {category.subCategories[0].description}
                          </CalloutText>
                        </Callout>
                      </NavigationMenuLink>
                    </li>
                  ) : null}

                  <div style={{ width: "60%" }}>
                    {category.subCategories.map((subCategory, index) => {
                      if (index === 0) return;

                      return (
                        <ListItem
                          key={subCategory.name}
                          href={subCategory.path}
                          subCategory={subCategory}
                        ></ListItem>
                      );
                    })}
                  </div>
                </List>
              </NavigationMenuContent>
            </NavigationMenu.Item>
          ) : (
            <NavigationMenu.Item key={category.name}>
              <NavigationMenuLink href={category.path}>
                {category.name}
              </NavigationMenuLink>
            </NavigationMenu.Item>
          );
        })}

        <NavigationMenuIndicator>
          <Arrow />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  );
};

export default Navigation;
