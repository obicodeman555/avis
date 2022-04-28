import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components";

const Homepage = React.lazy(() => import("./pages/homepage/Homepage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
