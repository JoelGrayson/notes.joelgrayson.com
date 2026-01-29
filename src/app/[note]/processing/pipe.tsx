export const pipe = (...fns: any[]) => (arg: any) => fns.reduce((acc, fn) => fn(acc), arg);
