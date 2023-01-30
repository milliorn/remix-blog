import { Link, useLoaderData } from "@remix-run/react";

// https://remix.run/docs/en/v1/route/loader#loader
export const loader = () => {
  //console.log(123456789);
  const data = {
    posts: [
      { id: 1, title: "Post 1", body: "This is a test post" },
      { id: 2, title: "Post 2", body: "This is a test post" },
      { id: 3, title: "Post 3", body: "This is a test post" },
    ],
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
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostItems;
