import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import "./Quizz.css";

export default function Quiz() {
  const [questions, setQuestions] = useState({
    question: "",
    answers: []
  });
  const [answersClass, setAnswerClass] = useState(["", "", "", ""]);
  const [canClickOnButton, setCanClickOnButton] = useState(false);
  const [num, setNum] = useState(0);
  const [point, setPoint] = useState(0);
  const [correct, setCorrect] = useState(false);

  const toggleanswer = (reponses) => reponses.sort(() => Math.random() - 0.5);

  /** Fonction permettant d'afficher le quiz en s'appuyant sur le dossier data Questions et en filtrant sur les sorts  */
  useEffect(() => {
    const questionsQ = Questions.filter((quest) => quest.type === "sort");
    const myQuestions = {
      correct: questionsQ[num].correct_answer,
      question: questionsQ[num].question,
      answers: toggleanswer([
        questionsQ[num].correct_answer,
        ...questionsQ[num].incorrect_answers
      ])
    };
    setQuestions(myQuestions);
  }, [num]);

  /**
   * function pour changer la class du button en fonction de la réponse
   * @param {string} answer récupère la réponse
   * @param {number} index permet de récupérer l'index de la réponse dans le tableau de choix
   */
  const checkedResponse = (answer, index) => {
    if (canClickOnButton === false) {
      const array = [...answersClass];
      if (answer === questions.correct) {
        array[index] = "btn-success";
        setPoint(point + 1);
        setCorrect(true);
      } else {
        array[index] = "btn-alert";
        setCorrect(false);
      }
      setCanClickOnButton(true);
      setAnswerClass(array);
    }
  };

  /**
   * function for change question
   */
  const changeQuestions = () => {
    const index = num + 1;
    setNum(index);
    setCanClickOnButton(false);
    setAnswerClass(["", "", "", ""]);
  };

  /**
 * fonction pour modifier les propositions en fonction de la réponse apportée
 */
  const solution = () => {
    if (point === 1 && correct && canClickOnButton) {
      return (<button type="button" className="buttonstart" onClick={() => changeQuestions()}>NEXT</button>);
    } if (point === 1 && !correct && canClickOnButton) {
      return (
        <div>
          <p className="quiz-p"> Answer is wrong. </p>
          <button type="button" className="buttonstart">Back to choose your lesson</button>
        </div>
      );
    }
    if (point === 2) {
      return (<button type="button" className="buttonstart">Get your sort</button>);
    } if (point === 0 && canClickOnButton && !correct) {
      return (
        <div>
          <p className="quiz-p"> Answer is wrong. </p>
          <button type="button" className="buttonstart">Back to choose your lesson</button>
        </div>
      );
    }
    return (<div />);
  };

  return (
    <div className="container">
      <h3 className="quizquestion">
        {questions.question}
      </h3>
      <div className="propositions">
        <ul>
          {questions.answers.map((answer, index) => (
            <li>
              <button
                type="button"
                className={answersClass[index]}
                onClick={() => checkedResponse(answer, index)}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="result">
        {solution()}
      </div>
    </div>
  );
}
