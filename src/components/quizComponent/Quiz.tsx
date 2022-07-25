import React from "react";
import "./quiz.sass";
import cardImg from "../../assets/progCard.png"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

type Props = {

};

const Quiz = (props: Props) => {
  const parent = {
    variantA: { scale: 1 },
    variantB: { scale: 1.25}
  }
  return (
    <div className="container">
      <div className="quiz-grid">
        <div className="card">
          <img src={cardImg}alt="cardImage" width="900px"/>
          <h2 className="cardTitle">Web Development</h2>
          <p></p>
          <Link to="/quiz/b"className="answerButton">Answer</Link>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};


export default Quiz;
