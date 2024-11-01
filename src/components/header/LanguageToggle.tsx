import { css } from "@emotion/react";
import { MdOutlineLanguage } from "react-icons/md";

export const LanguageToggle = () => {
  const iconStyle = css`
    cursor: pointer;
    height: auto;
    padding: 6px;
    width: 36px;
  `;
  return <MdOutlineLanguage css={iconStyle} />;
};
