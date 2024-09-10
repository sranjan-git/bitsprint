/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Header from "../components/Admin/Header";
import InputField from "../components/Admin/InputField";
import DatePicker from "../components/Admin/DatePicker";
import TextArea from "../components/Admin/TextArea";
import ImageUpload from "../components/Admin/ImageUpload";
import LevelType from "../components/Admin/LevelType";
import Button from "../components/Admin/Button";
import { useNavigate } from "react-router-dom";

const containerStyles = css`
  background-color: #ffffff;
  display: flex;
  padding-bottom: 67px;
  flex-direction: column;
  overflow: hidden;
`;

const titleStyles = css`
  background-color: #f8f9fd;
  width: 100%;
  overflow: hidden;
  color: #000000;
  padding: 39px 70px;
  font: 700 24px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const formStyles = css`
  display: flex;
  width: 817px;
  max-width: 100%;
  flex-direction: column;
  align-items: start;
  color: #333;
  margin: 33px 0 0 89px;
  font: 500 16px Inter, sans-serif;
`;

const errorStyles = css`
  color: red;
  margin-top: 10px;
`;

const Admin: React.FC = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [challengeName, setChallengeName] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [level, setLevel] = useState<string>("");
  const [error, setError] = useState<string>("");

  // State to manage challenges list
  const [challenges, setChallenges] = useState<any[]>(() => {
    // Initialize from localStorage if available
    const savedChallenges = localStorage.getItem("challenges");
    return savedChallenges ? JSON.parse(savedChallenges) : [];
  });

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!challengeName || !startDate || !endDate || !description || !image || !level) {
      setError("All fields are required!");
      return;
    }

    // Clear any existing error
    setError("");
    
    const newChallenge = {
      name: challengeName,
      startDate,
      endDate,
      description,
      image, 
      level,
    };
  
    // Save the challenge to state and localStorage
    const updatedChallenges = [...challenges, newChallenge];
    setChallenges(updatedChallenges);
  
    localStorage.setItem('challenges', JSON.stringify(updatedChallenges)); // Save to localStorage
  
    console.log("Challenge Created:", newChallenge);

    // Navigate to the home page (or another page as needed)
    navigate("/home");
  };

  return (
    <main css={containerStyles}>
      <Header />
      <h1 css={titleStyles}>Challenge Details</h1>
      <form css={formStyles} onSubmit={handleCreate}>
        <InputField
          label="Challenge Name"
          value={challengeName}
          onChange={(e) => setChallengeName(e.target.value)}
        />
        <DatePicker
          label="Start Date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          label="End Date"
          selected={endDate} 
          onChange={(date) => setEndDate(date)}
        />
        <TextArea
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <ImageUpload
          label="Image"
          onChange={(file) => setImage(file)}
        />
        <LevelType
          label="Level"
          options={["Beginner", "Intermediate", "Advanced"]}
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        {error && <div css={errorStyles}>{error}</div>}
        <Button label="Create Challenge" type="submit" />
      </form>
    </main>
  );
};

export default Admin;
