import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Page } from "./components/Page";
import { Home } from "./views/Home";
import { CrossReference } from "./views/Crossreference";
import { Contact } from "./views/Contact";
import { Gallery } from "./views/Gallery";
import { Playground } from "./views/Playground";

import "./index.css";

const root = createRoot(document.getElementById("root")!);

const App: React.FunctionComponent = () => {
  return (
    <HashRouter>
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
          path="/events"
          element={
            <Page>
              <Playground />
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
    </HashRouter>
  );
};

root.render(
  <div className="flex flex-col grow">
    <App />
  </div>
);
