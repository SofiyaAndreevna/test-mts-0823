import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { StyledMessagesContainer } from './Messages.styles';

const Messages: React.FC = () => {
  const messages = useSelector((state: RootState) => state.timer.messages);
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      Array.from(containerRef.current.children)
        .at(-1)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <StyledMessagesContainer ref={containerRef}>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </StyledMessagesContainer>
  );
};

export default Messages;
