/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <section css={bannerStyles}>
      <div css={contentWrapperStyles}>
        <div css={startDateStyles}>
          <img
          src="/assets/icons/14.svg"
            alt="Calendar icon"
            css={calendarIconStyles}
          />
          <span>Starts on 17th Jun'22 09:00 PM (India Standard Time)</span>
        </div>
        <h1 css={titleStyles}>Data Sprint 72 - Butterfly Identification</h1>
        <p css={subtitleStyles}>
          Identify the class to which each butterfly belongs to
        </p>
        <div css={difficultyBadgeStyles}>
          <img
          src="/assets/icons/4.svg"
          alt="Difficulty icon"
            css={difficultyIconStyles}
          />
          <span>Easy</span>
        </div>
      </div>
    </section>
  );
};

const bannerStyles = css`
  background-color: #003145;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 96px 80px;
  font: 600 14px/1 Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const contentWrapperStyles = css`
  display: flex;
  width: 818px;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const startDateStyles = css`
  border-radius: 5px;
  background-color: #ffce5c;
  display: flex;
  gap: 14px;
  color: #000000;
  padding: 10px 22px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const calendarIconStyles = css`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 14px;
  align-self: flex-start;
`;

const titleStyles = css`
  color: #ffffff;
  align-self: stretch;
  margin-top: 24px;
  font: 40px/1.2 Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const subtitleStyles = css`
  color: #f8f9fd;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  margin-top: 33px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const difficultyBadgeStyles = css`
  border-radius: 5px;
  background-color: #f8f9fd;
  display: flex;
  margin-top: 37px;
  gap: 7px;
  color: #003145;
  white-space: nowrap;
  padding: 8px 20px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const difficultyIconStyles = css`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
`;

export default Banner;
