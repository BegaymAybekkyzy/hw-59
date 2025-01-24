import React from "react";
interface Props {
  jokeRequest: () => void;
}

const ReceiveBtn: React.FC<Props> = React.memo(
  ({ jokeRequest }) => {
    return (
      <>
        <button
          onClick={jokeRequest}
          className="btn btn-primary d-block mx-auto"
        >
          New jokes
        </button>
      </>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.jokeRequest !== nextProps.jokeRequest;
  },
);

export default ReceiveBtn;
