/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import DateInput from "../components/DateInput";
import ImageUpload from "../components/ImageUpload";
import LevelTypeSelect from "../components/LevelTypeSelect";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";

interface ChallengeDetailsProps {}

const ChallengeDetails: React.FC<ChallengeDetailsProps> = () => {
  const navigate = useNavigate();

  const handleSaveClick = () =>{
    navigate("/home")
  }
  return (
    <main css={styles.main}>
      <header css={styles.header}>
        <img
          src="/assets/icons/13.svg"
          alt="Company Logo"
          css={styles.logo}
        />
      </header>
      <section css={styles.titleSection}>
        <h1 css={styles.title}>Challenge Details</h1>
      </section>
      <form css={styles.form}>
        <TextInput
          label="Challenge Name"
          value="Data Sprint 72 - Butterfly Identification"
        />
        <DateInput label="Start Date" value="17th Jun'22 09:00 PM" />
        <DateInput label="End Date" value="21st Jun'22 11:00 PM" />
        <TextArea
          label="Description"
          value="Identify the class to which each butterfly belongs to"
        />
        <ImageUpload label="Image" />
        <LevelTypeSelect label="Level Type" value="Easy" />
        <button css={styles.submitButton} onClick={handleSaveClick} type="submit">
          Save Changes
        </button>
      </form>
    </main>
  );
};

const styles = {
  main: css`
    background-color: #fff;
    display: flex;
    padding-bottom: 52px;
    flex-direction: column;
    overflow: hidden;
  `,
  header: css`
    background-color: #fff;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 13px 80px;
    @media (max-width: 991px) {
      max-width: 100%;
      padding: 0 20px;
    }
  `,
  logo: css`
    aspect-ratio: 2.29;
    object-fit: contain;
    object-position: center;
    width: 87px;
  `,
  titleSection: css`
    background-color: #f8f9fd;
    width: 100%;
    overflow: hidden;
    padding: 39px 70px;
    @media (max-width: 991px) {
      max-width: 100%;
      padding: 0 20px;
    }
  `,
  title: css`
    color: #000;
    font: 700 24px Inter, sans-serif;
  `,
  form: css`
    display: flex;
    width: 817px;
    max-width: 100%;
    flex-direction: column;
    align-items: flex-start;
    color: #333;
    margin: 33px 0 0 89px;
    font: 500 16px Inter, sans-serif;
  `,
  submitButton: css`
    align-self: stretch;
    border-radius: 10px;
    background: var(--dphigreen, #44924c);
    margin-top: 46px;
    min-height: 46px;
    font-size: 18px;
    color: var(--white, #fff);
    text-align: center;
    line-height: 1;
    padding: 13px 18px;
    border: none;
    cursor: pointer;
    @media (max-width: 991px) {
      margin-top: 40px;
    }
  `,
};

export default ChallengeDetails;
