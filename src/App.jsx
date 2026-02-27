import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import { PlannerProvider } from "./context/PlannerContext.jsx";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Planner from "./pages/Planner.jsx";

function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <PlannerProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/planner"
              element={
                <PrivateRoute>
                  <Planner />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </PlannerProvider>
    </AuthProvider>
  );
}

