"use server"

import { revalidatePath } from "next/cache"
import prismadb from "../lib/prismadb"
import { PostSchema, PostSchemaType } from "../schemas/PostSchema"

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