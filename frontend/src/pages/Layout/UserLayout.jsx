import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function UserLayout() {
  const { connected } = useContext(AuthContext);

  if (!connected || connected.connected.role !== 0) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="Admin_container">
      <Outlet />
    </div>
  );
}

export default UserLayout;
