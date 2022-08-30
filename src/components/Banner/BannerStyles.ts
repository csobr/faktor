import { css } from '@emotion/css';

export let closeBanner: boolean;

export const BannerContainer = css`
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  z-index: 2;
  align-items: center;
  flex-direction: column;
  background-color: #0e171f;

  animation-duration: 1s;
  @media (max-width: 768px) {
    margin-top: -3rem;
  }
`;

export const ButtonContainerClass = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 35rem;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 30rem;
  }
`;
export const TextClass = css`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  padding-bottom: 3rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
