/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const StatisticsBar: React.FC = () => {
  return (
    <section css={styles.statisticsBar}>
      <div css={styles.statisticsContainer}>
        <StatisticItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/94e89ef5b1f71fb86dbb6ebf1034fddbdfe08d4644650e55b3789a9787c15ae6?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          number="100K+"
          description="AI model submissions"
        />
        <div css={styles.divider}></div>
        <StatisticItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2ef1ff39a1c8531f8aee968ac89bdb12a571b5db8d74ba33bdfa47f0aa88c380?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          number="50K+"
          description="Data Scientists"
        />
        <div css={styles.divider}></div>
        <StatisticItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b369ab487a2a1e66120b89919fd034abf35af94c22e0ab12b52e14e95ad142a8?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          number="100+"
          description="AI Challenges hosted"
        />
      </div>
    </section>
  );
};

interface StatisticItemProps {
  icon: string;
  number: string;
  description: string;
}

const StatisticItem: React.FC<StatisticItemProps> = ({
  icon,
  number,
  description,
}) => {
  return (
    <div css={styles.statisticItem}>
      <img src={icon} alt="" css={styles.icon} />
      <div>
        <div css={styles.number}>{number}</div>
        <div css={styles.description}>{description}</div>
      </div>
    </div>
  );
};

const styles = {
  statisticsBar: css`
    background-color: #002a3b;
    padding: 73px 70px;
    @media (max-width: 991px) {
      padding: 40px 20px;
    }
  `,
  statisticsContainer: css`
    display: flex;
    justify-content: space-between;
    max-width: 1064px;
    margin: 0 auto;
    @media (max-width: 991px) {
      flex-direction: column;
      align-items: center;
    }
  `,
  statisticItem: css`
    display: flex;
    gap: 22px;
    align-items: center;
    @media (max-width: 991px) {
      margin-bottom: 20px;
    }
  `,
  icon: css`
    width: 55px;
    height: 55px;
    object-fit: contain;
  `,
  number: css`
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    line-height: 20px;
  `,
  description: css`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-top: 7px;
  `,
  divider: css`
    width: 1px;
    height: 38px;
    background-color: #c4c4c4;
    @media (max-width: 991px) {
      display: none;
    }
  `,
};

export default StatisticsBar;
