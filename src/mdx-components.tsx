import React, { ComponentPropsWithoutRef } from 'react';
import type { MDXComponents } from 'mdx/types';
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1(props: ComponentPropsWithoutRef<'h1'>) {
            return <h1 className='font-medium pt-2 mb-0' {...props} />;
        },
        ...components,
    }
}

