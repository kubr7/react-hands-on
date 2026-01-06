interface Props {
    value: string;
}

const Display = ({ value }: Props) => {
    return <div className="display">{value || "0"}</div>;
};

export default Display;
