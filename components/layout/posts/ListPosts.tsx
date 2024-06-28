import { getPosts } from "../../../actions/postServerActions";
import DeletePost from "./DeletePost";

const ListPosts = async () => {

    const posts = await getPosts()

    if(posts.success){
        return (
            <div className="flex flex-col max-w-[500px] m-auto">
                {posts.success.map((post: any)=>{
                    return <div key={post.title} className="my-2 flex items-center gap3 justify-between w-full rounded p-2 border-b">
                        <span>{post.title}</span>
                        <div className="flex gap-2 items-center">
                            <div>E</div>
                            <DeletePost post={post} />
                        </div>
                        </div>
                })}
            </div>
        )
    }

    return (
        <div>
            Enter
        </div>
    );
}

export default ListPosts;