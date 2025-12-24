import { Container, Title } from "@/app/[note]/components";
import Content from "./Content";

export const metadata = {
    title: "Probability | Joel's Notes",
    description: 'Includes various topics from probability (random variables, expectation), information theory (entropy), as well as logistic regression and MLE'
};

export default function Probability() {
    return <Container>
        <Title title='Probability' />
        <Content />
    </Container>;
}

