import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

interface FormFieldProps{
    id: string;
    type?: string;
    disabled?: boolean;
    placeholder: string;
    register: UseFormRegister<FieldValues>
    errors: FieldError
}

const FormField = ({id, type, disabled, register, errors, placeholder }: FormFieldProps) => {
    return (
        <div>
            <input autoComplete="off" id={id} disabled={disabled} {...register(id)} placeholder={placeholder} type={type} />
        </div>
    );
}

export default FormField;