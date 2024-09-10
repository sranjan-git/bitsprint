/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import HeroSection from "../components/Homepage";
import StatsSection from "../components/StatsSection";
import BenefitsSection from "../components/BenefitsSection";
import ChallengeSection from "../components/Challenge";

const Home: React.FC = () => {
  return (
    <main css={styles.mainContainer}>
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <ChallengeSection />
    </main>
  );
};

const styles = {
  mainContainer: css`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
    overflow: hidden;
  `,
};

export default Home;
