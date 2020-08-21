import React from "react";
import "./HomePage.css";
import AnxiteyLottie from "../Lottie/AnxietyLottie";
import HappyLottie from "../Lottie/HappyLottie";
import AngryLottie from "../Lottie/AngryLottie";
import MehLottie from "../Lottie/MehLottie";
import SadLottie from "../Lottie/SadLottie";
import FearLottie from "../Lottie/FearLottie";
import { MoodIcon } from "../MoodIcon/MoodIcon";

export default () => {
  // Home mood icons data
  const moodData = [
    {
      to: "/anxiety",
      questionText: "Anxious",
      icon: <AnxiteyLottie />,
    },
    {
      to: "/happy",
      questionText: "Happy",
      icon: <HappyLottie />,
    },
    {
      to: "/angry",
      questionText: "Angry",
      icon: <AngryLottie />,
    },
    {
      to: "/sad",
      questionText: "Sad",
      icon: <SadLottie />,
    },
    {
      to: "/fear",
      questionText: "Fearful",
      icon: <FearLottie />,
    },
    {
      to: "/meh",
      questionText: "Meh",
      icon: <MehLottie />,
    },
  ];
  return (
    <div className="Wraper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <p className="HomePageTag border-0 text-wrap">
              Curating a more positive social media feed
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex align-items-center text-center">
            <div className="card h-100 border-0 shadow-lg mt-5 Width">
              <div className="card-body QuestionBox rounded">
                <p className="card-title text-wrap">How Are You Feeling?</p>
                <div className="row mb-3 mt-4 justify-content-center">
                  {moodData.map((mood) => (
                    <MoodIcon key={mood.to} {...mood} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
