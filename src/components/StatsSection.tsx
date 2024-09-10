/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

interface StatItemProps {
  iconSrc: string;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ iconSrc, value, label }) => (
  <div css={styles.statItem}>
    <img src={iconSrc} alt="" css={styles.statIcon} />
    <div css={styles.statContent}>
      <div css={styles.statValue}>{value}</div>
      <div css={styles.statLabel}>{label}</div>
    </div>
  </div>
);

const StatsSection: React.FC = () => {
  return (

    <section css={styles.statsSection}>
      <div css={styles.statsContainer}>
        <StatItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/448c889c2f52d324ce10c2566f3b3d8c72741390ac3fef8d2ce34a9304348d95?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          value="100K+"
          label="AI model submissions"
        />
        <div css={styles.divider} />
        <StatItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8acca0ef21244cf289efffc19facc0db5bfcfee6c381098d37cc093c69cef0c4?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          value="50K+"
          label="Data Scientists"
        />
        <div css={styles.divider} />
        <StatItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b50081a5e9d5cd2c950f9a7fead444bafe3b0ecd9f0efeda151563a1ca5ee7?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          value="100+"
          label="AI Challenges hosted"
        />
      </div>
    </section>
  );
};

const styles = {
  statsSection: css`
    background-color: rgba(0, 42, 59, 1);
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    font-family: Inter, sans-serif;
    color: rgba(255, 255, 255, 1);
    justify-content: center;
    padding: 73px 70px;
    @media (max-width: 991px) {
      max-width: 100%;
      padding: 40px 20px;
    }
  `,
  statsContainer: css`
    display: flex;
    width: 100%;
    max-width: 1063px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  `,
  statItem: css`
    display: flex;
    gap: 22px;
  `,
  statIcon: css`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 55px;
    border-radius: 0;
  `,
  statContent: css`
    display: flex;
    flex-direction: column;
    margin: auto 0;
  `,
  statValue: css`
    font-size: 24px;
    font-weight: 700;
    line-height: 20px;
    align-self: start;
  `,
  statLabel: css`
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    margin-top: 7px;
  `,
  divider: css`
    background-color: rgba(196, 196, 196, 1);
    width: 1px;
    height: 38px;
    margin: auto 0;
  `,
};

export default StatsSection;