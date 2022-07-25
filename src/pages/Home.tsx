import React from "react";
import Header from "../components/headerComponent/Header"
import Quiz from "../components/quizComponent/Quiz"
import Footer from "../components/footerComponent/Footer"
type Props = {}; 

function Home({}: Props) {
  return (
    <div>
     
      <Quiz />
      <body />
    </div>
  );
}

export default Home;
