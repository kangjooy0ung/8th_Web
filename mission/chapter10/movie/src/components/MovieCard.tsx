import { Movie } from "../types/movie";
import { useState, memo } from "react";
import { ReactElement } from "react";

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

function MovieCard({ movie, onClick }: MovieCardProps): ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(movie)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer w-44 transition-transform duration-300 hover:scale-105"
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} 영화의 이미지`}
      />

      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-md flex flex-col justify-center items-center text-white p-4 overflow-hidden">
          <h2 className="text-lg font-bold leading-snug">{movie.title}</h2>
          <p className="text-sm text-gray-300 leading-relaxed mt-2 line-clamp-5">
            {movie.overview}
          </p>
        </div>
      )}
    </div>
  );
}

export default memo(MovieCard);