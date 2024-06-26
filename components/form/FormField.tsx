import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";
import { cn } from "../../lib/utils";

interface FormFieldProps<T extends FieldValues> {
    id: string;
    type?: string;
    disabled?: boolean;
    placeholder: string;
    register: UseFormRegister<T>
    errors: FieldErrors
}

const FormField = <T extends FieldValues>({ id, type, disabled, register, errors, placeholder }: FormFieldProps<T>) => {

    const message = errors[id] && errors[id]?.message as string

    return (
        <div>
            <input
                autoComplete="off"
                id={id}
                disabled={disabled}
                {...register(id as Path<T>)}
                placeholder={placeholder}
                type={type}
                className={cn("w-full p-3 my-2 outline-none rounded-md disabled:opacity-70 disabled:cursor-not-allowed border border-slate-300", errors[id] && "border-rose-400")}
            />
            {message && <span className="text-sm text-rose-400">{message}</span>}
        </div>
    );
}

export default FormField;