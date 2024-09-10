/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface LevelTypeSelectProps {
  label: string;
  value: string;
}

const LevelTypeSelect: React.FC<LevelTypeSelectProps> = ({ label, value }) => {
  return (
    <div css={styles.container}>
      <label css={styles.label} htmlFor="level-type-select">
        {label}
      </label>
      <div css={styles.selectWrapper}>
        <select css={styles.select} id="level-type-select" value={value}>
          <option value={value}>{value}</option>
        </select>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e81e515c13c217fb5139defbb5b17a380a4f02d8f89c81dcc086d10426e74ad?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          alt=""
          css={styles.arrowIcon}
        />
      </div>
    </div>
  );
};

const styles = {
  container: css`
    margin-top: 41px;
    @media (max-width: 991px) {
      margin-top: 40px;
    }
  `,
  label: css`
    display: block;
    margin-bottom: 25px;
  `,
  selectWrapper: css`
    border-radius: 5px;
    display: flex;
    width: 236px;
    max-width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 12px 22px;
    border: 1px solid #b7b7b7;
    @media (max-width: 991px) {
      padding: 0 20px;
    }
  `,
  select: css`
    border: none;
    background: transparent;
    font-size: 14px;
    color: #444;
    appearance: none;
    width: 100%;
  `,
  arrowIcon: css`
    aspect-ratio: 1.33;
    object-fit: contain;
    object-position: center;
    width: 12px;
  `,
};

export default LevelTypeSelect;
