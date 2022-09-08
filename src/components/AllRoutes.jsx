import { Routes, Route } from "react-router-dom";
import { Admin } from "../Pages/Admin";
import { Assignment } from "../Pages/Assignment";
import { Lectures } from "../Pages/Lectures";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { ProtectedRoute } from "./Context/ProtectedRoute";

export const AllRoutes = ({children}) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
           </ProtectedRoute>
        }
      />
      <Route path="/lectures" element={<Lectures />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/assignment" element={<Assignment />} />
    </Routes>
  );
};
