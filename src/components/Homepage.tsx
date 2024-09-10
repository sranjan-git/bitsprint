/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";


const Homepage: React.FC = () => {
  const navigate = useNavigate(); // Using react-router's useNavigate hook

  const handleCreateChallenge = () => {
    navigate("/admin"); // Navigate to the ChallengeDetails page
  };

  return (
    <header css={styles.header}>
      <div css={styles.content}>
        <div css={styles.accentBar} />
        <div css={styles.textContent}>
          <h1 css={styles.title}>
            Accelerate Innovation with Global AI Challenges
          </h1>
          <p css={styles.description}>
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </p>
          <button css={styles.ctaButton} onClick={handleCreateChallenge}>
            Create Challenge
          </button>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: css`
    background-color: rgba(0, 49, 69, 1);
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 109px 70px;
    font: 600 18px Poppins, sans-serif;
    @media (max-width: 991px) {
      max-width: 100%;
      padding: 100px 20px;
    }
  `,
  content: css`
    display: flex;
    width: 682px;
    max-width: 100%;
    gap: 40px 52px;
    flex-wrap: wrap;
  `,
  accentBar: css`
    background-color: rgba(255, 206, 92, 1);
    align-self: start;
    width: 10px;
    height: 117px;
  `,
  textContent: css`
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-grow: 1;
    flex-basis: 0;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  `,
  title: css`
    color: rgba(255, 255, 255, 1);
    font-size: 48px;
    line-height: 56px;
    align-self: stretch;
    @media (max-width: 991px) {
      max-width: 100%;
      font-size: 40px;
      line-height: 52px;
    }
  `,
  description: css`
    color: rgba(236, 236, 236, 1);
    font-weight: 500;
    line-height: 28px;
    margin-top: 44px;
    @media (max-width: 991px) {
      max-width: 100%;
      margin-top: 40px;
    }
  `,
  ctaButton: css`
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 1);
    margin-top: 47px;
    color: rgba(0, 49, 69, 1);
    text-align: center;
    line-height: 1;
    padding: 15px 18px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    @media (max-width: 991px) {
      margin-top: 40px;
    }
  `,
};

export default Homepage;
