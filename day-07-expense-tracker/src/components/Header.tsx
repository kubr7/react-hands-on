interface HeaderProps {
    title?: string;
}

export default function Header({ title = "Expense Tracker" }: HeaderProps) {
    return (
        <header className="header">
            <h1>{title}</h1>
        </header>
    );
}
