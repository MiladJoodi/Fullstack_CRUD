import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

interface FormFieldProps{
    id: string;
    type?: string;
    disabled?: string;
    placeholder: string;
    register: UseFormRegister<FieldValues>
    errors: FieldError
}

const FormField = ({id, type, disabled, register, errors, placeholder }: FormFieldProps) => {
    return (
        <div>
            <input />
        </div>
    );
}

export default FormField;