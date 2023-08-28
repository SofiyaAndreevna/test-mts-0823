import styled from 'styled-components';
import { ButtonProps } from './types';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? 'blue' : 'red')};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? '#0056b3' : '#dc143c')};
  }

  img {
    width: 25px;
    height: 25px;
    margin: 0 2px;
  }
`;
