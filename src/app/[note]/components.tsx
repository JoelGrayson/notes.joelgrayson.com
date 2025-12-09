export function Title({ title }: { title: string }) {
    return <h1 className='font-medium text-center'>{title}</h1>;
}

export function Container({ children }: { children: React.ReactNode }) {
    return <div className='j_container' style={{ paddingBottom: 60 }}>
        {children}
    </div>;
}

