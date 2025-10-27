import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h3>
    </div>
  );
}

export default MovieCard;
