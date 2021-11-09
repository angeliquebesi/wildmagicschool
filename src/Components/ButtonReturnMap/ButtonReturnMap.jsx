import React from "react";
import { useHistory } from "react-router-dom";

export default function ButtonReturnMap() {
  const history = useHistory();
  return (
    <div>
      <button type="button" className="buttonstart" onClick={/* Function to return to the previous page */history.goBack}>
        Return to map
      </button>
    </div>
  );
}
