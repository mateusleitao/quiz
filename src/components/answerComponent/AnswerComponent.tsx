import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./answer.sass";




const AnswerComponent = () => {

  const [showScore, setShowScore] = useState(false)

  const askAndAnswer: { text: string; answer: string[] }[] = [
    {
      text: "What does HTML stand for?",
      answer: [
        "A - Hyper Tag Markup Language",
        "B - Hyper Text Markup Language",
        "C - Hyperlinks Text Mark Language",
        "D - Hyperlinking Text Marking Language",
      ],
    },
    {
      text: "What symbol indicates a tag?",
      answer: [
        "A - Angle brackets e.g.",
        "B - Curved brackets e.g. {,}",
        "C - Commas e.g. ','",
        "D - Exclamation marks e.g. !",
      ],
    },
    {
      text: "Which of these is a genuine tag keyword?",
      answer: ["A - Header", "B - Bold", "C - Body", "D - Image"],
    },
    {
      text: "What is the correct tag for a line break?",
      answer: ['A - "brk /"', 'B - "line /"', 'C - "bk /"', 'D - "br /"'],
    },
    {
      text: "What does CSS stand for?",
      answer: [
        "A - Computing Style Sheet",
        "B - Creative Style System",
        "C - Cascading Style Sheet",
        "D - Creative Styling Sheet",
      ],
    },
  ];
  return (
    <motion.div
      className="container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <div className="card card-quiz">
        <h2 className="quizTitle">{}</h2>
        <main className="quiz">
          <button className="answer"></button>
          <button className="answer"></button>
          <button className="answer"></button>
          <button className="answer"></button>
        </main>
      </div>
    </motion.div>
  );
};

export default AnswerComponent;
