/*
This is foldable in Obsidian
    * some statement
        deriv
        $2+2=4$
        end deriv

if line.endsWith(deriv)
chomp all lines until you get to a line that ends with end deriv


Turn into:

<deriv>
    $2+2=4$
</deriv>

*/

export default function processDeriv(content: string): string {
    const lines = content.split('\n');
    const result: string[] = [];
    let inDeriv = false;
    let derivContent: string[] = [];

    for (const line of lines) {
        const trimmed = line.trim();

        if (trimmed.endsWith('deriv') && !trimmed.endsWith('end deriv')) {
            // Start of deriv block
            inDeriv = true;
            derivContent = [];
        } else if (trimmed.endsWith('end deriv')) {
            // End of deriv block - append entire Deriv element inline to previous line
            inDeriv = false;
            const content = derivContent.map(l => l.trim()).join(' ');
            if (result.length > 0) {
                result[result.length - 1] += ` <Deriv>${content}</Deriv>`;
            } else {
                result.push(`<Deriv>${content}</Deriv>`);
            }
        } else if (inDeriv) {
            // Inside deriv block - collect content
            derivContent.push('<p>'+line+'</p>');
        } else {
            // Outside deriv block - pass through
            result.push(line);
        }
    }

    return result.join('\n');
}

