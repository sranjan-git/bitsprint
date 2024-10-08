/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type ImageCardProps = {
  imgSrc: string;
  imgAlt: string;
  statusText: string;
  title: string;
  dateText: string;
  buttonText: string;
  buttonIconSrc: string;
};

const ImageCard: React.FC<ImageCardProps> = ({
  imgSrc,
  imgAlt,
  statusText,
  title,
  dateText,
  buttonText,
  buttonIconSrc,
}) => {
  return (
    <article
      css={css`
        border-radius: 15px;
        box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.08);
        background-color: #fff;
        display: flex;
        margin-top: 50px;
        width: 354px;
        max-width: 100%;
        padding-bottom: 27px;
        flex-direction: column;
        align-items: center;
      `}
    >
      <img
        loading="lazy"
        src={imgSrc}
        alt={imgAlt}
        css={css`
          aspect-ratio: 2.02;
          object-fit: contain;
          object-position: center;
          width: 100%;
        `}
      />
      <div
        css={css`
          border-radius: 5px;
          background-color: rgba(255, 60, 0, 0.17);
          margin-top: 24px;
          width: 87px;
          color: rgba(102, 102, 102, 1);
          white-space: nowrap;
          text-align: center;
          padding: 2px 32px 10px;
          font-size: 12px;
          line-height: 1;
        `}
      >
        {statusText}
      </div>
      <div
        css={css`
          color: rgba(0, 0, 0, 1);
          font-size: 16px;
          line-height: 26px;
          text-align: center;
          margin-top: 21px;
          width: 246px;
        `}
      >
        {title}
      </div>
      <div
        css={css`
          color: rgba(68, 68, 68, 1);
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
          text-align: center;
          margin-top: 29px;
        `}
      >
        Ends on
      </div>
      <div
        css={css`
          color: rgba(69, 69, 69, 1);
          font-size: 18px;
          line-height: 2;
          margin-top: 23px;
        `}
      >
        {dateText}
      </div>
      <div
        role="button"
        tabIndex={0}
        css={css`
          border-radius: 10px;
          background-color: rgba(68, 146, 76, 1);
          display: flex;
          margin-top: 43px;
          width: 183px;
          max-width: 100%;
          gap: 14px;
          font-size: 14px;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 1;
          padding: 12px 16px;
        `}
      >
        <img
          loading="lazy"
          src={buttonIconSrc}
          alt=""
          css={css`
            aspect-ratio: 1;
            object-fit: contain;
            object-position: center;
            width: 18px;
          `}
        />
        <div
          css={css`
            flex-grow: 1;
            width: 115px;
          `}
        >
          {buttonText}
        </div>
      </div>
    </article>
  );
};

export default ImageCard;
