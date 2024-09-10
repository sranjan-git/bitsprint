/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

interface OverviewProps {}

const Overview: React.FC<OverviewProps> = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/edit"); 
  };

  return (
    <section css={overviewStyles}>
      <div css={contentWrapperStyles}>
        <div css={tabStyles}>
          <h2 css={tabTitleStyles}>Overview</h2>
          <div css={activeIndicatorStyles} />
        </div>
        <div css={actionButtonsStyles}>
          <button css={editButtonStyles} onClick={handleEditClick}>Edit</button>
          <button css={deleteButtonStyles}>Delete</button>
        </div>
      </div>
    </section>
  );
};

const overviewStyles = css`
  border: 0.3px solid #dde6ed;
  background: var(--B10, #fff);
  box-shadow: 0px 6px 12px 0px #dde6ed;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 14px 70px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
    padding: 0 20px;
  }
`;

const contentWrapperStyles = css`
  display: flex;
  width: 100%;
  max-width: 1194px;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const tabStyles = css`
  display: flex;
  margin-top: 11px;
  flex-direction: column;
  color: #000000;
  font: 700 18px/2 Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const tabTitleStyles = css`
  align-self: center;
`;

const activeIndicatorStyles = css`
  border-radius: 20px;
  background-color: #44924c;
  display: flex;
  margin-top: 8px;
  height: 4px;
`;

const actionButtonsStyles = css`
  display: flex;
  gap: 18px;
  text-align: center;
  font: 600 14px/1 Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const editButtonStyles = css`
  border-radius: 10px;
  background-color: #44924c;
  color: #ffffff;
  padding: 10px 32px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const deleteButtonStyles = css`
  border-radius: 10px;
  color: #dc1414;
  padding: 10px 23px;
  border: 1px solid #dc1414;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

export default Overview;
