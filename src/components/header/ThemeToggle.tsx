import { css } from "@emotion/react";
import { MdOutlineDarkMode } from "react-icons/md";

export const ThemeToggle = () => {
  const iconStyle = css`
    cursor: pointer;
    height: auto;
    padding: 6px;
    width: 36px;
  `;
  return (
    <>
      <MdOutlineDarkMode css={iconStyle} />
    </>
  );
};
