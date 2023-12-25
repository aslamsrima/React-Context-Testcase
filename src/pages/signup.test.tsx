import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useTheme } from '../context/ThemeContext';
import ThemeProvider from '../context/provider/ThemeProvider';
import { act } from 'react-dom/test-utils';
import SignUp from './signup';

jest.mock('../context/ThemeContext', () => ({
  ...jest.requireActual('../context/ThemeContext'),
  useTheme: jest.fn(),
}));

jest.mock('../services/mockAPIs', () => ({
  mockSignUp: jest.fn(),
}));

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('snapshot test', async () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', setTheme: jest.fn(), toggleTheme: jest.fn() });

    const app = render(
      <ThemeProvider>
        <SignUp />
      </ThemeProvider>,
    );
    expect(app).toMatchSnapshot();
  });

  test('Login component renders and submits form with validation error', async () => {
    const app = render(
      <ThemeProvider>
        <SignUp />
      </ThemeProvider>,
    );
    fireEvent.click(app.getByText('Login'));

    await waitFor(() => {
      expect(require('../services/mockAPIs').mockSignUp).toHaveBeenCalledTimes(0);
    });
  });

  test('Login component renders and submits form with mock API call', async () => {
    const app = render(
      <ThemeProvider>
        <SignUp />
      </ThemeProvider>,
    );
    act(() => {
      userEvent.type(app.getByPlaceholderText('John Doe'), 'tom latham');
      userEvent.type(app.getByPlaceholderText('info@mailaddress.com'), 'test@example.com');
      userEvent.type(app.getByPlaceholderText('••••••••••••'), 'password123');
    });
    fireEvent.click(app.getByText('Register'));

    await waitFor(() => {
      expect(require('../services/mockAPIs').mockSignUp).toHaveBeenCalledWith({
        name: 'tom latham',
        email: 'test@example.com',
        password: 'password123',
      });
      expect(require('../services/mockAPIs').mockSignUp).toHaveBeenCalledTimes(1);
    });
  });
});
