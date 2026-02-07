export default function stripComments(str: string) {
    return str.replace(/<!--[\s\S]*?-->/g, '');
}

