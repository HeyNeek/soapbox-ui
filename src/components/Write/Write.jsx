import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "../Write/Write.css";
import { useEffect } from "react";

const Write = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="write">
      <h1>Create Post</h1>
      <ReactQuill className="quill-editor" value={value} onChange={setValue} />
      <div className="button-container">
        <button className="save-button">Save</button>
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

export default Write;
