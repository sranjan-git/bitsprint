/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const SearchBar: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        margin-top: 64px;
        gap: 25px;
        white-space: nowrap;
        flex-wrap: wrap;
        font: 18px Inter, sans-serif;

        @media (max-width: 991px) {
          margin-top: 40px;
          white-space: initial;
        }
      `}
    >
      <div
        css={css`
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 0px 4px 50px rgba(111, 111, 111, 0.1);
          display: flex;
          gap: 12px;
          overflow: hidden;
          color: rgba(133, 133, 133, 1);
          font-weight: 300;
          line-height: 1;
          flex-wrap: wrap;
          flex-grow: 1;
          flex-basis: auto;
          padding: 16px 38px;

          @media (max-width: 991px) {
            white-space: initial;
            padding: 0 20px;
          }
        `}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/002ea247cc1d0e229412bc828465cad6790f53644c64cecb88b9559c1fbbfbe1?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          alt=""
          css={css`
            aspect-ratio: 1;
            object-fit: contain;
            object-position: center;
            width: 17px;
            align-self: start;
          `}
        />
        <input
          type="text"
          placeholder="Search"
          css={css`
            flex-basis: auto;
            flex-grow: 1;
            border: none;
            background: transparent;
            color: inherit;
            font: inherit;
            outline: none;

            @media (max-width: 991px) {
              max-width: 100%;
            }
          `}
        />
      </div>
      <div
        css={css`
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          gap: 16px;
          overflow: hidden;
          color: rgba(0, 0, 0, 1);
          font-weight: 400;
          line-height: 1;
          padding: 12px 19px;
          border: 1px solid rgba(234, 234, 234, 1);

          @media (max-width: 991px) {
            padding-left: 20px;
            white-space: initial;
          }
        `}
      >
        <div>Filter</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f5693a88beb9eb3506c307dfd9d2231502d5f3a03d6af0d4e2fa0ebb2ddc4d3?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          alt=""
          css={css`
            aspect-ratio: 1.88;
            object-fit: contain;
            object-position: center;
            width: 15px;
            margin: auto 0;
          `}
        />
      </div>
    </div>
  );
};

export default SearchBar;
