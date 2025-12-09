import { Container, Title } from './components';
import compileMdx, { Params } from './processing/compileMdx';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { notFound, frontmatter }=await compileMdx(params);

    return {
        title: (typeof frontmatter.title==='string' ? frontmatter.title : 'Page Not Found')+' | Joel\'s Notes',
        description: typeof frontmatter.description==='string' ? ('A note about '+frontmatter.description) : undefined
    };
}

export default async function Notes({ params }: { params: Params }) {
    const { notFound, frontmatter, content }=await compileMdx(params);
    
    if (notFound)
        return <Container>This note could not be found. Either it has not been created yet, was deleted, or was never created.</Container>;

    return <Container>
        <Title title={frontmatter.title as string} />
        {content}
    </Container>;
}

