"use client"

import { Post } from "@prisma/client";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { MdDelete } from "react-icons/md";

const DeletePost = ({post}: {post: Post}) => {

    const [loading, setLoading] = useState(false);

    return (
        <button>
            {!loading && <MdDelete size={20} />}
            {loading && <ImSpinner size={20} />}
        </button>
    );
}

export default DeletePost;