import { mq } from "./settings/breakpoints";
import { neutral } from "./settings/color";
import {} from "./settings/spaces";

import { css } from "@emotion/react";

export const globalStyles = css({
  "html, body": {
    color: neutral.Grey4,
  },

  h1: {
    fontSize: "2rem",
    fontWeight: 300,
    letterSpacing: "0.25rem",
    paddingTop: "4rem",
    textAlign: "center",

    [mq.desktop]: {
      fontSize: "3rem",
      lineHeight: 1.1,
      color: neutral.Grey6,
      paddingTop: "6rem",
    },
  },

  h2: {
    fontSize: "1rem",
    fontWeight: 600,
    letterSpacing: "0.125rem",
    paddingTop: "1.5rem",
    textAlign: "center",

    [mq.desktop]: {
      fontSize: "1.5rem",
      lineHeight: 1.05,
    },
  },

  h3: {
    [mq.desktop]: {
      fontSize: "1.1rem",
      lineHeight: 1.05,
    },
  },

  p: {
    lineHeight: 1.5,

    [mq.desktop]: {
      lineHeight: 2,
    },
  },

  a: { color: "#88AAF1" },

  li: {
    margin: "0.5rem 0",
  },

  "*": {},
});
