/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import SearchBar from "./SearchBar";
import FilterTags from "./FilterTags";
import ImageCard from "./ImageCard";

const ExploreSection: React.FC = () => {
  return (
    <section
      css={css`
        background-color: rgba(0, 42, 59, 1);
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        font-family: Poppins, sans-serif;
        justify-content: center;
        padding: 76px 80px;

        @media (max-width: 991px) {
          max-width: 100%;
          padding: 0 20px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          width: 964px;
          max-width: 100%;
          flex-direction: column;
        `}
      >
        <h2
          css={css`
            color: rgba(255, 255, 255, 1);
            font-size: 28px;
            font-weight: 600;
            line-height: 1;
            text-align: center;
            align-self: center;
          `}
        >
          Explore Challenges
        </h2>
        <SearchBar />
        <FilterTags />
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 40px;
          `}
        >
          <ImageCard
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5d154a4e1e1596fa621e2bd933ae2cd22ef565f1baecaf47584dd81df7e21290?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
            imgAlt="Data Science Bootcamp"
            statusText="Upcoming"
            title="Data Science Bootcamp - Graded Datathon"
            dateText="16th May'22 09:00 PM"
            buttonText="Participate Now"
            buttonIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/08d2aca669ef33e1ab75f2c4d05e6c78778c46aaeb58d617f8ec69a1e34d3712?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          />
          <ImageCard
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8b47546f5180281197b21a04de6e8fc331f06ec80fc938cb2d2e755f0f42a18c?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
            imgAlt="Data Sprint 72"
            statusText="Upcoming"
            title="Data Sprint 72 - Butterfly Identification"
            dateText="16th May'22 09:00 PM"
            buttonText="Participate Now"
            buttonIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/08d2aca669ef33e1ab75f2c4d05e6c78778c46aaeb58d617f8ec69a1e34d3712?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          />
          <ImageCard
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/33375a67a6e4c595d8c57c68cc374cbfc2a34e6443909772a15ea664d2753dd2?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
            imgAlt="Engineering Graduates Employment Outcomes"
            statusText="Past"
            title="Engineering Graduates Employment Outcomes"
            dateText="16th May'22 09:00 PM"
            buttonText="View Details"
            buttonIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/08d2aca669ef33e1ab75f2c4d05e6c78778c46aaeb58d617f8ec69a1e34d3712?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
