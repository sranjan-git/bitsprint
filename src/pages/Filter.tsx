/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import Header from "../components/filter/ChallengesPage/Header";
import StatisticsBar from "../components/filter/ChallengesPage/StatisticsBar";
import ChallengeExplanation from "../components/filter/ChallengesPage/ChallengeExplanation";
import ChallengeFilter from "../components/filter/ChallengesPage/ChallengeFilter";
import ChallengeCard from "../components/filter/ChallengesPage/ChallengeCard";

const ChallengesPage: React.FC = () => {
  const challenges = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5d154a4e1e1596fa621e2bd933ae2cd22ef565f1baecaf47584dd81df7e21290?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
      status: "Upcoming",
      statusColor: "rgba(242, 201, 76, 0.25)",
      title: "Data Science Bootcamp - Graded Datathon",
      timeLeft: { days: "00", hours: "15", minutes: "22" },
      type: "upcoming",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8b47546f5180281197b21a04de6e8fc331f06ec80fc938cb2d2e755f0f42a18c?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
      status: "Upcoming",
      statusColor: "rgba(242, 201, 76, 0.25)",
      title: "Data Sprint 72 - Butterfly Identification",
      timeLeft: { days: "00", hours: "12", minutes: "34" },
      type: "upcoming",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/63efc2ad475db7f547b4b4ead173b9e411ab5a34afa785072e442f158a874d49?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
      status: "Active",
      statusColor: "rgba(68, 146, 76, 0.24)",
      title: "Data Sprint 71 - Weather Recognition",
      timeLeft: { days: "01", hours: "17", minutes: "10" },
      type: "active",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/066bfd12c6a334c919b9d666d8d39ab851df37e89c169f4f33d0a71dd5332b57?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
      status: "Active",
      statusColor: "rgba(68, 146, 76, 0.24)",
      title: "Data Sprint 70-Airline Passenger Satisfaction",
      timeLeft: { days: "00", hours: "11", minutes: "27" },
      type: "active",
    },
    {
      id: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/33375a67a6e4c595d8c57c68cc374cbfc2a34e6443909772a15ea664d2753dd2?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
      status: "Past",
      statusColor: "rgba(255, 60, 0, 0.17)",
      title: "Engineering Graduates Employment Outcomes",
      endDate: "16th May'22 09:00 PM",
      type: "past",
    },
    {
      id: 6,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8e2233be2d81f151e7862bad66d69c8af3187756bdb19dc8fa4cada40c0a1a15?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
      status: "Past",
      statusColor: "rgba(255, 60, 0, 0.17)",
      title: "Travel Insurance Claim Prediction",
      endDate: "16th May'22 09:00 PM",
      type: "past",
    },
  ];

  return (
    <main css={styles.mainContainer}>
      <Header />
      <StatisticsBar />
      <ChallengeExplanation />
      <section css={styles.challengesSection}>
        <h2 css={styles.sectionTitle}>Explore Challenges</h2>
        <div css={styles.filterAndChallenges}>
          <ChallengeFilter />
          <div css={styles.challengeGrid}>
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const styles = {
  mainContainer: css`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  challengesSection: css`
    background-color: #002a3b;
    padding: 85px 80px;
    @media (max-width: 991px) {
      padding: 40px 20px;
    }
  `,
  sectionTitle: css`
    color: #fff;
    text-align: center;
    font: 600 28px/1 Poppins, sans-serif;
    margin-bottom: 64px;
  `,
  filterAndChallenges: css`
    display: flex;
    max-width: 1172px;
    margin: 0 auto;
    @media (max-width: 991px) {
      flex-direction: column;
    }
  `,
  challengeGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  `,
};

export default ChallengesPage;
