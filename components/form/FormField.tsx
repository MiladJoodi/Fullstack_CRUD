import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
    id: string;
    type?: string;
    disabled?: boolean;
    placeholder: string;
    register: UseFormRegister<T>
    errors: FieldErrors
}

const FormField = <T extends FieldValues> ({ id, type, disabled, register, errors, placeholder }: FormFieldProps<T>) => {
    return (
        <div>
            <input autoComplete="off" id={id} disabled={disabled} {...register(id as Path<T>)} placeholder={placeholder} type={type} />
        </div>
    );
}

export default FormField;