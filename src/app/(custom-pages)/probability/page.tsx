import { Container, Title } from "@/app/[note]/page";

export default function Probability() {
    return <Container>
        <Title title='Probability' />
        <h1>Summary</h1>
        <p>Here is the summary. You can click on any circles (d) for the derivation</p>
        {/* Images */}
        <img src="/media/probability/reference-sheet/IMG_3606.jpg" alt="" />
        
        <h2>Full Notes</h2>
        <p>Rejection sampling</p>
    </Container>;
}

// Rejection sampling - count up the number of samples that satisfy a condition and divide by the number of total samples

// Procedural fairness - fairness through unawareness
// Distributive fairness - fairness through awareness
//     parity - arrest at the same rates

