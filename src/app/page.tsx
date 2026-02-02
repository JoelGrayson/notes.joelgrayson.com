import Link from "next/link";

export const metadata={
    title: "Joel's Notes",
    description: 'This site contains notes from my classes and self-learning for referencing. It is part of the tiny subset of all of human knowledge that I have been able to wrap my head around.'
};

export default function Home() {
    return <div>
        <div className="j_container">
            <h1 className="text-center">Joel's Notes</h1>
            <p>This site contains notes from my classes and self-learning for referencing. It is part of the tiny subset of all of human knowledge that I have been able to wrap my head around.</p>

            <ul>
                <li><Link href='/signals-and-systems'>Signals &amp; Systems (EE 102A)</Link></li>
                <li><Link href='/probability'>Probability (CS 109)</Link></li>
                <li><Link href='https://joelkit.com'>Data Structures &amp; Algorithms (CS 161)</Link></li>
                <li><Link href='/circuits'>Circuits (ENGR 40M and EE 101A)</Link></li>
                <li><Link href='/mathematical-foundations-of-computing'>Mathematical Foundations of Computing (CS 103)</Link></li>
                <li><Link href='/multivariable-calculus'>Multivariable Calculus (Math 52)</Link></li>
                <li><Link href='/e&m'>Electricity &amp; Magnetism (Physics 43)</Link></li>
                <li><Link href='/ode'>ODEs (CME 102)</Link></li>
                <li><Link href='/mechanics'>Mechanics</Link></li>
            </ul>
        </div>

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
