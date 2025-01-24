import React, { useState } from "react";
import { IMovie } from "../../types";

interface Props {
  onSubmitForm: (movie: IMovie) => void;
}

const AdditionForm: React.FC<Props> = ({ onSubmitForm }) => {
  const [form, setForm] = useState<IMovie>({
    movieName: "",
    id: "",
  });

  const OnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.movieName.trim().length > 0) {
      onSubmitForm({ ...form, id: String(new Date().toISOString()) });
    }
    setForm({ ...form, movieName: "", id: "" });
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="w-50">
      <form onSubmit={OnSubmit}>
        <div className="d-flex gap-3 align-items-center justify-content-sm-between">
          <input
            name="movieName"
            type="text"
            value={form.movieName}
            className="form-control"
            onChange={inputChangeHandler}
            placeholder="Enter the name of the movie"
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdditionForm;
