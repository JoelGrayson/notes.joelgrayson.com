import { promises as fs } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const metadata={
    title: 'Notes',
    description: 'Here are my notes'
}

export default async function Notes() {
    const content=await fs.readFile(
        path.join(process.cwd(), 'src/notes', 'hi-there.mdx'),
        'utf-8'
    );

    return <div>
        <MDXRemote source={content} />
    </div>;
}

