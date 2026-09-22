import Link from "next/link";

export default function Poetry() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-12">
            <header className="mb-10">
                <h1 className="mb-4 font-serif text-4xl md:text-5xl">
                    Poetry
                </h1>

                <p className="text-lg">
                    A collection of poems, gathered here for you to explore.
                </p>
            </header>

            <nav aria-label="Poetry collection" className="ml-6">
                <ul className="space-y-4">
                    <li>
                        <Link
                            href="/library/poetry/autumn-air"
                            className="text-lg underline underline-offset-4 hover:opacity-80"
                        >
                            Autumn Air
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
}