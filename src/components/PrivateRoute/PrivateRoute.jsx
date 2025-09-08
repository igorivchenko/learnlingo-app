import { ROUTES } from '@/constants';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = ROUTES.HOME }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
