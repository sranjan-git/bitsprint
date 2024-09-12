/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Statistics from "./Statistics";

const stats = [
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b4b3ea645378b88a735f8a30b9ffa68d60cc57d16769c50270e0c4924f008029?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    imgAlt: "",
    title: "100K+",
    description: "AI model submissions",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2b2c864d32199a60696779f330500a40e9065a3663156eb1a8bcf0a33e92ccf9?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    imgAlt: "",
    title: "50K+",
    description: "Data Scientists",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/427acda0a5382b4caa9b66bfbd7116e64b6ede6a692baf03b78ce293cf5667e6?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    imgAlt: "",
    title: "100+",
    description: "AI Challenges hosted",
  },
];

const StatSection: React.FC = () => {
  return (
    <section
      css={css`
        background-color: rgba(0, 42, 59, 1);
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        font-family: Inter, sans-serif;
        color: rgba(255, 255, 255, 1);
        justify-content: center;
        padding: 73px 70px;

        @media (max-width: 991px) {
          max-width: 100%;
          padding: 0 20px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          width: 100%;
          max-width: 1064px;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: space-between;

          @media (max-width: 991px) {
            max-width: 100%;
          }
        `}
      >
        {stats.map(({ imgSrc, imgAlt, title, description }) => (
          <Statistics
            key={title}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default StatSection;
