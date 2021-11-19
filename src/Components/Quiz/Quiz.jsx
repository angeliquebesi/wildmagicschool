import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { useParams, useHistory, Link } from "react-router-dom";
import Questions from "../../DATA/Questions";
import UserContext from "../../Context/UserContext";
import GameContext from "../../Context/GameContext";
import ButtonReturnLesson from "../ButtonReturnLesson/ButtonReturnLesson";
import ButtonReturnMap from "../ButtonReturnMap/ButtonReturnMap";
import "./Quizz.css";

export default function Quiz() {
  const { type } = useParams();
  const { userHouse, idMonster, setIdMonster } = useContext(UserContext);
  const { setSpells, spells, setPotions, potions, lesson, setDefeatedMonster, defeatedMonster, availableMonster, setAvailableMonster } = useContext(GameContext);
  const [questions, setQuestions] = useState({
    question: "",
    answers: [],
  });
  const [answersClass, setAnswerClass] = useState(["", "", "", ""]);
  const [canClickOnButton, setCanClickOnButton] = useState(false);
  const [num, setNum] = useState(0);
  const [point, setPoint] = useState(0);
  const [correct, setCorrect] = useState(false);

  const toggleanswer = (reponses) => reponses.sort(() => Math.random() - 0.5);
  const history = useHistory();
  /** Fonction pour récupérer l'id de la lesson gagnée et le pousser dans le tableau correspondant */
  const addLesson = () => {
    if (type === "spells") {
      const newGain = [...spells, lesson];
      setSpells(newGain);
    } else {
      const newGain = [...potions, lesson];
      setPotions(newGain);
    }
    setTimeout(() => {
      setIdMonster("");
      history.push(`/hat/${userHouse}/Marauder`);
    }, 500);
  };

  const addDefeatedMonster = () => {
    history.push(`/hat/${userHouse}/Marauder`);
    setAvailableMonster(availableMonster.concat([idMonster + 1]));
    setDefeatedMonster(defeatedMonster.concat([idMonster]));
    setIdMonster("");
  };
  /** Fonction permettant d'afficher le quiz en s'appuyant sur le dossier data Questions et en filtrant sur les sorts  */
  useEffect(() => {
    const questionsQ = (type !== "spells" && type !== "potions" ? Questions.filter((quest) => quest.type === "Fight" && quest.id === parseInt(idMonster, 32)) : Questions.filter((quest) => quest.type === type && quest.id === parseInt(lesson.id, 32)));
    const myQuestions = {
      correct: questionsQ[num].correct_answer,
      question: questionsQ[num].question,
      answers: toggleanswer([
        questionsQ[num].correct_answer,
        ...questionsQ[num].incorrect_answers,
      ]),
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
        array[index] = "btn-danger";
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
      return (
        <button
          type="button"
          className="buttonstart"
          onClick={() => changeQuestions()}
        >
          NEXT
        </button>
      );
    }
    if (point === 1 && !correct && canClickOnButton) {
      return (
        <div>
          <p className="quiz-p"> Answer is wrong. </p>
          <ButtonReturnLesson />
        </div>
      );
    }
    if (point <= 1 && type !== "spells" && type !== "potions" && !correct && canClickOnButton) {
      return (
        <div>
          <p className="quiz-p"> Answer is wrong. </p>
          <ButtonReturnMap />
        </div>
      );
    }
    if (point === 2 && (type === "spells" || type === "potions")) {
      return (
        <div>
          <div className="text-center fs-3 ">{`Well done you've earned the ${lesson.name} `}</div>
          <button type="button" className="buttonstart px-2" onClick={addLesson}>
            OK
          </button>
        </div>
      );
    }
    if (point === 2 && type !== "spells" && type !== "potions" && idMonster !== 3) {
      return (
        <div>
          <div className="text-center fs-3 ">`Well done, you&apos;ve killed the monster `</div>
          <button type="button" className="buttonstart px-2" onClick={addDefeatedMonster}>
            OK
          </button>
        </div>
      );
    }
    if (point === 2 && idMonster === 3) {
      return (
        <div>
          <div className="text-center fs-3 ">`Well done, you&apos;ve killed Lord Voldemort `</div>
          <Link to={`/hat/${userHouse}/Marauder/Fight/Victory`}>
            <button type="button" className="buttonstart px-2">
              OK
            </button>
          </Link>
        </div>
      );
    }
    if (point === 0 && canClickOnButton && !correct) {
      return (
        <div>
          <p className="quiz-p"> Answer is wrong. </p>
          <ButtonReturnLesson />
        </div>
      );
    }
    return <div />;
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="container">
        <h3 className="quizquestion">{questions.question}</h3>
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
        <div className="result">{solution()}</div>
      </div>
    </motion.div>
  );
}
