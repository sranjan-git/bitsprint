/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  label: string;
  selected: Date | null;
  onChange: (date: Date | null) => void;
}

const labelStyles = css`
  margin-bottom: 28px;
`;

const datePickerStyles = css`
  border-radius: 5px;
  display: flex;
  width: 453px;
  max-width: 100%;
  gap: 20px;
  color: #808080;
  font-weight: 400;
  justify-content: space-between;
  padding: 8px 23px;
  border: 1px solid #b7b7b7;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
  @media (max-width: 640px) {
    width: 562px;
    margin: 0 -4px 0 5px;
  }
`;

const iconStyles = css`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`;

const DatePickerComponent: React.FC<DatePickerProps> = ({ label, selected, onChange }) => {
  return (
    <div>
      <label css={labelStyles} htmlFor={label.toLowerCase().replace(" ", "-")}>
        {label}
      </label>
      <div css={datePickerStyles}>
        <DatePicker
          selected={selected}
          onChange={onChange}
          placeholderText={`Add ${label.toLowerCase()}`}
        />
        <img
          css={iconStyles}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b7fe75b5aa6923e388af764b3edd700feeef988c208d5aa3aad3761e1b97085?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          alt="Calendar icon"
        />
      </div>
    </div>
  );
};

export default DatePickerComponent;
