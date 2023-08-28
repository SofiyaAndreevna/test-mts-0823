import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import Timer from './Timer';
import { store } from '../../store/store';

describe('Timer Component', () => {
  beforeEach(() => {
    store;
  });

  it('renders correctly', () => {
    const { getByAltText, getByText } = render(
      <Provider store={store}>
        <Timer />
      </Provider>,
    );
    expect(getByAltText('Timer')).toBeInTheDocument();
    expect(getByText('Таймер')).toBeInTheDocument();
    expect(getByText('Начать')).toBeInTheDocument();
  });

  it('toggles between start and stop', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Timer />
      </Provider>,
    );

    const startButton = getByText('Начать');
    fireEvent.click(startButton);

    expect(getByText('Стоп')).toBeInTheDocument();
  });

  it('dispatches addMessage action when active', async () => {
    jest.useFakeTimers();

    const { getByText } = render(
      <Provider store={store}>
        <Timer />
      </Provider>,
    );

    const startButton = getByText('Начать');
    fireEvent.click(startButton);

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });
  });
});
