/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type HeaderProps = {
  imgSrc: string;
};

const Header: React.FC<HeaderProps> = ({ imgSrc }) => (
  <header
    css={css`
      background-color: rgba(0, 49, 69, 1);
      display: flex;
      width: 100%;
      padding: 13px 80px;

      @media (max-width: 991px) {
        padding: 0 20px;
      }
    `}
  >
    <img
      loading="lazy"
      src={imgSrc}
      alt=""
      css={css`
        aspect-ratio: 2.29;
        object-fit: contain;
        object-position: center;
        width: 87px;
      `}
    />
  </header>
);

export default Header;
