import React, { useState } from "react";

const Checklist = () => {
  // Step 1: Create React state to track checkbox values
  const [isCitizen, setIsCitizen] = useState(false);
  const [isOver21, setIsOver21] = useState(false);

  // Step 2: Functions to update checkbox values based on event.target.checked
  const handleCitizenChange = (event) => {
    setIsCitizen(event.target.checked);
  };

  const handleOver21Change = (event) => {
    setIsOver21(event.target.checked);
  };

  return (
    <div>
      {/* Step 3: Display dynamic results based on checkbox selection */}
      <h2>Are you a Citizen: {isCitizen ? "Yes" : "No"}</h2>
      <h2>Are you over 21: {isOver21 ? "Yes" : "No"}</h2>

      {/* Step 4: Add checkbox input elements with onChange functions */}
      <label>
        Are you a Citizen?
        <input
          type="checkbox"
          checked={isCitizen}
          onChange={handleCitizenChange}
        />
      </label>
      <br />
      <label>
        Are you over 21?
        <input
          type="checkbox"
          checked={isOver21}
          onChange={handleOver21Change}
        />
      </label>
    </div>
  );
};
export default Checklist;