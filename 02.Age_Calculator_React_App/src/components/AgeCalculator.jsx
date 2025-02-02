import PropTypes from "prop-types";
import { useState } from "react";

const AgeCalculator = ({ setAge }) => {
  const [birthDate, setBirthDate] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    setBirthDate(event.target.value);
  };

  // Function to handle age calculation when button get clicked
  const calculateAge = () => {
    // get the birthdate in object format
    const birthDateObj = new Date(birthDate);
    // get today in object formet
    const today = new Date();

    // check if birthday is valid
    if (isNaN(birthDateObj.getTime())) {
      setAge(null);
      return;
    }

    if (birthDateObj > today) {
      setAge(null);
      return;
    }
    // extract the birth year, month and day
    const birthYear = birthDateObj.getFullYear();
    const birthMonth = birthDateObj.getMonth() + 1;
    const birthDay = birthDateObj.getDate();

    // extract the current year, month and day
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    // substract year, month and day
    let ageYear = currentYear - birthYear;
    let ageMonth = currentMonth - birthMonth;
    let ageDay = currentDay - birthDay;

    // Adjust the year if the birthday hasn't happened yet
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
    }

    // Adjust the month difference if days are negative
    if (ageDay < 0) {
      ageMonth--;
      let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDay += lastMonth.getDate();
    }

    // Fix negative months
    if (ageMonth < 0) {
      ageMonth += 12;
    }
    // populate the age state
    setAge({ years: ageYear, months: ageMonth, days: ageDay });
  };

  return (
    <div className="age-calculator-container">
      <input
        type="date"
        value={birthDate}
        onChange={handleInputChange}
        max={new Date().toISOString().split("T")[0]}
        className="p-2 border border-gray-300 rounded no-select relative"
      />
      <button
        onClick={calculateAge}
        className="ml-2 p-2 bg-blue-500 text-white rounded"
      >
        Calculate age
      </button>
    </div>
  );
};

// props validation
AgeCalculator.propTypes = {
  setAge: PropTypes.func.isRequired,
};

export default AgeCalculator;
