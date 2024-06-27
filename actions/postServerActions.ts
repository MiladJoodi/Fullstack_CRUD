"use server"

import prismadb from "../lib/prismadb"
import { PostSchema, PostSchemaType } from "../schemas/PostSchema"

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
        return { success: 'Post created' }
    } catch (error) {
        return { error: "Server error!" }
    }
}