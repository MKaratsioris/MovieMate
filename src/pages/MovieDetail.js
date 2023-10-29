import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Backup from "../assets/images/backup.png";
import { useTitle } from "../hooks/AllHooks";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  const {
    genres,
    id,
    original_title,
    overview,
    poster_path,
    vote_average,
    vote_count,
    runtime,
    budget,
    revenue,
    release_date,
    imdb_id,
  } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;
  const imdb_url = `https://www.imdb.com/title/${imdb_id}`;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(url);
      const json = await response.json();
      setMovie(json);
    }
    fetchMovie();
  }, [url]);

  useTitle(`- ${original_title}`);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded-lg" src={image} alt={original_title} />
        </div>
        <div className="max-w-2xl text-gray-500 text-lg darl:text-white">
          <a
            href={imdb_url}
            target="_blank"
            alt={`IMDb page for ${original_title}`}
            rel="noreferrer"
          >
            <h1 className="text-4xl font-bold my-3 text-center lg:text-left hover:underline">
              {original_title}
            </h1>
          </a>
          <p className="my-4 text-justify">{overview}</p>
          {genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-400 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-gray-900 dark:text-white">{vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {vote_count} reviews
            </span>
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{runtime} min.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>${budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>${revenue}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{release_date}</span>
          </p>
        </div>
      </section>
    </main>
  );
};
