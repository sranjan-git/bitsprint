/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type StatisticsProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

const Statistics: React.FC<StatisticsProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
}) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 22px;
      `}
    >
      <img
        loading="lazy"
        src={imgSrc}
        alt={imgAlt}
        css={css`
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 55px;
          border-radius: 0;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin: auto 0;
        `}
      >
        <div
          css={css`
            font-size: 24px;
            font-weight: 700;
            line-height: 20px;
            align-self: start;
          `}
        >
          {title}
        </div>
        <div
          css={css`
            font-size: 16px;
            font-weight: 500;
            line-height: 1;
            margin-top: 7px;
          `}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
