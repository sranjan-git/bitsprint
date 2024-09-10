/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface DateInputProps {
  label: string;
  value: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, value }) => {
  return (
    <div css={styles.container}>
      <label css={styles.label} htmlFor={`${label.toLowerCase()}-input`}>
        {label}
      </label>
      <div css={styles.inputWrapper}>
        <input
          css={styles.input}
          type="text"
          id={`${label.toLowerCase()}-input`}
          value={value}
          readOnly
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/698d504cc6eec46615ccbdc590c2e9e9432220dc912016c6f60e6a707e28b9d2?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          alt="Calendar icon"
          css={styles.calendarIcon}
        />
      </div>
    </div>
  );
};

const styles = {
  container: css`
    margin-top: 34px;
  `,
  label: css`
    display: block;
    margin-bottom: 28px;
  `,
  inputWrapper: css`
    border-radius: 5px;
    display: flex;
    width: 453px;
    max-width: 100%;
    justify-content: space-between;
    padding: 8px 23px;
    border: 1px solid #b7b7b7;
    @media (max-width: 991px) {
      padding-right: 20px;
    }
  `,
  input: css`
    border: none;
    background: transparent;
    color: #444;
    font: inherit;
    width: 100%;
  `,
  calendarIcon: css`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 24px;
  `,
};

export default DateInput;
