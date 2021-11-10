import React, { useEffect, useState } from "react";
import Questions from "./Questions";

/**
 *
 * SI point = 2 Tu arrete de poser les question
 *
 * SI point = 1 mais mauvais choix, reset !
 *
 */

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

  // const validQuestion = (answer) => {
  //   console.log(answer);
  //   // setQuestion(questions[1]);
  //   setValid(true);
  // };
  /**
   * function pour changer la class du button en fonction de la réponse
   * @param {récupère la réponse} answer
   * @param {permet de récupérer l'index de la réponse dans le tableau de choix} index
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
      return (<button type="button" onClick={() => changeQuestions()}>NEXT</button>);
    } if (point === 1 && !correct && canClickOnButton) {
      return (
        <div>
          <p> Answer is wrong. </p>
          <button type="button">Back</button>
        </div>
      );
    }
    if (point === 2) {
      return (<button type="button">Valider</button>);
    } if (point === 0 && canClickOnButton && !correct) {
      return (
        <div>
          <p> Answer is wrong. </p>
          <button type="button">Back</button>
        </div>
      );
    }
    return (<div />);
  };

  return (
    <div>
      <h1>
        Question :
        {" "}
        {questions.question}
      </h1>
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
      <div>
        {solution()}
      </div>
    </div>
  );
}

// { canClickOnButton && correct && (
//   <div>
//     <button type="button" onClick={() => changeQuestions()}>NEXT</button>
//     {" "}
//     <p>{point}</p>
//   </div>
// ); }
// { canClickOnButton && !correct && <p> Answer is wrong. </p>; }
