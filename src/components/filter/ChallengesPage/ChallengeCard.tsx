/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface ChallengeCardProps {
  challenge: {
    id: number;
    image: string;
    status: string;
    statusColor: string;
    title: string;
    timeLeft?: {
      days: string;
      hours: string;
      minutes: string;
    };
    endDate?: string;
    type: string;
  };
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  return (
    <article css={styles.challengeCard}>
      <img src={challenge.image} alt="Challenge" css={styles.challengeImage} />
      <span
        css={css`
          ${styles.challengeStatus};
          background-color: ${challenge.statusColor};
        `}
      >
        {challenge.status}
      </span>
      <h3 css={styles.challengeTitle}>{challenge.title}</h3>
      {challenge.type !== "past" && (
        <>
          <p css={styles.challengeTimeLabel}>
            {challenge.type === "upcoming" ? "Starts in:" : "Ends in:"}
          </p>
          <div css={styles.challengeTime}>
            <span>{challenge.timeLeft?.days}</span>
            <span>:</span>
            <span>{challenge.timeLeft?.hours}</span>
            <span>:</span>
            <span>{challenge.timeLeft?.minutes}</span>
          </div>
        </>
      )}
      {challenge.type === "past" && (
        <>
          <p css={styles.challengeEndDateLabel}>Ended on</p>
          <p css={styles.challengeEndDate}>{challenge.endDate}</p>
        </>
      )}
      <button css={styles.participateButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d2aca669ef33e1ab75f2c4d05e6c78778c46aaeb58d617f8ec69a1e34d3712?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          alt="Participate Now"
          css={styles.participateIcon}
        />
        <span>Participate Now</span>
      </button>
    </article>
  );
};

const styles = {
  challengeCard: css`
    background-color: #fff;
    border-radius: 15px;
    padding: 27px;
    box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.08);
    text-align: center;
  `,
  challengeImage: css`
    width: 100%;
    border-radius: 15px 15px 0 0;
    object-fit: cover;
  `,
  challengeStatus: css`
    display: inline-block;
    border-radius: 5px;
    padding: 5px 16px;
    font-size: 12px;
    font-weight: 600;
    margin-top: 25px;
    color: rgba(0, 0, 0, 1);
  `,
  challengeTitle: css`
    font-size: 16px;
    color: #000;
    margin-top: 21px;
    line-height: 26px;
  `,
  challengeTimeLabel: css`
    font-size: 14px;
    color: #444;
    font-weight: 500;
    margin-top: 29px;
    line-height: 1;
  `,
  challengeTime: css`
    display: flex;
    margin-top: 10px;
    gap: 12px;
    font-size: 18px;
    color: #454545;
    line-height: 2;
    justify-content: center;
  `,
  challengeEndDateLabel: css`
    font-size: 14px;
    color: #444;
    font-weight: 500;
    margin-top: 29px;
    line-height: 1;
  `,
  challengeEndDate: css`
    font-size: 18px;
    color: #454545;
    margin-top: 23px;
    line-height: 2;
  `,
  participateButton: css`
    background-color: #44924c;
    border-radius: 10px;
    margin-top: 33px;
    width: 183px;
    display: flex;
    gap: 14px;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    cursor: pointer;
  `,
  participateIcon: css`
    width: 18px;
    object-fit: contain;
  `,
};

export default ChallengeCard;
