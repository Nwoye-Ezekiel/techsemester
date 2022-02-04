import React from 'react';
import "./Button.css";

export default function Button({children}) {
  return <button className="button-container">{children}</button>;
}
