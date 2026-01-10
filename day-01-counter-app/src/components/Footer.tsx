interface FooterProps {
    title?: string;
}

export default function Footer({ title = "React" }: FooterProps) {
    return (
        <footer className="footer">
            <p>
                © {new Date().getFullYear()} • Built with {title}
            </p>
        </footer>
    );
}