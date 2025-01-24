import React from "react";

interface Props {
  joke: string;
}

const JokeItem: React.FC<Props> = ({ joke }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">{joke}</div>
    </div>
  );
};

export default JokeItem;
