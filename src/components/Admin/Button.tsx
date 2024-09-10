/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset"; // Add the optional 'type' prop
}

const buttonStyles = css`
  align-self: stretch;
  border-radius: 10px;
  background: var(--dphigreen, #44924c);
  margin-top: 56px;
  min-height: 46px;
  gap: 10px;
  font-size: 18px;
  color: var(--white, #fff);
  text-align: center;
  line-height: 1;
  padding: 13px 18px;
  border: none;
  cursor: pointer;
  @media (max-width: 640px) {
    margin-left: 12px;
  }
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, type = "button" }) => {
  return (
    <button css={buttonStyles} type={type}>
      {label}
    </button>
  );
};

export default Button;
