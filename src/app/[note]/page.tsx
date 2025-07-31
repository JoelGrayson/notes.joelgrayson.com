import compileMdx, { Params } from './processing/compileMdx';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { notFound, frontmatter, content }=await compileMdx(params);

    return {
        title: (typeof frontmatter.title==='string' ? frontmatter.title : 'Page Not Found')+' | Joel\'s Notes'
    };
}

export default async function Notes({ params }: { params: Params }) {
    const { notFound, frontmatter, content }=await compileMdx(params);
    
    if (notFound)
        return <Container>This note could not be found. Either it has not been created yet, was deleted, or was never created.</Container>;

    return <Container>
        <h1 className='font-medium text-center'>{frontmatter.title as string}</h1>
        {content}
    </Container>;
}

function Container({ children }: { children: React.ReactNode }) {
    return <div className='j_container' style={{ paddingBottom: 60 }}>
        {children}
    </div>;
}

