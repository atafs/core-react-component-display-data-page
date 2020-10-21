import React, { useState } from "react";
import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";

const DisplayData = () => {
  const [movies, setMovies] = useState(getMovies());

  const handleDelete = movie => {
    const deleteMovies = movies.filter(m => m._id !== movie._id);
    setMovies( deleteMovies );
  };

  const handleLike = movie => {
    const likedMovies = [...movies];
    const index = likedMovies.indexOf(movie);
    likedMovies[index] = { ...likedMovies[index] };
    likedMovies[index].liked = !likedMovies[index].liked;
    setMovies( likedMovies );
  };

    const { length: count } = movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}

export default DisplayData;
