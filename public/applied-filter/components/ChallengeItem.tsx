/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type ChallengeItemProps = {
  imgSrc: string;
  imgAlt: string;
  headerText: string;
  bodyText: string;
};

const ChallengeItem: React.FC<ChallengeItemProps> = ({
  imgSrc,
  imgAlt,
  headerText,
  bodyText,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 50%;
        margin-left: 20px;

        @media (max-width: 991px) {
          width: 100%;
          margin-left: 0;
        }
      `}
    >
      <div
        css={css`
          border-radius: 20px;
          background-color: rgba(248, 249, 253, 1);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: start;
          font-family: Poppins, sans-serif;
          width: 100%;
          padding: 52px 26px;

          @media (max-width: 991px) {
            max-width: 100%;
            margin-top: 37px;
            padding: 0 20px;
          }
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
          `}
        />
        <div
          css={css`
            color: rgba(0, 0, 0, 1);
            font-size: 24px;
            font-weight: 600;
            line-height: 2;
            letter-spacing: -0.72px;
            margin-top: 12px;
          `}
        >
          {headerText}
        </div>
        <div
          css={css`
            color: rgba(100, 96, 125, 1);
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: -0.32px;
            align-self: stretch;
            margin-top: 32px;

            @media (max-width: 991px) {
              max-width: 100%;
            }
          `}
        >
          {bodyText}
        </div>
      </div>
    </div>
  );
};

export default ChallengeItem;
