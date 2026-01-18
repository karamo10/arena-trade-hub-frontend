


export default function UserLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <section>
            {/* user navigation */}
            {children}
        </section>
    )
}