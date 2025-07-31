export default function obsidianImageToHTML(content: string): string {
    return content.replaceAll(
        /\!\[\[([^|]+?)(?:\|(\d+))?\]\]/g,
        (_, url: string, width: string)=>{
            const src=`/media/${url}`;

            if (url.endsWith('.pdf')) {
                return `<PDF src="${src}" />`;
            } else {
                return `<img src="${src}"${ width ? ` width="${width}" ` : ' ' } />`;
            }
        }
    );
}

