import React from "react";
import { IMovie } from "../../types";
import MovieItem from "./MovieItem/MovieItem.tsx";

interface Props {
  movieList: IMovie[];
  movieEditing: (editedMovie: IMovie) => void;
  movieDeletion: (movie: IMovie) => void;
}

const MovieList: React.FC<Props> = ({
  movieList,
  movieEditing,
  movieDeletion,
}) => {
  return (
    <>
      {movieList.map((movie: IMovie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onChange={movieEditing}
          onDelete={() => movieDeletion(movie)}
        />
      ))}
    </>
  );
};

export default MovieList;
