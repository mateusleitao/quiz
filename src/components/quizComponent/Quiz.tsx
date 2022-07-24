import React from "react";
import "./quiz.sass";
import cardImg from "../../assets/progCard.png"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

type Props = {

};

const Quiz = (props: Props) => {
  return (
    <motion.div className="container"
     initial={{opacity:0}}
     animate={{opacity:1}}
     exit={{opacity:0}}
    >
      <div className="quiz-grid">
        <div className="card">
          <img src={cardImg}alt="cardImage" width="900px"/>
          <h2 className="cardTitle">Web Development</h2>
          <p></p>
          <Link to="/b"className="answerButton">Answer</Link>
        </div>  
      </div>
    </motion.div>
  );
};

export default Quiz;
