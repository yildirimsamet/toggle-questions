import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import { FaBeer } from "react-icons/fa";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={questions.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
