/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface ImageUploadProps {
  label: string;
  onChange: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label, onChange }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    onChange(file);
  };

  return (
    <div css={styles.container}>
      <label css={styles.label} htmlFor="image-upload">
        {label}
      </label>
      <div css={styles.uploadArea}>
        <input
          type="file"
          id="image-upload"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64a043d91ac07120c0d85b178846a597d31b41a1297c2faa80e30b4a1efd65ab?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
            alt="Uploaded image preview"
            css={styles.previewImage}
          />
          <div css={styles.changeImageWrapper}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a884af60445a71ddc583de0613fc6549853369a8ec80a4133e41028ef9582754?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
              alt=""
              css={styles.changeIcon}
            />
            <span css={styles.changeText}>Change image</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1498a490294a9bc8509401bd79ddc0ff69c7227e15380694ef82bcddd434d57?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
              alt=""
              css={styles.arrowIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: css`
    margin-top: 44px;
    @media (max-width: 991px) {
      margin-top: 40px;
    }
  `,
  label: css`
    display: block;
    margin-bottom: 25px;
  `,
  uploadArea: css`
    border-radius: 10px;
    background-color: #f8f9fd;
    display: flex;
    width: 297px;
    max-width: 100%;
    flex-direction: column;
    font-size: 14px;
    color: var(--dphigreen, #44924c);
    padding: 26px 21px;
    border: 1px solid #f8f9fd;
    @media (max-width: 991px) {
      padding: 0 20px;
    }
  `,
  previewImage: css`
    aspect-ratio: 2.04;
    object-fit: contain;
    object-position: center;
    width: 100%;
    border-radius: 15px;
  `,
  changeImageWrapper: css`
    display: flex;
    margin-top: 28px;
    gap: 7px;
    align-items: center;
  `,
  changeIcon: css`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 15px;
  `,
  changeText: css`
    flex-grow: 1;
  `,
  arrowIcon: css`
    aspect-ratio: 1.2;
    object-fit: contain;
    object-position: center;
    width: 12px;
  `,
};

export default ImageUpload;
