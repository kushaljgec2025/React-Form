// src/components/SuccessPage.js
import React from "react";
import { useLocation } from "react-router-dom";

function SuccessPage() {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>Form Submission Successful</h1>
      <div>
        {state &&
          Object.entries(state).map(([key, value]) => (
            <p key={key} className="result">
              <h2>{key} :</h2>
              <p className="value">{value}</p>
            </p>
          ))}
      </div>
    </div>
  );
}

export default SuccessPage;
