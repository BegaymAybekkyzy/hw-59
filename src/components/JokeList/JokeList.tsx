import React from "react";
import JokeItem from "./JokeItem/JokeItem.tsx";

interface Props {
  jokes: string[];
}

const JokeList: React.FC<Props> = ({ jokes }) => {
  return (
    <>
      {jokes.map((joke, index) => (
        <JokeItem key={index} joke={joke} />
      ))}
    </>
  );
};

export default JokeList;
