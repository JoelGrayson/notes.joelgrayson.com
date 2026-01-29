import { Container, Title } from "@/app/[note]/components";
import Content from "./Content";

export const metadata = {
    title: "Signals & Systems | Joel's Notes",
    description: ''
};

export default function SignalsAndSystems() {
    return <Container>
        <Title title='Signals & Systems' />
        <Content />
    </Container>;
}

