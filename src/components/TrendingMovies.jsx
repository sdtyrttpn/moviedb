import { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import { TrendingMoviesList } from "../data";

export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    async function loadMovies() {
      const data = await TrendingMoviesList();
      setMovies(data);
    }
    loadMovies();
  }, []);

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <div className="mx-4">
      <h2 className="text-center font-bold text-4xl m-10 text-yellow-400 uppercase tracking-widest">
        Trending
      </h2>

      {/* CONTAINER */}
      <div className="container mx-auto relative">
        {/* Sol Gradient */}
        <div
          className="
            absolute left-0 top-0 bottom-0 w-24 
             
            pointer-events-none z-10
          "
        />

        {/* Sağ Gradient */}
        <div
          className="
            absolute right-0 top-0 bottom-0 w-24
            pointer-events-none z-10
          "
        />

        {/* Sol Ok */}
        <button
          onClick={scrollLeft}
          className="
            absolute -left-6 top-1/2 -translate-y-1/2 
            bg-neutral-800 backdrop-blur-md 
            text-white p-3 rounded-full shadow-lg 
            hover:bg-neutral-700 z-20 cursor-pointer
          "
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        {/* Sağ Ok */}
        <button
          onClick={scrollRight}
          className="
            absolute -right-6 top-1/2 -translate-y-1/2 
            bg-neutral-800/70 backdrop-blur-md 
            text-white p-3 rounded-full shadow-lg 
            hover:bg-neutral-700 z-20 cursor-pointer
          "
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory 
            pb-8 hide-scrollbar px-6
          "
        >
          {movies.map((m, index) => (
            <div key={index} className="snap-center shrink-0">
              <MovieCard movieObj={m} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
