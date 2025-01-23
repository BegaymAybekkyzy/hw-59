import AdditionForm from './components/AdditionForm/AdditionForm.tsx';
import { useState } from 'react';
import { IMovie } from './types';

const App = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([]);

  const addMovie = (newMovie: IMovie) => {
    setMovieList(prevMovies => [...prevMovies, newMovie]);
    console.log(movieList);
  };

  return (
    <>
      <div className="container p-4">
        <div className="d-flex p-3 justify-content-center">
          <AdditionForm onSubmitForm={addMovie} />
        </div>
      </div>
    </>
  );

};

export default App;
