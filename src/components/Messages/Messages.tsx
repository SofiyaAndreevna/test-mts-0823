import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './Messages.scss';

const Messages: React.FC = () => {
  const messages = useSelector((state: RootState) => state.timer.messages);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="messages-container">
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default Messages;
