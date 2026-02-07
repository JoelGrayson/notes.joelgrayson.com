import { promises as fs } from 'fs';
import path from 'path';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { TbExternalLink as OpenInNewTabIcon } from "react-icons/tb";
import obsidianImageToHTML from './obsidianImageToHTML';
import processDeriv from './processDeriv';
import Deriv from './Deriv';
import { pipe } from './pipe';
import removeLatexNbsp from './removeLatexNbsp';
import singleEnterForNewP from './singleEnterForNewP';
import stripComments from './stripComments';

export type Params=Promise<{ note: string }>;

/** @returns content is the JSX component of the content from the markdown note, frontmatter is a dictionary of the frontmatter fields such as title, notFound indicates if the passed in params are not found, urlTitle is a hyphenated title from the URL for identifying the note */
export default async function compileMdx(params: Params) {
    const rawTitle=(await params).note;
    const urlTitle=decodeURIComponent(rawTitle); //hyphenated
    
    let plainTextContent='';
    let notFound=false;

    try {
        plainTextContent=await fs.readFile(
            path.join(process.cwd(), 'src/do-not-edit/notes-copied-from-obsidian', `${urlTitle}.md`),
            'utf-8'
        );
    } catch (error) {
        notFound=true;
    }

    const processFn=pipe(stripComments, singleEnterForNewP, removeLatexNbsp, obsidianImageToHTML, processDeriv);
    const processedString=processFn(plainTextContent);

    // console.log('Processed string (Obsidian images converted to HTML)', processedContentString);
    const { content, frontmatter }=await compileMDX({
        source: processedString,
        options: {
            mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex]
            },
            parseFrontmatter: true
        },
        components: {
            PDF({ src, width='100%', height='800' }: { src: string, width: number | string, height: number | string }) {
                return <div className='relative'>
                    <div className="flex justify-end pr-3 pb-2">
                        <Link href={src} target='_blank' className='unstyled'>
                            <OpenInNewTabIcon size={20} />
                        </Link>
                    </div>
                    <object type="application/pdf" data={src} width={width} height={height} />
                </div>;
            },
            Deriv
        }
    });

    return { content, frontmatter, notFound, urlTitle };
}

