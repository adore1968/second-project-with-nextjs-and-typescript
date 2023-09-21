import { Post } from "@/interfaces/interfaces";
import axios, { AxiosError } from "axios";
import PostsPage from "../page";
import { Suspense } from "react";
import LoadingPage from "@/app/loading";

interface Props {
  params: {
    id: string;
  };
}

const getPost = async (id: string) => {
  try {
    const { status, data } = await axios<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (status === 200) {
      return data;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
  }
};

async function PostPage({ params }: Props) {
  const { id } = params;
  const post = await getPost(id);

  return (
    <section className="px-5 sm:px-0">
      {post && (
        <div className="flex flex-col gap-10">
          <div className="bg-neutral-900 p-5 container mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-medium pb-2 border-b">
              <span>{post.id}.</span> {post.title}
            </h3>
            <p className="pt-2 text-lg sm:text-xl text-neutral-200">
              {post.body}
            </p>
          </div>
          <Suspense fallback={<LoadingPage />}>
            <PostsPage />
          </Suspense>
        </div>
      )}
    </section>
  );
}

export default PostPage;
