import { promises as fs } from 'fs';
import path from 'path';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { compileMDX } from 'next-mdx-remote/rsc';

export default async function Notes({ params }: { params: Promise<{ note: string }> }) {
    const rawTitle=(await params).note;
    const title=decodeURIComponent(rawTitle);
    
    let stringContent='';
    let notFound=false;

    try {
        stringContent=await fs.readFile(
            path.join(process.cwd(), 'src/do-not-edit/notes-copied-from-obsidian', `${title}.md`),
            'utf-8'
        );
    } catch (error) {
        notFound=true;
    }

    const processedContentString=obsidianImageToHTML(stringContent)
        // .replaceAll(/(?<!\\)\</g, '\\<'); //turn < into \< and keep \< as is
    console.log(processedContentString);
    const { content, frontmatter }=await compileMDX({
        source: processedContentString,
        options: {
            mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex]
            }
        }
    });

    console.log('compiledContent', content);
    
    return <div className='pt-8 j_container'>
        {content}
        {/* {
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
        } */}
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

