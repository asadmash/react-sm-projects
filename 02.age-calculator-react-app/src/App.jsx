import { useState } from "react";
import "./App.css";
import AgeCalculator from "./components/AgeCalculator";

function App() {
  const [age, setAge] = useState(null);
  return (
    <>
      <div className="container w-full h-screen flex justify-center items-center flex-col max-w-none">
        <h1 className="">Javascript Age Calculator</h1>
        <div className="my-5">
          <AgeCalculator setAge={setAge} />
        </div>
        {age && (
          <p className="ageDisplay">
            {age.years} years, {age.months} months, {age.days} days
          </p>
        )}
      </div>
    </>
  );
}

export default App;
