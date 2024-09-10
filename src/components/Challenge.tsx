/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import ChallengeCard from "../cards/ChallengeCard";
import { useNavigate } from "react-router-dom";

interface ChallengeCardProps {
  imageSrc: string;
  status: string;
  title: string;
  timeInfo: {
    type: string;
    value: string;
  };
}

const challengeData: ChallengeCardProps[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83ea8640ccdcd5a75dda1971569d0f6bd270b57266248baca2d8341246f12176?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    status: "Upcoming", // Ensure it's typed correctly
    title: "Data Science Bootcamp - Graded Datathon",
    timeInfo: {
      type: "Starts in",
      value: "00 : 15 : 22",
    },
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/eb61a918f534672444d3bd4d5678b30446b3bf5675f7e0a2233b9e186f7124bb?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    status: "Upcoming",
    title: "Data Sprint 72 - Butterfly Identification",
    timeInfo: {
      type: "Starts in",
      value: "00 : 12 : 34",
    },
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/03a9416cc8fc4cdf7f41ae0cb11af758bf1918dac5333b97426fd31352cb8cdb?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    status: "Active",
    title: "Data Sprint 71 - Weather Recognition",
    timeInfo: {
      type: "Ends in",
      value: "01 : 17 : 10",
    },
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d6dc272945481ab55c551ecf79be58941d3b01e5969a961399c13090d574dbbd?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    status: "Active",
    title: "Data Sprint 70-Airline Passenger Satisfaction",
    timeInfo: {
      type: "Ends in",
      value: "00 : 11 : 27",
    },
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb4d9fc7d1b854dfb993180bbb4ca3f6e8d68db24da80df6c59b0539c6110695?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    status: "Past",
    title: "Engineering Graduates Employment Outcomes",
    timeInfo: {
      type: "Ended on",
      value: "16th May'22 09:00 PM",
    },
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3dbb97d3efe1d092ab78b846a14d4d55e49cd0773d91221634b690069a485ae6?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    status: "Past",
    title: "Travel Insurance Claim Prediction",
    timeInfo: {
      type: "Ended on",
      value: "16th May'22 09:00 PM",
    },
  },
];


const ChallengeSection: React.FC = () => {
  const navigate = useNavigate(); // Using useNavigate for navigation

  const handleParticipateClick = () => {
    navigate("/details"); // Navigating to /details page
  };

  const handleFilterClick = () => {
    navigate("/filter"); // Navigating to /filter page
  };

  return (
    <section css={styles.section}>
      <h2 css={styles.title}>Explore Challenges</h2>
      <div css={styles.searchContainer}>
        <div css={styles.searchInput}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/147aea6b5592cd2e6bcf497d135ea963597cee74fab78372941ceb9ccca93ff3?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
            alt=""
            css={styles.searchIcon}
          />
          <input type="text" placeholder="Search" css={styles.input} />
        </div>
        <button css={styles.filterButton} onClick={handleFilterClick}>
          Filter
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/06f3e37424e249829cbb0f0d0d01885d3a172d2fe49998d43186a2e1a58a4ee5?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
            alt=""
            css={styles.filterIcon}
          />
        </button>
      </div>
      <div css={styles.cardContainer}>
        {challengeData.map((challenge, index) => (
          <div key={index} css={styles.cardWrapper}>
            <ChallengeCard {...challenge} />
            <button css={styles.participateButton} onClick={handleParticipateClick}>
              Participate Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: css`
    background-color: rgba(0, 42, 59, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 91px 80px;
    @media (max-width: 991px) {
      max-width: 100%;
      padding: 40px 20px;
    }
  `,
  title: css`
    color: rgba(255, 255, 255, 1);
    text-align: center;
    font: 600 28px/1 Poppins, sans-serif;
    margin-bottom: 40px;
  `,
  searchContainer: css`
    display: flex;
    margin-bottom: 40px;
    gap: 20px;
    white-space: nowrap;
    flex-wrap: wrap;
    font: 18px Inter, sans-serif;
    @media (max-width: 991px) {
      white-space: initial;
    }
  `,
  searchInput: css`
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 50px rgba(111, 111, 111, 0.1);
    display: flex;
    gap: 12px;
    overflow: hidden;
    color: rgba(133, 133, 133, 1);
    font-weight: 300;
    line-height: 1;
    flex-grow: 1;
    flex-basis: auto;
    padding: 16px 38px;
    @media (max-width: 991px) {
      white-space: initial;
      padding: 16px 20px;
    }
  `,
  searchIcon: css`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 17px;
    align-self: center;
  `,
  input: css`
    border: none;
    background: transparent;
    flex-grow: 1;
    font-size: 18px;
    &::placeholder {
      color: rgba(133, 133, 133, 1);
    }
  `,
  filterButton: css`
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    gap: 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    line-height: 1;
    padding: 12px 19px;
    border: 1px solid rgba(234, 234, 234, 1);
    cursor: pointer;
    @media (max-width: 991px) {
      padding-left: 20px;
      white-space: initial;
    }
  `,
  filterIcon: css`
    aspect-ratio: 1.88;
    object-fit: contain;
    object-position: center;
    width: 15px;
    margin: auto 0;
  `,
  cardContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  `,
  cardWrapper: css`
    flex-basis: calc(33.333% - 20px);
    @media (max-width: 991px) {
      flex-basis: 100%;
    }
  `,
  participateButton: css`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  `,
};

export default ChallengeSection;