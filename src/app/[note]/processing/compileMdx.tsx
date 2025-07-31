import { promises as fs } from 'fs';
import path from 'path';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { TbExternalLink as OpenInNewTabIcon } from "react-icons/tb";
import obsidianImageToHTML from './obsidianImageToHTML';

export type Params=Promise<{ note: string }>;

export default async function compileMdx(params: Params) {
    const rawTitle=(await params).note;
    const urlTitle=decodeURIComponent(rawTitle); //hyphenated
    
    let stringContent='';
    let notFound=false;

    try {
        stringContent=await fs.readFile(
            path.join(process.cwd(), 'src/do-not-edit/notes-copied-from-obsidian', `${urlTitle}.md`),
            'utf-8'
        );
    } catch (error) {
        notFound=true;
    }

    const processedContentString=obsidianImageToHTML(stringContent)
        .replace(/\u00A0/g, ' '); //removes the LaTeX incompatible input warning (nbsp)

    // console.log('Processed string (Obsidian images converted to HTML)', processedContentString);
    const { content, frontmatter }=await compileMDX({
        source: processedContentString,
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
            }
        }
    });

    return { content, frontmatter, notFound, urlTitle };
}

