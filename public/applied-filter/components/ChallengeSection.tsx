/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import ChallengeItem from "./ChallengeItem";

const challenges = [
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/12466882020ebe7b7f13e205f2342e34adf2846d722c5e7a2f444d6bbf085ea2?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    imgAlt: "",
    headerText: "Prove your skills",
    bodyText:
      "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e5b90af5c66e67453f99b804d90bc87e9259c3ef8fbc866a2c102999e1ac11f8?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    imgAlt: "",
    headerText: "Learn from community",
    bodyText:
      "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/002ea247cc1d0e229412bc828465cad6790f53644c64cecb88b9559c1fbbfbe1?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    imgAlt: "",
    headerText: "Challenge yourself",
    bodyText:
      "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0f5693a88beb9eb3506c307dfd9d2231502d5f3a03d6af0d4e2fa0ebb2ddc4d3?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    imgAlt: "",
    headerText: "Earn recognition",
    bodyText:
      "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  },
];

const ChallengeSection: React.FC = () => {
  return (
    <section
      css={css`
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 107px 80px;

        @media (max-width: 991px) {
          max-width: 100%;
          padding: 0 20px 100px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          margin-bottom: -25px;
          width: 100%;
          max-width: 1119px;
          flex-direction: column;

          @media (max-width: 991px) {
            max-width: 100%;
            margin-bottom: 10px;
          }
        `}
      >
        <h2
          css={css`
            color: rgba(0, 0, 0, 1);
            text-align: center;
            align-self: center;
            font: 600 32px/1 Poppins, sans-serif;

            @media (max-width: 991px) {
              max-width: 100%;
            }
          `}
        >
          Why Participate in
          <span style={{ color: "rgba(68,146,76,1)" }}> AI Challenges?</span>
        </h2>
        <div
          css={css`
            margin-top: 62px;

            @media (max-width: 991px) {
              max-width: 100%;
              margin-top: 40px;
            }
          `}
        >
          {challenges
            .slice(0, 2)
            .map(({ imgSrc, imgAlt, headerText, bodyText }) => (
              <div
                css={css`
                  display: flex;
                  gap: 20px;

                  @media (max-width: 991px) {
                    flex-direction: column;
                    align-items: stretch;
                    gap: 0px;
                  }
                `}
              >
                <ChallengeItem
                  key={headerText}
                  imgSrc={imgSrc}
                  imgAlt={imgAlt}
                  headerText={headerText}
                  bodyText={bodyText}
                />
              </div>
            ))}
        </div>
        <div
          css={css`
            margin-top: 39px;

            @media (max-width: 991px) {
              max-width: 100%;
            }
          `}
        >
          {challenges
            .slice(2, 4)
            .map(({ imgSrc, imgAlt, headerText, bodyText }) => (
              <div
                css={css`
                  display: flex;
                  gap: 20px;

                  @media (max-width: 991px) {
                    flex-direction: column;
                    align-items: stretch;
                    gap: 0px;
                  }
                `}
              >
                <ChallengeItem
                  key={headerText}
                  imgSrc={imgSrc}
                  imgAlt={imgAlt}
                  headerText={headerText}
                  bodyText={bodyText}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
