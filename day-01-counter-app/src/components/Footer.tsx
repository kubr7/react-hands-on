import { Copyright } from "lucide-react";

interface FooterProps {
    title?: string;
}

export default function Footer({ title = "React" }: FooterProps) {
    return (
        <footer className="footer">
            <p className="footer-content">
                <Copyright className="footer-icon" />
                <span>
                    {new Date().getFullYear()} • Built with {title}
                </span>
            </p>
        </footer>
    );
}
