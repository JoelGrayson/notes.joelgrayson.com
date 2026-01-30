import Link from 'next/link';
import { Container, Title } from './components';
import compileMdx, { Params } from './processing/compileMdx';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { notFound, frontmatter }=await compileMdx(params);

    const title = typeof frontmatter.title==='string' ?
        `${frontmatter.title} | Joel's Notes`
        : 'Joel\'s Notes';
    
    return {
        title: notFound ? `Page Not Found | Joel's Notes` : title,
        description: typeof frontmatter.description==='string' ? ('A note about '+frontmatter.description) : undefined
    };
}

export default async function Notes({ params }: { params: Params }) {
    const { notFound, frontmatter, content }=await compileMdx(params);
    
    if (notFound)
        return <Container>
            <h1 className='text-center'>404 Not Found</h1>
            <p>This note could not be found. Either it has not been created yet, was deleted, or was never created.</p>
            <div className="flex w-full justify-center mt-5">
                <Link href='/' className='button'>Return Home</Link>
            </div>
        </Container>;

    return <Container>
        <Title title={frontmatter.title as string} />
        {content}
    </Container>;
}

