/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import Header from "../components/detail/Header";
import Banner from "../components/detail/Banner";
import Overview from "../components/detail/Overview";
import Description from "../components/detail/Description";

// Define props if any, or remove the interface if not needed
interface DetailProps {}

const Detail: React.FC<DetailProps> = () => {
  return (
    <main css={mainStyles}>
      <Header />
      <Banner />
      <Overview />
      <Description />
    </main>
  );
};

const mainStyles = css`
  background-color: #ffffff;
  display: flex;
  padding-bottom: 70px;
  flex-direction: column;
  overflow: hidden;
`;

export default Detail;
