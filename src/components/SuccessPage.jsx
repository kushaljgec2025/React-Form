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
            <h3 key={key} className="result">
              <h2>{key} :</h2>
              <p className="value">{value}</p>
            </h3>
          ))}
      </div>
    </div>
  );
}

export default SuccessPage;
