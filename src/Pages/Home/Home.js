import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

export default function Home() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const authedUser = useSelector((state) => state.user.authedUser);
  let history = useHistory();

  useEffect(() => {
    if (!authedUser) {
      history.push("/login");
    }
    //eslint-disable-next-line
  }, [authedUser]);

  return (
    <div className="home-page">
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}
