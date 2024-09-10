/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

const ChallengeFilter: React.FC = () => {
  return (
    <aside css={styles.filterContainer}>
      <form css={styles.searchForm}>
        <label htmlFor="searchChallenges" className="visually-hidden">
          Search for challenges
        </label>
        <input
          type="text"
          id="searchChallenges"
          placeholder="Search for challenges"
          css={styles.searchInput}
          aria-label="Search for challenges"
        />
        <button type="submit" css={styles.searchButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7a14db3bcd15ed632aeece7ac10579cf25b931cd86711c1d1654b314618a31c?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
            alt="Search"
            css={styles.searchIcon}
          />
        </button>
      </form>
      <div css={styles.filterOptions}>
        <h3 css={styles.filterTitle}>Filter</h3>
        <label htmlFor="filterStatus" css={styles.filterLabel}>
          Status
        </label>
        <select id="filterStatus" css={styles.filterSelect} aria-label="Filter by status">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>
        <label htmlFor="filterLevel" css={styles.filterLabel}>
          Level
        </label>
        <select id="filterLevel" css={styles.filterSelect} aria-label="Filter by level">
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </aside>
  );
};

const styles = {
  filterContainer: css`
    background-color: #fff;
    border-radius: 15px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 6px 12px rgba(221, 230, 237, 0.3);
    margin-right: 20px;
    @media (max-width: 991px) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  `,
  searchForm: css`
    display: flex;
    margin-bottom: 25px;
  `,
  searchInput: css`
    padding: 12px 19px;
    font-size: 16px;
    border: 1px solid #eaeaea;
    border-radius: 12px 0 0 12px;
    flex-grow: 1;
    @media (max-width: 991px) {
      padding: 12px 15px;
    }
  `,
  searchButton: css`
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-left: none;
    border-radius: 0 12px 12px 0;
    padding: 12px 19px;
    cursor: pointer;
    @media (max-width: 991px) {
      padding: 12px 15px;
    }
  `,
  searchIcon: css`
    width: 17px;
    height: 17px;
    object-fit: contain;
  `,
  filterOptions: css`
    width: 100%;
    text-align: left;
  `,
  filterTitle: css`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  `,
  filterLabel: css`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  `,
  filterSelect: css`
    width: 100%;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    margin-bottom: 16px;
  `,
};

export default ChallengeFilter;
