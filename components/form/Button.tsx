import { IconType } from "react-icons";
import { cn } from "../../lib/utils";

interface ButtonProps {
    label: string;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    className?: string;
    icon?: IconType;
    type?: 'submit' | 'reset' | 'button' | undefined;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>)=> void;
}

const Button: React.FC<ButtonProps> = ({label, disabled, outline, small, className, icon: Icon, type, onClick}) => {
    return (
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn("disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-auto border-slate-300 flex items-center justify-center gap-2 py-3 px-5 border-2 bg-slate-700 text-white my-2",
            outline && "bg-transparent text-slate-700",
            small && "text-small py-1 px-2 border-[1px]",
            className && className
        )}
        >
            {Icon && <Icon size={20} />}
            {label}
            </button>
    );
}

export default Button;