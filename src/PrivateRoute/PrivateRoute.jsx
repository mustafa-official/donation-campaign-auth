import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center min-h-[calc(100vh-96px)] items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
