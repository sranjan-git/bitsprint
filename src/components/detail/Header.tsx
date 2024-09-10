/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header css={headerStyles}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/211b2f67fc48eafa8d0e9ee78b6178645c329f76efd4b1ee361cea75dbddf6c3?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
        alt="Company Logo"
        css={logoStyles}
      />
    </header>
  );
};

const headerStyles = css`
  background-color: #ffffff;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 13px 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const logoStyles = css`
  aspect-ratio: 2.29;
  object-fit: contain;
  object-position: center;
  width: 87px;
`;

export default Header;
