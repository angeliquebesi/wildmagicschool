import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../../Context/UserContext";

export default function ButtonReturnLesson() {
  const { userHouse } = useContext(UserContext);
  const { type } = useParams();

  return (
    <div>
      <Link to={`/hat/${userHouse}/Marauder/${type}`}>
        <button type="button" className="buttonstart">
          Back to choose your lesson
        </button>
      </Link>
    </div>
  );
}
