import React from "react";
import { useState } from "react";
import "./CharacterCount.css";

const max = 280;

const CharacterCount = () => {
  const [text, setText] = useState("");
  const remain = max - text.length;

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="type something...."
      ></textarea>

      <div className="textfield">
        {text.length > 0
          ? remain > 0
            ? "keep going..."
            : `${Math.abs(remain)} characters over limit`
          : "280 Max characters"}
      </div>
      <div>{remain} characters remaining</div>
    </div>
  );
};

export default CharacterCount;
