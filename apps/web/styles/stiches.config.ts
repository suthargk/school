import { createStitches, globalCss } from "@stitches/react";
import {
  pink,
  pinkDark,
  grayDark,
  gray,
  indigo,
  indigoDark,
  purple,
  purpleDark,
  violet,
  violetDark,
  mauve,
  mauveDark,
  blackA,
  cyan,
  cyanDark,
  slate,
  slateDark,
} from "@radix-ui/colors";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  "*::selection": {
    background: "#f04f88",
    color: "#fff",
  },
  "input, button": {
    all: "unset",
  },
  button: {
    cursor: "pointer",
  },
  body: {
    color: "white",
    margin: 0,
    position: "relative",
    backgroundColor: "#000",
    // fontSize: "62.5%"
  },

  "*:focus": {
    outline: "4px solid $pink9",
    outlineOffset: "5px",
  },
});

const SPACING = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
} as const;

type color =
  | "pink"
  | "gray"
  | "blackA"
  | "slate"
  | "cyan"
  | "mauve"
  | "violet"
  | "indigo"
  | "purple";

const themeColors = {
  ...pinkDark,
  ...grayDark,
  ...pink,
  ...gray,
  ...purple,
  ...indigo,
  ...violet,
  ...mauve,
  ...mauveDark,
  ...blackA,
  ...cyan,
  ...slate,
};

type colorObj = Partial<typeof themeColors>;

type colorKey = keyof colorObj;

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer R}`
  ? `${F}${To}${R}`
  : S;

type endType = {
  [T in colorKey as Replace<
    T,
    color,
    "darkPink" | "grayDark" | "mauveDark"
  >]?: string;
};

const rename = (from: color, to: `${color}Dark`, obj: colorObj): endType => {
  const newObj = {};

  for (const key in obj) {
    const [, num] = key.split(from);
    newObj[`${to}${num}`] = obj[key];
  }
  return newObj;
};

export const { createTheme, getCssText, styled, theme } = createStitches({
  media: {
    post: `(min-width: 50rem)`,
    md: `(min-width: 768px)`,
    lg: `(min-width: 62em)`,
    xl: `(min-width: 80em)`,
  },
  theme: {
    colors: {
      ...themeColors,
      ...rename("slate", "slateDark", slateDark),
      ...rename("cyan", "cyanDark", cyanDark),
      ...rename("mauve", "mauveDark", mauveDark),
      ...rename("violet", "violetDark", violetDark),
      ...rename("purple", "purpleDark", purpleDark),
      ...rename("indigo", "indigoDark", indigoDark),
      ...rename("pink", "pinkDark", pinkDark),
      ...rename("gray", "grayDark", grayDark),
    },
    fontSizes: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
    },
    space: SPACING,
    sizes: SPACING,
  },
});
