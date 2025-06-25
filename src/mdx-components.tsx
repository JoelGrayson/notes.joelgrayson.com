import React, { ComponentPropsWithoutRef } from 'react';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1(props: ComponentPropsWithoutRef<'h1'>) {
            return <h1 className='font-medium pt-2 mb-0' {...props} />;
        },
        PDF({ src, children, width='100%', height='800' }: { src: string, width: number | string, height: number | string, children: React.ReactNode }) {
            return <div>
                <div>
                    <Link href={src} target='_blank'>{children}</Link>
                    
                </div>
                <object type="application/pdf" data={src} width={width} height={height} />
            </div>;
        },
        ...components
    }
}

