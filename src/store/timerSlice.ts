import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  messages: string[];
}

const initialState: TimerState = {
  messages: [
    'Привет! Это таймер для отправления тестовых сообщений, нажми "Старт" для начала',
  ],
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = timerSlice.actions;

export default timerSlice.reducer;
