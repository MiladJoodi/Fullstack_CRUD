"use client"

// import { Post } from "@prisma/client";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { deletePost } from "../../../actions/postServerActions";

const DeletePost = ({post}: {post: any}) => {

    const [loading, setLoading] = useState(false);

    const handleDelete = async (post: any)=> {
        setLoading(true)
        await deletePost(post)
        setLoading(false)
    }

    return (
        <button className="text-slate-500" onClick={()=> handleDelete(post)}>
            {!loading && <MdDelete size={20} />}
            {loading && <ImSpinner size={20} className="animate-spin" />}
        </button>
    );
}

export default DeletePost;