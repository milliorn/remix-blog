import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

// https://remix.run/docs/en/v1/route/loader#loader
export const loader = async () => {
  //console.log(123456789);
  const data = {
    // https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany
    posts: await db.post.findMany({
      take: 10,
      select: { id: true, title: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    }),
  };

  return data;
};

// https://remix.run/docs/en/v1/hooks/use-loader-data#useloaderdata
function PostItems(): JSX.Element {
  const { posts } = useLoaderData();

  return (
    <>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/new" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
              {new Date(post.createdAt).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostItems;
