import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return <div>
        <h1 className="text-center">Joel's Notes</h1>
        <p>This site contains notes from my classes and self-learning for referencing. It is a collection of a tiny subset of all of human knowledge which I have been able to wrap my head around.</p>



        <h3>Computer Science</h3>
        <ul>
            <li><Link href=''>App development (CS 193P)</Link></li>
            <li></li>
        </ul>

        <h3>History</h3>
        <ul>
            <li>The Hump</li>
        </ul>
    </div>;
}
