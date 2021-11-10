import React, { useEffect } from "react";
import Questions from "./Questions";

export default function Quiz() {
  const [questions, setQuestions] = React.useState({
    question: "",
    answers: []
  });
  const [answersClass, setAnswerClass] = React.useState(["", "", "", ""]);
  const [valid, setValid] = React.useState(false);
  const [num, setNum] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);

  const validQuestion = (reponse) => {
    console.log(reponse);
    //setQuestion(questions[1]);
    setValid(true);
  };

  useEffect(() => {
    const questions = Questions.filter((quest) => quest.type === "sort");
    const myQuestions = {
      correct: questions[num].correct_answer,
      question: questions[num].question,
      answers: toggleanswer([
        questions[num].correct_answer,
        ...questions[num].incorrect_answers
      ])
    };
    console.log(myQuestions);
    setQuestions(myQuestions);
  }, [num]);

  const toggleanswer = (reponses) => {
    //melagnge un tableau
    return reponses;
  };

  const checkedResponse = (answer, index) => {
    if (valid === false) {
      let array = [...answersClass];
      if (answer === questions.correct) {
        array[index] = "btn-success";
        setCorrectAnswers(correctAnswers + 1);
      } else {
        array[index] = "btn-alert";
      }
      setAnswerClass(array);
      setValid(true);
    }
  };

  const changeQuestions = () => {
    let index = num + 1;
    setNum(index);
    setValid(false);
    setAnswerClass(["", "", "", ""]);
  };

  return (
    <div>
      <h1>Question : {questions.question}</h1>
      <ul>
        {questions.answers.map((answer, index) => (
          <li>
            <button
              className={answersClass[index]}
              onClick={() => checkedResponse(answer, index)}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
      {valid ? <button onClick={() => changeQuestions()}>NEXT</button> : false}
      {correctAnswers}
    </div>
  );
}
