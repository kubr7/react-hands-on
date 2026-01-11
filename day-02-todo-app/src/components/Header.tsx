interface HeaderProps {
    title?: string;
}

const now = new Date();

export default function Header({ title = "ToDo App" }: HeaderProps) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <p><small>{now.toLocaleDateString()} {now.toLocaleTimeString()}</small></p>
        </header>
    );
}
