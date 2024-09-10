/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface TextInputProps {
  label: string;
  value: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, value }) => {
  return (
    <div css={styles.container}>
      <label css={styles.label} htmlFor={`${label.toLowerCase()}-input`}>
        {label}
      </label>
      <input
        css={styles.input}
        type="text"
        id={`${label.toLowerCase()}-input`}
        value={value}
        readOnly
      />
    </div>
  );
};

const styles = {
  container: css`
    margin-bottom: 34px;
  `,
  label: css`
    display: block;
    margin-bottom: 25px;
  `,
  input: css`
    border-radius: 5px;
    width: 453px;
    max-width: 100%;
    color: #444;
    padding: 9px 20px 15px;
    border: 1px solid #b7b7b7;
    font: inherit;
  `,
};

export default TextInput;
