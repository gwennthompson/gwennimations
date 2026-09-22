import Link from "next/link";

export default function Poetry() {
    return (
        <div>
            <h1>Poetry</h1>

            <ul>
                <li>
                    <Link href="/library/poetry/autumn-air">Autumn Air</Link>
                </li>
            </ul>
        </div>
    );
}