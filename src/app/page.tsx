import Link from "next/link";

export const metadata={
    title: "Joel's Notes",
    description: 'This site contains notes from my classes and self-learning for referencing. It is a collection of a tiny subset of all of human knowledge which I have been able to wrap my head around.'
};

export default function Home() {
    return <div>
        <h1 className="text-center">Joel's Notes</h1>
        <p>This site contains notes from my classes and self-learning for referencing. It is a collection of a tiny subset of all of human knowledge which I have been able to wrap my head around.</p>

        <ul>
            <li><Link href='/e&m'>Electricity & Magnetism (Physics 43)</Link></li>
            <li><Link href='/ode'>ODEs (CME 102)</Link></li>
            <li><Link href='/mechanics'>Mechanics</Link></li>
        </ul>

        {/* <h3>Computer Science</h3>
        <ul>
            <li><Link href=''>App development (CS 193P)</Link></li>
            <li></li>
        </ul>

        <h3>History</h3>
        <ul>
            <li>The Hump</li>
        </ul> */}
    </div>;
}
