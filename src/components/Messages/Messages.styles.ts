import styled from 'styled-components';

export const StyledMessagesContainer = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  padding: 1rem;
  overflow: auto;
  height: 200px;
  width: 550px;
  background-color: #f1f1f1;
  color: #555;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;

    &:hover {
      background: #555;
    }
  }
`;
