import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./components/navigation/Page";
import { Root } from "./components/views/Root";

import "./index.css";

const root = createRoot(document.getElementById("root")!);

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <Root />
            </Page>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <div className="flex flex-col grow">
    <App />
  </div>
);
