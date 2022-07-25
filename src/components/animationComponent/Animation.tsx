import React from "react";
import Home from "../../pages/Home";
import Answer from "../../pages/Answer";
import { AnimatePresence } from "framer-motion";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

type Props = {};

const Animation = (props: Props) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/quiz" element={<Home />}></Route>
        <Route path="/quiz/b" element={<Answer />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Animation;
