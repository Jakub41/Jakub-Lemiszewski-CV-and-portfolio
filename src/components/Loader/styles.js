import styled, { keyframes } from "styled-components";

const FontAnim = keyframes`
  0%{ width:7ch; }
  16%{ width:8ch; }
  32%{ width:9ch; }
  48%{ width:10ch; }
  64%{ width:11ch; }
  80%{ width:12ch; }
  100% { width:13ch;}
`;

const HeadAnim = keyframes`
  0%{ top:0px; }
  50%{ top:10px; }
  100% { top:0px;}
`;

const BodyAnim = keyframes`
  0%{ top:-5px; }
  50%{ top:10px; }
  100% { top:-5px;}
`;

export const LoaderMain = styled.div`
  -webkit-backface-visibility: hidden;
  margin: 60px auto;
  width: 180px;
  height: 180px;
  border-radius: 0px 0px 50px 50px;
  position: relative;
  z-index: -1;
  left: 0%;
  top: 20%;
  overflow: hidden;
`;

export const Load = styled.div`
  position: absolute;
  width: 7ch;
  height: 32px;
  text-align: left;
  line-height: 32px;
  margin: -10px auto;
  -webkit-font-smoothing: antialiased;
  font-family: "Julius Sans One", sans-serif;
  font-size: 28px;
  font-weight: 400;
  color: rgba(240, 220, 220, 1);
  left: 2%;
  top: 5%;
  -webkit-animation: ${FontAnim} 3.75s infinite;
  -webkit-animation-timing-function: ease-out;
  word-wrap: break-word;
  display: block;
  overflow: hidden;
`;

export const Hands = styled.div`
  -webkit-backface-visibility: hidden;
  margin-top: 140px;
  width: 120px;
  height: 120px;
  position: absolute;
  background-color: #111;
  border-radius: 20px;
  box-shadow: -1px -4px 0px 0px rgba(240, 220, 220, 1);
  -webkit-transform: rotate(45deg);
  top: 75%;
  left: 16%;
  z-index: 1;
  -webkit-animation: ${BodyAnim} 1.5s infinite alternate;
  -webkit-animation-timing-function: ease-out;
`;

export const Body = styled.div`
  position: relative;
  margin: 90px auto;
  width: 140px;
  height: 120px;
  background-color: #111;
  border-radius: 50px/25px;
  box-shadow: inset -5px 2px 0px 0px rgba(240, 220, 220, 1);
  -webkit-animation: ${BodyAnim} 1.5s infinite alternate;
  -webkit-animation-timing-function: ease-out;
`;

export const Head = styled.div`
  -webkit-backface-visibility: hidden;
  position: relative;
  margin: -250px auto;
  width: 80px;
  height: 80px;
  background-color: #111;
  border-radius: 50px;
  box-shadow: inset -4px 2px 0px 0px rgba(240, 220, 220, 1);
  -webkit-animation: ${HeadAnim} 1.5s infinite alternate;
  -webkit-animation-timing-function: ease-out;
`;

export const Eye = styled.div`
  width: 20px;
  height: 8px;
  background-color: rgba(240, 220, 220, 1);
  border-radius: 0px 0px 20px 20px;
  position: relative;
  left: 10px;
  top: 40px;
  box-shadow: 40px 0px 0px 0px rgba(240, 220, 220, 1);
`;
