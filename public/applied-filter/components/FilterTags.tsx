/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

type FilterTagProps = {
  text: string;
  active?: boolean;
};

const FilterTag: React.FC<FilterTagProps> = ({ text, active = false }) => (
  <div
    css={css`
      border-radius: 30px;
      background-color: rgba(248, 249, 253, ${active ? "1" : "0.49"});
      display: flex;
      gap: 9px;
      padding: 12px 22px;
      color: ${active ? "rgba(0, 0, 0, 1)" : "rgba(238, 238, 238, 1)"};

      @media (max-width: 991px) {
        white-space: initial;
        padding: 0 20px;
      }
    `}
  >
    <div
      css={css`
        flex-grow: 1;
      `}
    >
      {text}
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5243b37eac8c6649b4f1781ebab8f5955db9d91efa78eae8fa7a6e02402b417?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
      alt=""
      css={css`
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 17px;
      `}
    />
  </div>
);

const FilterTags: React.FC = () => {
  return (
    <div
      css={css`
        align-self: start;
        display: flex;
        margin-top: 41px;
        gap: 30px;
        font-size: 14px;
        color: rgba(255, 255, 255, 1);
        font-weight: 500;
        white-space: nowrap;
        text-align: center;
        line-height: 1;

        @media (max-width: 991px) {
          margin-top: 40px;
          white-space: initial;
        }
      `}
    >
      <FilterTag text="Upcoming" active />
      <FilterTag text="Past" />
      <FilterTag text="Easy" />
    </div>
  );
};

export default FilterTags;
