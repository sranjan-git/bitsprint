/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import ChallengeCard from "../cards/ChallengeCard";
import { useNavigate } from "react-router-dom";

interface ChallengeCardProps {
  imageSrc: string;
  status: "Upcoming" | "Active" | "Past";
  title: string;
  timeInfo: {
    type: "Starts in" | "Ends in" | "Ended on"; 
    value: string;
  };
}

const challengeData: ChallengeCardProps[] = [
  {
    imageSrc:"/assets/cardImage/1.png",
    status: "Upcoming", // Ensure it's typed correctly
    title: "Data Science Bootcamp - Graded Datathon",
    timeInfo: {
      type: "Starts in",
      value: "00 : 15 : 22",
    },
  },
  {
    imageSrc:"/assets/cardImage/2.png",
    status: "Upcoming",
    title: "Data Sprint 72 - Butterfly Identification",
    timeInfo: {
      type: "Starts in",
      value: "00 : 12 : 34",
    },
  },
  {
    imageSrc:"/assets/cardImage/3.png",
    status: "Active",
    title: "Data Sprint 71 - Weather Recognition",
    timeInfo: {
      type: "Ends in",
      value: "01 : 17 : 10",
    },
  },
  {
    imageSrc:"/assets/cardImage/4.png",
    status: "Active",
    title: "Data Sprint 70-Airline Passenger Satisfaction",
    timeInfo: {
      type: "Ends in",
      value: "00 : 11 : 27",
    },
  },
  {
    imageSrc:"/assets/cardImage/5.png",
    status: "Past",
    title: "Engineering Graduates Employment Outcomes",
    timeInfo: {
      type: "Ended on",
      value: "16th May'22 09:00 PM",
    },
  },
  {
    imageSrc:"/assets/cardImage/6.png",
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