import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Header from "./header";
import { Item } from "./items";
import { List } from "./list";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function Framer() {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route path={["/:id", "/"]} component={Store} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}