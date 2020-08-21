import React from "react";
import { Link } from "react-router-dom";

export const MoodIcon = ({ to, icon, questionText }) => (
  <div className="col-5">
    <Link to={to}>{icon}</Link>
    <p className="QuestionText"> {questionText}</p>
  </div>
);
