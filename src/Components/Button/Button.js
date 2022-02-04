import React from 'react';
import "./Button.css";

export default function Button({children}) {
  return <button type="submit" className="button-container">{children}</button>;
}
