/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header css={headerStyles}>
      <img
        src="/assets/icons/13.svg"
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
