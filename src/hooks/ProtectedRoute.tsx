import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, isAuthenticated }: any) => {
  console.log('isAuthenticated', isAuthenticated);
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to={'/'} />;
  }
};
