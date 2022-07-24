import React from "react";
import "./quiz.sass";
import cardImg from "../../assets/progCard.png"

type Props = {

};

const Quiz = (props: Props) => {
  return (
    <div className="container">
      <div className="quiz-grid">
        <div className="card">
          <img src={cardImg}alt="cardImage" width="900px"/>
          <h2 className="cardTitle">Web Development</h2>
          <p></p>
          <a href="#" className="answerButton">Answer</a>
        </div>  
      </div>
    </div>
  );
};

export default Quiz;
