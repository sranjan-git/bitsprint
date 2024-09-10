/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const labelStyles = css`
  margin-bottom: 25px;
`;

const inputStyles = css`
  border-radius: 5px;
  display: flex;
  width: 453px;
  max-width: 100%;
  height: 39px;
  border: 1px solid #b7b7b7;
`;

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <label css={labelStyles} htmlFor={label.toLowerCase().replace(" ", "-")}>
        {label}
      </label>
      <input
        css={inputStyles}
        type="text"
        id={label.toLowerCase().replace(" ", "-")}
        name={label.toLowerCase().replace(" ", "-")}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
