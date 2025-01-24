import { useEffect, useState } from "react";
import { IMovie } from "../../types";
import AdditionForm from "../../components/AdditionForm/AdditionForm.tsx";
import MovieList from "../../components/MovieList/MovieList.tsx";

const NewMovies = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem("movieList");
    if (savedMovies) {
      setMovieList(JSON.parse(savedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movieList", JSON.stringify(movieList));
  }, [movieList]);

  const addMovie = (newMovie: IMovie) => {
    setMovieList((prevState) => [...prevState, newMovie]);
  };

  const movieEditing = (editedMovie: IMovie) => {
    setMovieList((prevState) =>
      prevState.map((movie) =>
        movie.id === editedMovie.id
          ? { ...movie, movieName: editedMovie.movieName }
          : movie,
      ),
    );
  };

  const movieDeletion = (editedMovie: IMovie) => {
    setMovieList((prevState) =>
      prevState.filter((movie) => movie.id !== editedMovie.id),
    );
  };

  return (
    <>
      <div className="container p-4">
        <div className="d-flex p-3 justify-content-center mb-5">
          <AdditionForm onSubmitForm={addMovie} />
        </div>

        <div className="d-grid gap-3 justify-content-center">
          <h3 className="text-center">To watch list: </h3>
          <MovieList
            movieDeletion={movieDeletion}
            movieEditing={movieEditing}
            movieList={movieList}
          />
        </div>
      </div>
    </>
  );
};

export default NewMovies;
