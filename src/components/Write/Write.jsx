import { useState } from "react";

import "../Write/Write.css";

const Write = () => {
  const [textAreaState, setTextAreaState] = useState("");
  const [titleState, setTitleState] = useState("");

  return (
    <div className="write">
      <h1>Create Post</h1>
      <input
        className="title-area"
        placeholder="Title of your Post"
        type="text"
        onChange={(e) => {
          setTitleState(e.target.value);
          console.log(titleState);
        }}
      />
      <br />
      <textarea
        className="text-area"
        onChange={(e) => {
          setTextAreaState(e.target.value);
          console.log(textAreaState);
        }}
      />
    </div>
  );
};

export default Write;
