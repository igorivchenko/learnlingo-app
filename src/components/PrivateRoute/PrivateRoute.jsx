import { ROUTES } from '@/constants';
import { selectIsAuth } from '@/redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = ROUTES.HOME }) => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
