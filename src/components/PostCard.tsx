import { Post } from "@/interfaces/interfaces";
import Link from "next/link";

interface Props {
  post: Post;
}

function PostCard({ post }: Props) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="bg-neutral-800 p-5 hover:bg-neutral-900 transition-colors ease-in last-of-type:mb-10 rounded"
    >
      <h3 className="text-xl sm:text-2xl font-medium pb-2 border-b">
        <span>{post.id}.</span> {post.title}
      </h3>
      <p className="pt-2 text-lg sm:text-xl text-neutral-200">{post.body}</p>
    </Link>
  );
}

export default PostCard;
