import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  faSpinner,
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
import Button from "../../Components/Button/Button";
import { postQuestionAction } from "../../Redux/Actions/Actions";

export default function Home() {
  const authedUser = useSelector((state) => state.user.authedUser);
  const loading = useSelector((state) => state.user.loading);
  const accessToken = useSelector(
    (state) => state.user.userDetails.access_token
  );
  const user = useSelector((state) => state.user.userDetails.user);

  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authedUser) {
      history.push("/login");
    }
    //eslint-disable-next-line
  }, [authedUser]);

  const actionIcons = [
    faBold,
    faItalic,
    faLink,
    faImage,
    faList,
    faAlignCenter,
    faQuoteRight,
  ];

  return (
    <div className="home-page">
      <div className="question-form-container">
        <Formik
          initialValues={{
            title: "",
            body: "",
            tags: "",
          }}
          validate={(values) => {
            console.log(values);
            const errors = {};
            if (values.title.length < 5) {
              errors.title = "Title must be at least 5 characters long";
            }
            if (values.body.length < 10) {
              errors.body = "Body must be at least 10 characters long";
            }
            if (values.tags.split(",").length !== 5) {
              errors.tags = "Only 5 tags are required!";
            }
            return errors;
          }}
          onSubmit={(values) => {
            const data = {
              user: user.id,
              body: values.body,
              active: user.is_active,
              title: values.title,
              tags: [values.tags.split(",").length],
            };
            console.log(user);
            dispatch(postQuestionAction(accessToken, data));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-header">
                <div className="user-info">
                  <div className="avatar"></div>
                  <span className="username">Abdusalam Fatai</span>
                </div>
                <Field
                  type="text"
                  name="title"
                  className="title"
                  placeholder="Ask your Question!"
                  required
                />
                <ErrorMessage className="error" name="title" component="div" />
              </div>

              <div className="form-body">
                <h4 className="form-body-header">Body</h4>
                <p className="form-body-sub-header">
                  Input all information needed to answer your question
                </p>
                <div className="editor-container">
                  <div className="editor-header1">
                    <div className="editor-header1-left">
                      {actionIcons.map((icon, index) => (
                        <FontAwesomeIcon
                          className="action-icon"
                          icon={icon}
                          key={index}
                        />
                      ))}
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
                      <Button className="hide-tips">
                        Hide formatting tips
                      </Button>
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
                  <div className="editor">
                    <Field
                      type="text"
                      name="body"
                      className="body-input"
                      required
                    />
                  </div>
                </div>
                <ErrorMessage className="error" name="body" component="div" />

                <div className="tags-container">
                  <h4 className="form-body-header">Tags</h4>
                  <p className="form-body-sub-header">
                    Add up to 5 tags to describe what your question is about
                  </p>
                  <Field
                    type="text"
                    name="tags"
                    className="tags-input"
                    placeholder="e.g mysql, html"
                    required
                  />
                  <ErrorMessage className="error" name="tags" component="div" />
                </div>

                <Button
                  className="post-button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {loading ? (
                    <FontAwesomeIcon icon={faSpinner} spin={true} />
                  ) : (
                    "Post your question"
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
