export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 p-4 border-b-2 border-b-gray-700 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex gap-8 items-center justify-between">
          <h2 className="shrink-0 font-bold text-4xl">
            <a href="#">
              <i className="fa-solid fa-film"></i> Movie
              <span className="text-yellow-400">DB</span>
            </a>
          </h2>

          <ul className="flex gap-4 font-medium ms-auto">
            <li className="hover:text-yellow-400">
              <a href="">Home</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="">Popular</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="">Now Playing</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="">Upcoming</a>
            </li>
          </ul>

          <form className="relative">
            <input
              type="text"
              className="bg-neutral-800 py-2 ps-10 pe-4 text-slate-100 rounded-3xl border-gray-700 border-2 focus:border-slate-100"
              placeholder="Search for a movie"
            />
            <button className="absolute left-4 top-0 bottom-0">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
