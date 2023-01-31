import { redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

// // https://remix.run/docs/en/v1/route/loader#loader
export const loader = async ({ params }: any) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });

  if (!post) throw new Error("Post not found");

  const data = { post };
  return data;
};

// // https://remix.run/docs/en/v1/route/action#action
export const action = async ({ request, params }: any) => {
  const form = await request.formData();

  if (form.get("_method") === "delete") {
    const post = await db.post.findUnique({
      where: { id: params.postId },
    });

    if (!post) throw new Error("Post not found");

    await db.post.delete({ where: { id: params.postId } });

    return redirect("/posts");
  }
};

// https://remix.run/docs/en/v1/hooks/use-loader-data#useloaderdata
function Post(): JSX.Element {
  const { post } = useLoaderData();

  return (
    <div>
      <div className="page-header">
        <h1>{post.title}</h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>
      <div className="page-content">{post.body}</div>
      <div className="page-footer">
        <form method="POST">
          <input type="hidden" name="_method" value="delete" />
          <button className="btn-delete">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
