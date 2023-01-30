import { useParams } from "@remix-run/react";

// https://reactrouter.com/en/6.8.0/hooks/use-params#useparams
function Post(): JSX.Element {
  const params = useParams();

  return (
    <div>
      <h1>Post {params.postId}</h1>
    </div>
  );
}

export default Post;
