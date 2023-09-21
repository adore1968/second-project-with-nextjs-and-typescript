import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white text-black flex justify-between items-center px-10 py-5 mb-10">
      <h1 className="text-xl sm:text-2xl font-semibold">
        <Link href="/">Home</Link>
      </h1>
      <ul className="flex items-center gap-10 text-white text-lg sm:text-xl">
        <li>
          <Link
            href="/about"
            className="bg-pink-700 hover:bg-pink-600 transition-colors ease-in px-4 py-2 rounded inline-block"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className="bg-indigo-700 hover:bg-indigo-600 transition-colors ease-in px-4 py-2 rounded inline-block"
          >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
