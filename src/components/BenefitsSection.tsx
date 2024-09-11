/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface BenefitCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  iconSrc,
  title,
  description,
}) => (
  <div css={styles.benefitCard}>
    <img src={iconSrc} alt="" css={styles.benefitIcon} />
    <h3 css={styles.benefitTitle}>{title}</h3>
    <p css={styles.benefitDescription}>{description}</p>
  </div>
);

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      iconSrc:"/assets/icons/3.svg",
      title: "Prove your skills",
      description:
        "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
    },
    {
      iconSrc:"/assets/icons/12.svg",
      title: "Learn from community",
      description:
        "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
    },
    {
      iconSrc:"/assets/icons/10.svg",
      title: "Challenge yourself",
      description:
        "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
    },
    {
      iconSrc:"/assets/icons/8.svg",
      title: "Earn recognition",
      description:
        "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
    },
  ];

  return (
    <section css={styles.benefitsSection}>
      <h2 css={styles.sectionTitle}>
        Why Participate in{" "}
        <span css={styles.highlightedText}>AI Challenges?</span>
      </h2>
      <div css={styles.benefitsContainer}>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  benefitsSection: css`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 40px;
    @media (max-width: 991px) {
      padding: 60px 20px;
    }
  `,
  sectionTitle: css`
    color: #000000;
    text-align: center;
    font: 600 32px/1.2 "Poppins", sans-serif;
    margin-bottom: 40px;
    @media (max-width: 991px) {
      font-size: 28px;
      margin-bottom: 30px;
    }
  `,
  highlightedText: css`
    color: #3ab54a;
  `,
  benefitsContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  `,
  benefitCard: css`
    border-radius: 10px;
    background-color: #f8f9fd;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    text-align: left;
    @media (max-width: 991px) {
      padding: 20px;
    }
  `,
  benefitIcon: css`
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
  `,
  benefitTitle: css`
    color: #000000;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 10px;
  `,
  benefitDescription: css`
    color: #64607d;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin-top: 10px;
  `,
};

export default BenefitsSection;
