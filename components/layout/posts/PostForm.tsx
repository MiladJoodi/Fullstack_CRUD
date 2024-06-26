"use client"
import { useForm } from "react-hook-form";
import { PostSchema, PostSchemaType } from "../../../schemas/PostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../form/FormField";
import { useState } from "react";

const PostForm = () => {
    const [loading, setLoading] = useState()

    const { register, handleSubmit, reset, formState: {errors} } = useForm<PostSchemaType>({
        resolver: zodResolver(PostSchema)
    })

    return (
        <form>
            <FormField id="title" register={register} errors={errors} placeholder="Title" disabled={loading} type="password" />
        </form>
    );
}

export default PostForm;  