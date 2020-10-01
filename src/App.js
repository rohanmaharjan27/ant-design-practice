import React, { lazy, Suspense } from "react";
import "./App.less";
import { BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./Route";

const Homepage = lazy(() => import("./pages/homepage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"loading..."}>
        <Route exact path={ROUTES.Homepage} component={Homepage} />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
