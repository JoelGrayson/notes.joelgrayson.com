/*
This is foldable in Obsidian
    * some statement
        deriv
        $2+2=4$
        end deriv

if line.endsWith(deriv)
chomp all lines until you get to a line that ends with end deriv

*/
      
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

