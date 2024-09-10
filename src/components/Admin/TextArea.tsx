/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const labelStyles = css`
  margin-bottom: 25px;
`;

const textAreaStyles = css`
  border-radius: 5px;
  align-self: stretch;
  display: flex;
  height: 252px;
  border: 1px solid #b7b7b7;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 640px) {
    margin: 0 6px;
    padding: 0 15px 0 17px;
  }
`;

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <label css={labelStyles} htmlFor={label.toLowerCase().replace(" ", "-")}>
        {label}
      </label>
      <textarea
        css={textAreaStyles}
        id={label.toLowerCase().replace(" ", "-")}
        name={label.toLowerCase().replace(" ", "-")}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
