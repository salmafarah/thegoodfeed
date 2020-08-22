import React from "react";
import Emoji from "./EmojiItem/EmojiItem";

export default () => {
  const emojiData = [
    {
      to: "/anxiety",
      imgSrc: "https://imgur.com/cDXx3RL.jpg",
      alt: "anxietyEmoji",
      text: "Anxious",
    },
    {
      to: "/happy",
      imgSrc: "https://imgur.com/a19PgPn.jpg",
      alt: "happyEmoji",
      text: "Happy",
    },
    {
      to: "/angry",
      imgSrc: "https://imgur.com/Wm7bH2r.jpg",
      alt: "angryEmoji",
      text: "Angry",
    },
    {
      to: "/sad",
      imgSrc: "https://imgur.com/4bTQhis.jpg",
      alt: "sadEmoji",
      text: "Sad",
    },
    {
      to: "/fear",
      imgSrc: "https://imgur.com/BQtaQJm.jpg",
      alt: "fearEmoji",
      text: "Fearful",
    },
    {
      to: "/meh",
      imgSrc: "https://imgur.com/QQV4kCY.jpg",
      alt: "mehEmoji",
      text: "Meh",
    },
  ];

  return (
    <div className="emojiNavBar">
      {emojiData.map((emoji) => (
        <Emoji key={emoji.text} {...emoji} />
      ))}
    </div>
  );
};
