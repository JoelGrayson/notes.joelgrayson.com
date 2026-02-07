export default function removeLatexNbsp(str: string): string {
    return str.replace(/(?<!\n)\n(?!\n)/g, '\n\n'); //convert single newlines to paragraph breaks
}

