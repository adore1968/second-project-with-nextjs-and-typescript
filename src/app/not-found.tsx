import Link from "next/link";

function NotFoundPage() {
  return (
    <section className="px-5 sm:px-0">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-5">
          Error 404, page not found
        </h2>
        <Link
          href="/"
          className="bg-pink-700 hover:bg-pink-600 transition-colors ease-in px-4 py-2 text-lg sm:text-xl inline-block rounded"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
