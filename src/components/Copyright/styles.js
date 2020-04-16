import styled from "styled-components";

export const CopySpan = styled.span`
  font-size: 1.2rem;
  color: red;
  margin: 0 0 10px 10px;
`;

export const CopyMobile = styled.span`
  @media (max-width: 640px) {
    font-size: 1.2rem;
    color: red;
    margin: 0 20%;
  }
`;
