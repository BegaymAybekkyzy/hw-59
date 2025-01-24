import NewMovies from "./containers/NewMovies/NewMovies.tsx";
import ChuckNorrisJokes from "./containers/ChuckNorrisJokes/ChuckNorrisJokes.tsx";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState<boolean>(false);

  return (
    <>
      {page ? <ChuckNorrisJokes /> : <NewMovies />}

      <div
        className="container p-5"
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <button
          className="btn btn-dark d-block  mx-auto"
          onClick={() => setPage(!page)}
        >
          Next ex
        </button>
      </div>
    </>
  );
};

export default App;
