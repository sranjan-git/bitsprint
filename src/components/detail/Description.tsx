/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
  return (
    <section css={descriptionStyles}>
      <p>
        Butterflies are the adult flying stage of certain insects belonging to
        an order or group called Lepidoptera. The word "Lepidoptera" means
        "scaly wings" in Greek. This name perfectly suits the insects in this
        group because their wings are covered with thousands of tiny scales
        overlapping in rows.
        <br />
        <br />
        An agency of the Governmental Wildlife Conservation is planning to
        implement an automated system based on computer vision so that it can
        identify butterflies based on captured images. As a consultant for this
        project, you are responsible for developing an efficient model.
        <br />
        <br />
        Your Task is to build an Image Classification Model using CNN that
        classifies to which class of weather each image belongs to.
      </p>
    </section>
  );
};

const descriptionStyles = css`
  color: #64607d;
  letter-spacing: -0.36px;
  align-self: flex-start;
  margin: 25px 0 0 126px;
  font: 500 18px/28px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default Description;
