"use client"

import { useState } from "react";
import { MdEdit } from "react-icons/md";

const EditPost = () => {
    const [isEditing, setIsEditing] = useState(false)
    return (
        <>
            {!isEditing && <button className="cursor-pointer text-slate-500">
                <MdEdit size={20} />
                </button>}
        </>
    );
}

export default EditPost;