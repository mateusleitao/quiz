import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./answer.sass";




const AnswerComponent = () => {

  const [questionIndex, setQuestionIndex] = useState(0)
  const [ask, setAsk] = useState("")
  const [answers, setAnswers] = useState([""])
  const [scorePoints, setScorePoints] = useState(0)
  const [showScorePoints, setShowScorePoints] = useState(false)

  const asksAndAnswers: { ask: string; answer: string[] }[] = [
    {
      ask: "What does HTML stand for?",
      answer: [
        "A - Hyper Tag Markup Language",
        "B - Hyper Text Markup Language",
        "C - Hyperlinks Text Mark Language",
        "D - Hyperlinking Text Marking Language",
      ],
    },
    {
      ask: "What symbol indicates a tag?",
      answer: [
        "A - Angle brackets e.g.",
        "B - Curved brackets e.g. {,}",
        "C - Commas e.g. ','",
        "D - Exclamation marks e.g. !",
      ],
    },
    {
      ask: "Which of these is a genuine tag keyword?",
      answer: ["A - Header", "B - Bold", "C - Body", "D - Image"],
    },
    {
      ask: "What is the correct tag for a line break?",
      answer: ['A - "brk /"', 'B - "line /"', 'C - "bk /"', 'D - "br /"'],
    },
    {
      ask: "What does CSS stand for?",
      answer: [
        "A - Computing Style Sheet",
        "B - Creative Style System",
        "C - Cascading Style Sheet",
        "D - Creative Styling Sheet",
      ],
    },
    {
      ask: "0",
      answer: [
        "a",
        "b",
        "c",
        "d",
      ]
    }
  ];

  function answerTheQuestion(e: React.MouseEvent<HTMLElement>) {
    setQuestionIndex(questionIndex + 1)
    const answerButtonClick = (e.target as HTMLButtonElement).textContent
    if (answerButtonClick == String(asksAndAnswers[0].answer[1])) {
      setScorePoints(scorePoints + 1)
    } else if (answerButtonClick === String(asksAndAnswers[1].answer[1])) {
      setScorePoints(scorePoints + 1)
    } else if (answerButtonClick === String(asksAndAnswers[2].answer[3])) {
      setScorePoints(scorePoints + 1)
    } else if (answerButtonClick === String(asksAndAnswers[3].answer[3])) {
      setScorePoints(scorePoints + 1)
    } else if (answerButtonClick === String(asksAndAnswers[4].answer[2])) {
      setScorePoints(scorePoints + 1)
    }
  }

  function shouldShowScore() {
    if (questionIndex == 5) {
      setShowScorePoints(true)
    }
  }
  console.log(questionIndex)

  useEffect(() => {
    setAsk(asksAndAnswers[questionIndex].ask)
    setAnswers(asksAndAnswers[questionIndex].answer)
    shouldShowScore()
  }, [questionIndex])






  return (
    <motion.div
      className="container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      {showScorePoints
        ?
        <div className="card card-quiz">
          <h2 className="quizTitle">Your score is: </h2>
          <main className="score"><h1>{scorePoints}</h1></main>
          <button onClick={() => { setScorePoints(0), setQuestionIndex(0), setShowScorePoints(false) }}>Answer again</button>

        </div>
        :
        <div className="card card-quiz">
          <h2 className="quizTitle">{ask}</h2>
          <main className="quiz">
            <button onClick={answerTheQuestion} className="answer">{answers[0]}</button>
            <button onClick={answerTheQuestion} className="answer">{answers[1]}</button>
            <button onClick={answerTheQuestion} className="answer">{answers[2]}</button>
            <button onClick={answerTheQuestion} value="finish" className="answer">{answers[3]}</button>
          </main>
        </div>
      }
    </motion.div>
  );
};

export default AnswerComponent;
