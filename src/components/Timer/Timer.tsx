import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/timerSlice';
import './Timer.scss';

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
    <div className="mb-3 timer__container">
      <div>
        <img src="/icons8-timer-96.png" alt="Timer" />
        <h2>Таймер</h2>
      </div>
      <div className="timer__container-btn">
        <button
          className={`btn ${isActive ? 'btn-danger' : 'btn-primary'}`}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? (
            <img src="/icons8-stop-50.png" alt="Btn Stop" />
          ) : (
            <img src="/icons8-start-50.png" alt="Btn Play" />
          )}
          {isActive ? 'Стоп' : 'Начать'}
        </button>
      </div>
    </div>
  );
};

export default Timer;
