export default function MovieCard({ movieObj }) {
  return (
    <span className="inline-block movie w-[140px] md:w-[180px] lg:w-[200px] relative">
      <div className="border-4 rounded-md hover:border-yellow-400 transition cursor-pointer relative">
        <img className="w-full rounded" src={movieObj.image} alt="" />

        <div className="font-bold text-center w-full text-xl md:text-2xl p-4 md:p-6 absolute inset-0 flex flex-col items-center justify-between opacity-0 hover:opacity-100 bg-black/60 duration-300">
          <span>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <br />
            {movieObj.rating} / 10
          </span>

          <span>
            {movieObj.category[0]}
            <br />
            {movieObj.category[1]}
          </span>

          <button className="bg-yellow-400 font-bold py-1 px-2 text-neutral-800 rounded-md text-base md:text-xl">
            Details
          </button>
        </div>
      </div>

      <h2 className="font-bold truncate hover:text-yellow-400 transition ms-1">
        <a href="">{movieObj.title}</a>
      </h2>
      <p className="text-gray-300 text-sm ms-1">{movieObj.year}</p>
    </span>
  );
}
