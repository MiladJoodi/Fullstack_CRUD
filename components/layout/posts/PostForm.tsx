"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { PostSchema, PostSchemaType } from "../../../schemas/PostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../form/FormField";
import { useEffect, useState } from "react";
import Button from "../../form/Button";
import { BiArrowFromLeft } from "react-icons/bi";
import { cn } from "../../../lib/utils";
import Header from "../../common/Header";
import { createPost } from "../../../actions/postServerActions";

const PostForm = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | undefined>('')
    const [error, setError] = useState<string | undefined>('')

    const { register, handleSubmit, reset, formState: { errors } } = useForm<PostSchemaType>({
        resolver: zodResolver(PostSchema)
    })

    useEffect(()=>{
        if(success){
            reset()

            const timer = setTimeout(()=> {
                   setSuccess(undefined) 
            }, 2000)

            return ()=> clearTimeout(timer)
        }
    }, [success])

    const onSubmit: SubmitHandler<PostSchemaType> = (data) => {
        setLoading(true)
        createPost(data).then(data => {
            setError(data.error)
            setSuccess(data.success)
        }).finally(() => setLoading(false))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cn("flex flex-col max-w-[500px] m-auto mt-8")}>
            <Header title={"Create Post"} />
            <FormField id="title" register={register} errors={errors} placeholder="Title" disabled={loading} />
            
            {error && <div className="text-sm text-rose-400">{error}</div>}
            {success && <div className="text-sm text-green-400">{success}</div>}
            
            <Button label={loading ? "Submitting" : "Submit"} disabled={loading} icon={loading ? undefined : BiArrowFromLeft} />
        </form>
    );
}

export default PostForm;  