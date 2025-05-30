import { promises as fs } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Notes({ params }: { params: { title: string } }) {
    const content=await fs.readFile(
        path.join(process.cwd(), 'src/do-not-edit/notes-copied-from-obsidian', `${params.title}.md`),
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

