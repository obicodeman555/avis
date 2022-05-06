import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components";

const Homepage = React.lazy(() => import("./pages/homepage/Homepage"));
const AdminLoginPage = React.lazy(() =>
  import("./pages/auth/admin/AdminLogin")
);
const GuestLoginPage = React.lazy(() => import("./pages/auth/guest/Login"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth/admin" element={<AdminLoginPage />} />
        <Route path="/auth/guest" element={<GuestLoginPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
