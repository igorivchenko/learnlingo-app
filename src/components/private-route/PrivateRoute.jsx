// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn } from '../../../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
