export async function TrendingMoviesList() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=cd13938875ae9c483c97d414349fafbe"
    );

    const data = await response.json();
    const movies = data.results.slice(0, 12);

    const formatted = movies.map((m) => ({
      image: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
      title: m.title,
      rating: m.vote_average.toFixed(1),
      category: ["Action", "Drama"], // şimdilik sabit
      year: m.release_date?.slice(0, 4) || "Unknown",
    }));

    return formatted;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
