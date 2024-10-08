/** @jsxImportSource @emotion/react */

import * as React from "react";
import { css } from "@emotion/react";
import Header from "../components/Header";
import StatSection from "../components/StatSection";
import ChallengeSection from "../components/ChallengeSection";
import ImageCard from "../components/ImageCard";

const MainPage: React.FC = () => {
  return (
    <div
      css={css`
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: column;
        overflow: hidden;
      `}
    >
      <Header imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/211b2f67fc48eafa8d0e9ee78b6178645c329f76efd4b1ee361cea75dbddf6c3?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20" />
      <main>
        <StatSection />
        <ChallengeSection />
        <section
          css={css`
            background-color: rgba(0, 49, 69, 1);
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            padding: 75px 80px 125px;

            @media (max-width: 991px) {
              max-width: 100%;
              padding: 0 20px 100px;
            }
          `}
        >
          <section
            css={css`
              display: flex;
              margin-bottom: -25px;
              width: 100%;
              max-width: 1172px;
              flex-direction: column;

              @media (max-width: 991px) {
                max-width: 100%;
                margin-bottom: 10px;
              }
            `}
          >
            <section
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
              <ImageCard
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5d154a4e1e1596fa621e2bd933ae2cd22ef565f1baecaf47584dd81df7e21290?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
                imgAlt=""
                statusText="Upcoming"
                title="Data Science Bootcamp - Graded Datathon"
                dateText="16th May'22 09:00 PM"
                buttonText="Participate Now"
                buttonIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/08d2aca669ef33e1ab75f2c4d05e6c78778c46aaeb58d617f8ec69a1e34d3712?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
              />
              <ImageCard
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8b47546f5180281197b21a04de6e8fc331f06ec80fc938cb2d2e755f0f42a18c?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
                imgAlt=""
                statusText="Upcoming"
                title="Data Sprint 72 - Butterfly Identification"
                dateText="16th May'22 09:00 PM"
                buttonText="Participate Now"
                buttonIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/08d2aca669ef33e1ab75f2c4d05e6c78778c46aaeb58d617f8ec69a1e34d3712?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
              />
              <ImageCard
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/33375a67a6e4c595d8c57c68cc374cbfc2a34e6443909772a15ea664d2753dd2?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
                imgAlt=""
                statusText="Past"
                title="Engineering Graduates Employment Outcomes"
                dateText="16th May'22 09:00 PM"
                buttonText="Participate Now"
                buttonIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/08d2aca669ef33e1ab75f2c4d05e6c78778c46aaeb58d617f8ec69a1e34d3712?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
              />
              <ImageCard
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2233be2d81f151e7862bad66d69c8af3187756bdb19dc8fa4cada40c0a1a15?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
                imgAlt=""
                statusText="Past"
                title="Travel Insurance Claim Prediction"
                buttonIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/08d2aca669ef33e1ab75f2c4d05e6c78778c46aaeb58d617f8ec69a1e34d3712?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
              />
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
import React from "react";
import { css } from "@emotion/react";
import Header from "../components/Header";
import StatSection from "../components/StatSection";
import ChallengeSection from "../components/ChallengeSection";
import ExploreSection from "../components/ExploreSection";

const MainPage: React.FC = () => {
  return (
    <div
      css={css`
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: column;
        overflow: hidden;
      `}
    >
      <Header imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/211b2f67fc48eafa8d0e9ee78b6178645c329f76efd4b1ee361cea75dbddf6c3?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20" />
      <main>
        <section
          css={css`
            background-color: rgba(0, 49, 69, 1);
            display: flex;
            margin-top: 4px;
            width: 100%;
            padding-bottom: 93px;
            flex-direction: column;

            @media (max-width: 991px) {
              max-width: 100%;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              width: 705px;
              max-width: 100%;
              flex-direction: column;
              margin: 124px 0 0 143px;
              font: 600 18px Poppins, sans-serif;

              @media (max-width: 991px) {
                margin-top: 40px;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                gap: 40px 52px;
                font-size: 48px;
                color: rgba(255, 255, 255, 1);
                line-height: 56px;
                flex-wrap: wrap;

                @media (max-width: 991px) {
                  max-width: 100%;
                  font-size: 40px;
                  line-height: 52px;
                }
              `}
            >
              <div
                css={css`
                  background-color: rgba(255, 206, 92, 1);
                  display: flex;
                  width: 10px;
                  height: 116px;
                `}
              />
              <h1
                css={css`
                  flex-grow: 1;
                  width: 641px;
                  flex-basis: auto;

                  @media (max-width: 991px) {
                    max-width: 100%;
                    font-size: 40px;
                    line-height: 52px;
                  }
                `}
              >
                Accelerate Innovation with Global AI Challenges
              </h1>
            </div>
            <p
              css={css`
                color: rgba(236, 236, 236, 1);
                font-weight: 500;
                line-height: 28px;
                align-self: center;
                margin-top: 36px;
                width: 531px;

                @media (max-width: 991px) {
                  max-width: 100%;
                }
              `}
            >
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
            <button
              css={css`
                border-radius: 10px;
                background-color: rgba(255, 255, 255, 1);
                align-self: start;
                color: rgba(0, 49, 69, 1);
                text-align: center;
                line-height: 1;
                margin: 37px 0 0 62px;
                padding: 15px 18px;
                border: none;
                cursor: pointer;

                @media (max-width: 991px) {
                  margin-left: 10px;
                }
              `}
            >
              Create Challenge
            </button>
          </div>
        </section>
        <StatSection />
        <ChallengeSection />
        <ExploreSection />
      </main>
    </div>
  );
};

export default MainPage;
