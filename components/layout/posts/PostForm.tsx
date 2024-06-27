"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { PostSchema, PostSchemaType } from "../../../schemas/PostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../form/FormField";
import { useState } from "react";
import Button from "../../form/Button";
import { BiArrowFromLeft } from "react-icons/bi";
import { cn } from "../../../lib/utils";
import Header from "../../common/Header";

const PostForm = () => {
    const [loading, setLoading] = useState()

    const { register, handleSubmit, reset, formState: {errors} } = useForm<PostSchemaType>({
        resolver: zodResolver(PostSchema)
    })

    const onSubmit: SubmitHandler<PostSchemaType> = (data)=>{
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cn("flex flex-col max-w-[500px] m-auto mt-8")}>
            <Header title={"Create Post"} />
            <FormField id="title" register={register} errors={errors} placeholder="Title" disabled={loading}  />
            <Button label={loading ? "Submitting" : "Submit"} disabled={loading} icon={loading ? undefined : BiArrowFromLeft} />
        </form>
    );
}

export default PostForm;  