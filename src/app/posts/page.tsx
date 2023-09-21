import PostCard from "@/components/PostCard";
import { Posts } from "@/interfaces/interfaces";
import axios, { AxiosError } from "axios";

const getPosts = async () => {
  try {
    const { status, data } = await axios<Posts>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (status === 200) return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
  }
};

async function PostsPage() {
  const posts = await getPosts();
  return (
    <section className="px-5 sm:px-0">
      <div className="container mx-auto flex flex-col gap-10">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostsPage;
