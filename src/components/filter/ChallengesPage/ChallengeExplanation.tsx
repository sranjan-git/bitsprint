/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const ChallengeExplanation: React.FC = () => {
  const reasons = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4bc5593deaba3307fb71d3053eb004b99dbc4cc0fffb7e8de000aa86c139e694?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
      title: "Prove your skills",
      description:
        "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/941cd4e67a267eb12035e58977390b9d7e152e2e814ea67a501fa0c1813422b1?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
      title: "Learn from community",
      description:
        "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12466882020ebe7b7f13e205f2342e34adf2846d722c5e7a2f444d6bbf085ea2?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
      title: "Challenge yourself",
      description:
        "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bfff1a501c77461ca4f49f817b23779dea4fc374e411109751f4f8b8ebbb6e9?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
      title: "Earn recognition",
      description:
        "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
    },
  ];

  return (
    <section css={styles.explanationSection}>
      <h2 css={styles.title}>
        Why Participate in <span css={styles.highlight}>AI Challenges?</span>
      </h2>
      <div css={styles.reasonsGrid}>
        {reasons.map((reason, index) => (
          <ReasonCard key={index} {...reason} />
        ))}
      </div>
    </section>
  );
};

interface ReasonCardProps {
  icon: string;
  title: string;
  description: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div css={styles.reasonCard}>
      <img src={icon} alt="" css={styles.icon} />
      <h3 css={styles.reasonTitle}>{title}</h3>
      <p css={styles.reasonDescription}>{description}</p>
    </div>
  );
};

const styles = {
  explanationSection: css`
    background-color: #fff;
    padding: 107px 80px;
    @media (max-width: 991px) {
      padding: 60px 20px;
    }
  `,
  title: css`
    color: #000;
    text-align: center;
    font: 600 32px/1 Poppins, sans-serif;
    margin-bottom: 62px;
  `,
  highlight: css`
    color: #44924c;
  `,
  reasonsGrid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 1119px;
    margin: 0 auto;
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  `,
  reasonCard: css`
    background-color: #f8f9fd;
    border-radius: 20px;
    padding: 65px 31px;
    @media (max-width: 991px) {
      padding: 40px 20px;
    }
  `,
  icon: css`
    width: 43px;
    height: 43px;
    object-fit: contain;
  `,
  reasonTitle: css`
    color: #000;
    font-size: 24px;
    font-weight: 600;
    line-height: 2;
    letter-spacing: -0.72px;
    margin-top: 5px;
  `,
  reasonDescription: css`
    color: #64607d;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.32px;
    margin-top: 32px;
  `,
};

export default ChallengeExplanation;
