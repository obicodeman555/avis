import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Loading } from "../components";

const Homepage = React.lazy(() => import("../pages/homepage/Homepage"));
const AdminLoginPage = React.lazy(() =>
  import("../pages/auth/admin/AdminLogin")
);
const GuestLoginPage = React.lazy(() => import("../pages/auth/guest/Login"));

const GuestHomepage = React.lazy(() =>
  import("../pages/guestHomepage/GuestHomepage")
);

const ContentManagement = React.lazy(() =>
  import("../pages/content-management/ContentManagement")
);

const Home = React.lazy(() =>
  import("../pages/content-management/components/home/Home")
);
const Staffs = React.lazy(() =>
  import("../pages/content-management/components/staffs/Staffs")
);

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth/admin/login" element={<AdminLoginPage />} />
        <Route path="/auth/guest/login" element={<GuestLoginPage />} />
        <Route path="/guest/home" element={<GuestHomepage />} />
        <Route path="content-management" element={<ContentManagement />}>
          <Route
            path="/content-management"
            element={<Navigate replace to="home" />}
          />
          <Route path="home" element={<Home />} />
          <Route path="staffs" element={<Staffs />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
