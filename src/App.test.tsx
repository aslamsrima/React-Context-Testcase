import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';
import ThemeProvider from './context/provider/ThemeProvider';
import { useTheme } from './context/ThemeContext';

jest.mock('./context/ThemeContext', () => ({
  ...jest.requireActual('./context/ThemeContext'),
  useTheme: jest.fn(),
}));

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders App component', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', setTheme: jest.fn(), toggleTheme: jest.fn() });

    const screen = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );

    expect(document.querySelector('.AppHeader')).toBeInTheDocument();
    expect(document.querySelector('.AppLogo')).toBeInTheDocument();

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('snapshot test', async () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', setTheme: jest.fn(), toggleTheme: jest.fn() });

    const app = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );
    expect(app).toMatchSnapshot();
  });

  it('renders App component with light theme', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', setTheme: jest.fn(), toggleTheme: jest.fn() });

    const { getByText } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );

    expect(getByText('Learn React light')).toBeInTheDocument();
  });

  it('calls setTheme with light theme on "Light" button click', () => {
    const setThemeMock = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', setTheme: setThemeMock, toggleTheme: jest.fn() });

    const { getByText } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );

    fireEvent.click(getByText('Light'));

    expect(setThemeMock).toHaveBeenCalledWith('light');
  });

  it('calls setTheme with dark theme on "Dark" button click', () => {
    const setThemeMock = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', setTheme: setThemeMock, toggleTheme: jest.fn() });

    const { getByText } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );

    fireEvent.click(getByText('Dark'));

    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });

  it('calls toggleTheme on "Change Theme" button click', () => {
    const toggleThemeMock = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', setTheme: jest.fn(), toggleTheme: toggleThemeMock });

    const { getByText } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );

    fireEvent.click(getByText('Change Theme'));

    expect(toggleThemeMock).toHaveBeenCalled();
  });
});
