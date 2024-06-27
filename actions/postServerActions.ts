"use server"

import { revalidatePath } from "next/cache"
import prismadb from "../lib/prismadb"
import { PostSchema, PostSchemaType } from "../schemas/PostSchema"
import { Post } from "@prisma/client"

// Create Post
export const createPost = async (values: PostSchemaType) => {
    const validatedFields = PostSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: "Invalid field" }
    }

    const { title } = validatedFields.data

    try {
        await prismadb.post.create({
            data: {
                title
            }
        })
        revalidatePath("/");
        return { success: 'Post created' }
    } catch (error) {
        return { error: "Server error!" }
    }
}

// Get posts
export const getPosts = async ()=> {
    try{
        const posts = await prismadb.post.findMany({
            orderBy: {
                postedAt: 'desc'
            }
        })

        revalidatePath("/");
        return {success: posts}
    } catch(error){
        return {error: "Server error!"}
    }
}

// Delete
export const deletePost = async(post: Post)=> {
    try {
        await prismadb.post.delete({
            where: {
                id: post.id
            }
        })
        revalidatePath("/")
        return {success: "Post deleted"}
    } catch(error){
        return {error: "Server Error!"}
    }
}