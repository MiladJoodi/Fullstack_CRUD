import { cn } from "../../lib/utils";

interface HeadingProps {
    title: string,
    center?: boolean,
    lg?: boolean
}


const Header = ({title, center, lg}: HeadingProps) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            {lg && <h1 className={cn("font-bold text-4xl my-2")}>{title}</h1>}
            
        </div>
    );
}

export default Header;