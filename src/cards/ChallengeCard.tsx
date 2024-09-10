/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface ChallengeCardProps {
  imageSrc: string;
  status: "Upcoming" | "Active" | "Past";
  title: string;
  timeInfo: {
    type: "Starts in" | "Ends in" | "Ended on";
    value: string;
  };
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  imageSrc,
  status,
  title,
  timeInfo,
}) => {
  const statusColors = {
    Upcoming: "rgba(242, 201, 76, 0.25)",
    Active: "rgba(68, 146, 76, 0.24)",
    Past: "rgba(255, 60, 0, 0.17)",
  };

  return (
    <article css={styles.card}>
      <img src={imageSrc} alt={`${title} challenge`} css={styles.image} />
      <span css={[styles.status, { backgroundColor: statusColors[status] }]}>
        {status}
      </span>
      <h3 css={styles.title}>{title}</h3>
      <p css={styles.timeInfoType}>{timeInfo.type}</p>
      <p css={styles.timeInfoValue}>{timeInfo.value}</p>
      <button css={styles.participateButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6d51c596a087240afe5dd7c5d7d57c0ffa0e5b84d7141d9026b80ea06f47984?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          alt=""
          css={styles.buttonIcon}
        />
        Participate Now
      </button>
    </article>
  );
};

const styles = {
  card: css`
    border-radius: 15px;
    box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.08);
    background-color: #fff;
    display: flex;
    width: 100%;
    padding-bottom: 27px;
    flex-direction: column;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    margin: 0 auto;
    @media (max-width: 991px) {
      margin-top: 40px;
    }
  `,
  image: css`
    aspect-ratio: 2.02;
    object-fit: contain;
    object-position: center;
    width: 100%;
    border-radius: 15px 15px 0 0;
    align-self: stretch;
  `,
  status: css`
    border-radius: 5px;
    margin-top: 26px;
    width: 87px;
    color: rgba(102, 102, 102, 1);
    white-space: nowrap;
    text-align: center;
    padding: 5px 15px;
    font: 12px/1 Inter, sans-serif;
    @media (max-width: 991px) {
      white-space: initial;
    }
  `,
  title: css`
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    margin-top: 21px;
    width: 246px;
  `,
  timeInfoType: css`
    color: rgba(68, 68, 68, 1);
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    margin-top: 29px;
  `,
  timeInfoValue: css`
    color: rgba(69, 69, 69, 1);
    font-size: 18px;
    line-height: 2;
    margin-top: 10px;
  `,
  participateButton: css`
    border-radius: 10px;
    background-color: rgba(68, 146, 76, 1);
    display: flex;
    margin-top: 33px;
    width: 182px;
    max-width: 100%;
    gap: 14px;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    line-height: 1;
    padding: 12px 16px;
    border: none;
    cursor: pointer;
  `,
  buttonIcon: css`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 18px;
  `,
};

export default ChallengeCard;
