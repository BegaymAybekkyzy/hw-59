import AdditionForm from './components/AdditionForm/AdditionForm.tsx';
import { useState } from 'react';
import { IMovie } from './types';
import MovieItem from './components/MovieItem/MovieItem.tsx';

const App = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([
    {movieName: 'Movie 1', id: '2025-01-23T17:43:18.159Z'},
    {movieName: 'Movie 2', id: '2025-01-23T17:43:18.15Z7'},
    {movieName: 'Movie 3', id: '2025-01-23T18:47:33.064Z'}
  ]);

  const addMovie = (newMovie: IMovie) => {
    setMovieList(prevState => [...prevState, newMovie]);
    console.log(movieList);
  };

  const movieEditing = (editedMovie: IMovie) => {
    setMovieList((prevState) =>
      prevState.map((movie) => {
        if(movie.id === editedMovie.id) {
          return {
            ...movie,
            movieName: editedMovie.movieName
          };
        }
        return movie;
        }
      )
    );
  };

  const movieDeletion = (editedMovie: IMovie) => {
    setMovieList((prevState) =>prevState.filter(movie => movie.id !== editedMovie.id));
  };

  return (
    <>
      <div className="container p-4">
        <div className="d-flex p-3 justify-content-center mb-5">
          <AdditionForm onSubmitForm={addMovie}/>
        </div>

        <div className="d-grid gap-3 justify-content-center">
          <h3 className="text-center">To watch list: </h3>
          {movieList.map((movie: IMovie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onChange={movieEditing}
              onDelete={() => movieDeletion(movie)}
            />
          ))}
        </div>
      </div>
    </>
  );

};

export default App;
