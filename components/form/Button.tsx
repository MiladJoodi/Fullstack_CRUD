import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    className?: boolean;
    icon?: IconType;
    type?: 'submit' | 'reset' | 'button' | undefined;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>)=> void;
}

const Button: React.FC<ButtonProps> = ({label, disabled, outline, small, className, icon, type, onClick}) => {
    return (
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn("disabled:opacity-70 disabled:cursor-not-allowed")}
        >
            {label}
            </button>
    );
}

export default Button;