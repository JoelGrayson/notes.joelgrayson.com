import { promises as fs } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Notes({ params }: { params: Promise<{ note: string }> }) {
    const rawTitle=(await params).note;
    const title=decodeURIComponent(rawTitle);
    
    let content='';
    let notFound=false;

    try {
        content=await fs.readFile(
            path.join(process.cwd(), 'src/do-not-edit/notes-copied-from-obsidian', `${title}.md`),
            'utf-8'
        );
    } catch (error) {
        notFound=true;
    }
    
    return <div className='pt-8 j_container'>
        {
            notFound
            ? <div>This note has not been created yet</div>
            : <MDXRemote
            source={content}
            components={
                {
                    code(props) {
                        return <code className='text-red-500' {...props} />
                    }
                }
            }
        />
        }
    </div>;
}

