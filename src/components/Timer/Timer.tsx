import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/timerSlice';

import { Button, ButtonContainer, HeaderContainer } from './Timer.styles';

const Timer: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isActive) {
      interval = setInterval(() => {
        dispatch(
          addMessage(`Новое сообщение в ${new Date().toLocaleTimeString()}`),
        );
      }, 3000);
    } else if (!isActive) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, dispatch]);

  return (
    <HeaderContainer>
      <img src="/icons8-timer-96.png" alt="Timer" />
      <h2>Таймер</h2>
      <ButtonContainer>
        {isActive ? (
          <Button onClick={() => setIsActive(!isActive)}>
            <img src="/icons8-stop-50.png" alt="Btn Stop" />
            Стоп
          </Button>
        ) : (
          <Button primary onClick={() => setIsActive(!isActive)}>
            <img src="/icons8-start-50.png" alt="Btn Play" />
            Начать
          </Button>
        )}
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Timer;
