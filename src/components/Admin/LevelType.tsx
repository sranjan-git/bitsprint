/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface LevelTypeProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const labelStyles = css`
  margin-bottom: 25px;
`;

const selectStyles = css`
  border-radius: 5px;
  display: flex;
  width: 453px;
  max-width: 100%;
  height: 39px;
  border: 1px solid #b7b7b7;
`;

const LevelType: React.FC<LevelTypeProps> = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label css={labelStyles} htmlFor={label.toLowerCase().replace(" ", "-")}>
        {label}
      </label>
      <select
        css={selectStyles}
        id={label.toLowerCase().replace(" ", "-")}
        name={label.toLowerCase().replace(" ", "-")}
        value={value}
        onChange={onChange}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LevelType;
