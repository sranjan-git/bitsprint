/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate(); // Using react-router's useNavigate hook

  const handleCreateChallenge = () => {
    navigate("/admin"); // Navigate to the ChallengeDetails page
  };
  return (
    <header css={styles.header}>
      <div css={styles.logoContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/211b2f67fc48eafa8d0e9ee78b6178645c329f76efd4b1ee361cea75dbddf6c3?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          alt="Company Logo"
          css={styles.logo}
        />
      </div>
      <div css={styles.headerContent}>
        <div css={styles.titleContainer}>
          <div css={styles.yellowBar}></div>
          <h1 css={styles.title}>
            Accelerate Innovation with Global AI Challenges
          </h1>
        </div>
        <p css={styles.description}>
          AI Challenges at DPhi simulate real-world problems. It is a great
          place to put your AI/Data Science skills to test on diverse datasets
          allowing you to foster learning through competitions.
        </p>
        <button css={styles.createButton} onClick={handleCreateChallenge}>Create Challenge</button>
      </div>
    </header>
  );
};

const styles = {
  header: css`
    background-color: #003145;
    padding-bottom: 93px;
    @media (max-width: 991px) {
      padding-bottom: 40px;
    }
  `,
  logoContainer: css`
    background-color: #fff;
    padding: 13px 80px;
    @media (max-width: 991px) {
      padding: 13px 20px;
    }
  `,
  logo: css`
    width: 87px;
    object-fit: contain;
  `,
  headerContent: css`
    max-width: 705px;
    margin: 124px 0 0 143px;
    font: 600 18px Poppins, sans-serif;
    @media (max-width: 991px) {
      margin: 40px 20px 0;
    }
  `,
  titleContainer: css`
    display: flex;
    gap: 52px;
  `,
  yellowBar: css`
    background-color: #ffce5c;
    width: 10px;
    height: 116px;
  `,
  title: css`
    font-size: 48px;
    color: #fff;
    line-height: 56px;
    @media (max-width: 991px) {
      font-size: 40px;
      line-height: 52px;
    }
  `,
  description: css`
    color: #ececec;
    font-weight: 500;
    line-height: 28px;
    margin-top: 36px;
  `,
  createButton: css`
    background-color: #fff;
    color: #003145;
    border: none;
    border-radius: 10px;
    padding: 15px 18px;
    font-size: 18px;
    font-weight: 600;
    margin-top: 37px;
    cursor: pointer;
  `,
};

export default Header;
