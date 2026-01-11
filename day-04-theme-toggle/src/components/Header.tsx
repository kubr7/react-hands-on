interface HeaderProps {
    title?: string;
}

const now = new Date();

const formatDigits = (value: number | string) =>
    value.toString().padStart(2, "0").split("");

export default function Header({ title = "Theme Toggle" }: HeaderProps) {
    const date = formatDigits(now.getDate());
    const month = formatDigits(now.getMonth() + 1);
    const year = now.getFullYear().toString().split("");

    const hours = formatDigits(now.getHours());
    const minutes = formatDigits(now.getMinutes());
    const seconds = formatDigits(now.getSeconds());

    return (
        <header className="header">
            <h1>{title}</h1>

            <div className="odometer">
                {/* DATE */}
                <div className="odometer-group">
                    {date.map((d, i) => (
                        <span key={`d-${i}`} className="digit">{d}</span>
                    ))}
                    <span className="separator">:</span>
                    {month.map((d, i) => (
                        <span key={`m-${i}`} className="digit">{d}</span>
                    ))}
                    <span className="separator">:</span>
                    {year.map((d, i) => (
                        <span key={`y-${i}`} className="digit">{d}</span>
                    ))}
                </div>

                {/* TIME */}
                <div className="odometer-group">
                    {hours.map((d, i) => (
                        <span key={`h-${i}`} className="digit">{d}</span>
                    ))}
                    <span className="separator">:</span>
                    {minutes.map((d, i) => (
                        <span key={`m-${i}`} className="digit">{d}</span>
                    ))}
                    <span className="separator">:</span>
                    {seconds.map((d, i) => (
                        <span key={`s-${i}`} className="digit">{d}</span>
                    ))}
                </div>
            </div>
        </header>
    );
}
