import { mq } from "./settings/breakpoints";
import { neutral } from "./settings/color";
import {} from "./settings/spaces";

import { css } from "@emotion/react";

export const globalStyles = css({
  "html, body": {
    color: neutral.Grey4,
  },

  h1: {
    [mq.desktop]: {
      fontSize: "2.25rem",
      lineHeight: 1.1,
      color: neutral.Grey6,
    },
  },

  h2: {
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

  p: {},

  a: { color: "#88AAF1" },

  li: {
    margin: "0.5rem 0",
  },

  "*": {},
});
