"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { PostSchema, PostSchemaType } from "../../../schemas/PostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../form/FormField";
import { useState } from "react";
import Button from "../../form/Button";

const PostForm = () => {
    const [loading, setLoading] = useState()

    const { register, handleSubmit, reset, formState: {errors} } = useForm<PostSchemaType>({
        resolver: zodResolver(PostSchema)
    })

    const onSubmit: SubmitHandler<PostSchemaType> = (data)=>{
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField id="title" register={register} errors={errors} placeholder="Title" disabled={loading}  />
            <Button label="Submit" />
        </form>
    );
}

export default PostForm;  