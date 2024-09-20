import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../../Context/authContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(authContext);

  const accessibleRoute = token ? children : <Navigate to="/" replace={true} />;
  return accessibleRoute;
};
export default ProtectedRoute;
