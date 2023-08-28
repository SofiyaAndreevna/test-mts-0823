import styled, { keyframes } from 'styled-components';

const TransitionColor = keyframes`
0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const AppContainer = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${TransitionColor} 15s ease infinite;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`;
