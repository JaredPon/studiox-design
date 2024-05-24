import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./components/Page";
import { Home } from "./views/Home";
import { CrossReference } from "./views/Crossreference";

import "./index.css";
import { Contact } from "./views/Contact";
import { Gallery } from "./views/Gallery";

const root = createRoot(document.getElementById("root")!);

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <Home />
            </Page>
          }
        />
        <Route
          path="/gallery"
          element={
            <Page>
              <Gallery />
            </Page>
          }
        />
        <Route
          path="/contact"
          element={
            <Page>
              <Contact />
            </Page>
          }
        />
        <Route
          path="/crossreference"
          element={
            <Page>
              <CrossReference />
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
