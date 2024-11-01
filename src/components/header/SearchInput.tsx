import { css } from "@emotion/react";
import { FC } from "react";
import { MdSearch } from "react-icons/md";

export const SearchInput: FC = () => {
  const iconStyle = css`
    cursor: pointer;
    height: auto;
    padding: 6px;
    width: 36px;
  `;
  return (
    <>
      <MdSearch css={iconStyle} />
    </>
  );
};
