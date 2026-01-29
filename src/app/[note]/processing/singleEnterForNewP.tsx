export default function singleEnterForNewP(str: string): string {
    return str.replace(/\u00A0/g, ' '); //removes the LaTeX incompatible input warning (nbsp)
}

