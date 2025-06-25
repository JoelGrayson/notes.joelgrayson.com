import { promises as fs } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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

    const imagesProcessed=obsidianImageToHTML(content);
    content='Hi **there** this is *italicized*.'
    const source=await serialize(content, {
        mdxOptions: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
            format: 'mdx'
        }
    });
    console.log('source', source, 'from content', content);

    return <div className='pt-8 j_container'>
        {
            notFound
            ? <div>This note has not been created yet</div>
            : <MDXRemote
                // source={source.compiledSource}
                {...source}
                components={{
                    code(props) {
                        return <code className='text-red-500' {...props} />
                    }
                }}
            />
        }
    </div>;
}

function obsidianImageToHTML(content: string): string {
    return content.replaceAll(
        /\!\[\[([^|]+?)(?:\|(\d+))?\]\]/g,
        (_, url, width)=>
            `<img src="/media/${url}"${ width ? ` width="${width}" ` : ' ' }/>`
        // '<img src="/media/$1" width="$2" />'
    );
}

// function obsidianLatexToLatex

