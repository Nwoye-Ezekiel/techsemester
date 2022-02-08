import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  faUndo,
  faRedo,
  faBold,
  faItalic,
  faLink,
  faImage,
  faList,
  faAlignCenter,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import Button from "../../Components/Button/Button";

export default function Home() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const authedUser = useSelector((state) => state.user.authedUser);
  // const user = useSelector((state) => state.user.userDetails.user);
  let history = useHistory();

  useEffect(() => {
    if (!authedUser) {
      history.push("/login");
    }
    //eslint-disable-next-line
  }, [authedUser]);

  return (
    <div className="home-page">
      <div className="question-form-container">
        <div className="form-header">
          <div className="user-info">
            <div className="avatar"></div>
            {/* <span className="username">{user.last_name} {user.first_name}</span> */}
            <span className="username">Abdusalam Fatai</span>
          </div>
          <h2 className="title">Ask your Question!</h2>
        </div>
        <div className="form-body">
          <h4 className="form-body-header">Body</h4>
          <p className="form-body-sub-header">
            Input all information needed to answer your question
          </p>

          <div className="editor-container">
            <div className="editor-header1">
              <div className="editor-header1-left">
                <FontAwesomeIcon
                  className="action-icon fa-bold"
                  icon={faBold}
                />
                <FontAwesomeIcon
                  className="action-icon fa-italic"
                  icon={faItalic}
                />
                <FontAwesomeIcon
                  className="action-icon fa-link"
                  icon={faLink}
                />
                <FontAwesomeIcon
                  className="action-icon fa-image"
                  icon={faImage}
                />
                <FontAwesomeIcon
                  className="action-icon fa-list"
                  icon={faList}
                />
                <FontAwesomeIcon
                  className="action-icon fa-align-center"
                  icon={faAlignCenter}
                />
                <FontAwesomeIcon
                  className="action-icon fa-quote-right"
                  icon={faQuoteRight}
                />
              </div>
              <div className="editor-header1-right">
                <div className="undo-redo">
                  <FontAwesomeIcon className="fa-undo" icon={faUndo} />
                  <FontAwesomeIcon
                    className="fa-redo"
                    icon={faRedo}
                    color="gray"
                  />
                </div>
                <Button className="hide-tips">Hide formatting tips</Button>
              </div>
            </div>
            <div className="editor-header2">
              <li>Links</li>
              <li>Images</li>
              <li>Styling/Headers</li>
              <li>Lists</li>
              <li>Code</li>
              <li>Blockquotes</li>
            </div>
          </div>
        </div>
      </div>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}
