import { useState } from "react";
import Header from "./components/headerComponent/Header";
import Home from "./pages/Home";
import Quiz from "./components/quizComponent/Quiz";
import Footer from "./components/footerComponent/Footer";
import Answer from "./pages/Answer"
import Animation from "./components/animationComponent/Animation";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <Animation />  
    <Footer />
    </>
);
}

export default App;
