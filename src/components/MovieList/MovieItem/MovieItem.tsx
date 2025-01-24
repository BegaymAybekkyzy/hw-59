import React, { ChangeEvent } from "react";
import { IMovie } from "../../../types";

interface Props {
  movie: IMovie;
  onChange: (editedMovie: IMovie) => void;
  onDelete: () => void;
}

const MovieItem: React.FC<Props> = React.memo(
  ({ movie, onChange, onDelete }) => {
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      onChange({ ...movie, movieName: value });
    };

    return (
      <div className="border p-2">
        <input
          className="border-0"
          onChange={inputChangeHandler}
          value={movie.movieName}
          type="text"
        />

        <button onClick={onDelete} className="btn-close"></button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.movie.movieName === nextProps.movie.movieName;
  },
);

export default MovieItem;
