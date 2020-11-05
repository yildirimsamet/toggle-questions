import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="btn"
        >
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {open ? <p>{info}</p> : null}
    </article>
  );
};

export default Question;
