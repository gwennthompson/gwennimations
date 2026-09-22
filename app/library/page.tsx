import Link from "next/link";

export default function LibraryPage() {
  return (
    <section className="mx-auto max-w-3x1 px-6 py12">
      <header className="mb-10">
        <h1 className="mb-4 font-serif text-4xl md:text-5x1">
          Welcome to the Library
        </h1>

        <p className="text-lg">
          What would you like to check out?
        </p>
      </header>
      
      <nav aria-label="Writing collections" className="ml-4">
        <ul className="space-y-5">
          <li>
            <Link
              href="/library/poetry"
              className="text-xl underline-offset-4 hover:underline"
            >
              Poetry
            </Link>
          </li>

          <li>
            <Link
              href="/library/short-stories"
              className="text-xl underline-offset-4 hover:underline"
            >
              Short Stories
            </Link>
          </li>

          <li>
            <Link
              href="/library/ponderings"
              className="text-xl underline-offset-4 hover:underline"
            >
              Ponderings
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

