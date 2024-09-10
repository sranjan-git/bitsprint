/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface TextAreaProps {
  label: string;
  value: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value }) => {
  return (
    <div css={styles.container}>
      <label css={styles.label} htmlFor={`${label.toLowerCase()}-textarea`}>
        {label}
      </label>
      <textarea
        css={styles.textarea}
        id={`${label.toLowerCase()}-textarea`}
        value={value}
        readOnly
      />
    </div>
  );
};

const styles = {
  container: css`
    margin-top: 44px;
    width: 100%;
    @media (max-width: 991px) {
      margin-top: 40px;
    }
  `,
  label: css`
    display: block;
    margin-bottom: 25px;
  `,
  textarea: css`
    border-radius: 5px;
    width: 100%;
    height: 172px;
    color: #444;
    padding: 21px 20px;
    border: 1px solid #b7b7b7;
    font: inherit;
    resize: vertical;
    @media (max-width: 991px) {
      height: 110px;
    }
  `,
};

export default TextArea;
