import type { ComponentProps } from "@/types";

import { Glyph } from "./Glyph";
import { NavMenu } from "./NavMenu";

import { css } from "@emotion/react";
import { FC } from "react";

const Header: FC<ComponentProps> = ({ children }) => {
  const header = css`
    align-items: center;
    background-color: rgb(255 255 255 / 60%);
    border-bottom: 1px solid rgb(212 212 212);
    display: flex;
    height: 4rem;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 50;
  `;

  return (
    <header css={header}>
      <Glyph />
      <NavMenu />
    </header>
  );
};

export default Header;
