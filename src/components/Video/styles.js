import styled from "styled-components";

export const VideoDiv = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 400px;
`;

export const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const PortfolioCard = styled.li`
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  border: 1px solid white;
  width: 400px;
  @media (max-width: 680px) {
    width: 100%;
    height: auto;
  }
`;
