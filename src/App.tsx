import React from 'react';
import Login from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signup';
import { ProtectedRoute } from './hooks/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute isAuthenticated={true}>
                <Home />
              </ProtectedRoute>
            }
            path="/"
          />
          <Route Component={Login} path={'/login'} />
          <Route Component={SignUp} path={'/sign-up'} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
