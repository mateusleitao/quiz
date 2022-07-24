import { useState } from "react";
import Header from "./components/headerComponent/Header"
import Quiz from "./components/quizComponent/Quiz";
import Footer from "./components/footerComponent/Footer";


function App() {
 

  return (
    <div className="App">
      <Header/>
      <Quiz/>
      <Footer/>
    </div>
  );
}

export default App;
