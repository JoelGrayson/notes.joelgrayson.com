import { promises as fs } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const metadata={
    title: 'Notes',
    description: 'Here are my notes'
}

export default async function Notes({ params }: { params: { title: string } }) {
    console.log(params);
    const content=await fs.readFile(
        path.join(process.cwd(), 'src/notes', `${params.title}.mdx`),
        'utf-8'
    );

    return <div>
        <MDXRemote
            source={content}
            components={
                {
                    code(props) {
                        return <code className='text-red-500' {...props} />
                    }
                }
            }
        />
    </div>;
}

