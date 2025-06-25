import { promises as fs } from 'fs';
import path from 'path';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { compileMDX } from 'next-mdx-remote/rsc';
import React, { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { TbExternalLink as OpenInNewTabIcon } from "react-icons/tb";
 
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
    console.log(processedContentString);
    const { content, frontmatter }=await compileMDX({
        source: processedContentString,
        options: {
            mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex]
            }
        },
        components: {
            h1(props: ComponentPropsWithoutRef<'h1'>) {
                return <h1 className='font-medium text-center' {...props} />;
            },
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

    return <div className='j_container'>
        {
            notFound
            ? <div>This note could not be found. Either it has not been created yet, was deleted, or was never created.</div>
            : content
        }
    </div>;
}

function obsidianImageToHTML(content: string): string {
    return content.replaceAll(
        /\!\[\[([^|]+?)(?:\|(\d+))?\]\]/g,
        (_, url: string, width: string)=>{
            const src=`/media/${url}`;

            if (url.endsWith('.pdf')) {
                return `<PDF src="${src}" />`;
            } else {
                return `<img src="${src}"${ width ? ` width="${width}" ` : ' ' }/>`;
            }
        }
    );
}

