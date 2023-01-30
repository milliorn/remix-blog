import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";

// https://remix.run/docs/en/v1/route/action#action
export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");

  const fields = { title, body };

  // console.log(fields);

  // https://remix.run/docs/en/v1/utils/redirect#redirect
  return redirect("/posts");
};

export default function NewPost(): JSX.Element {
  return (
    <>
      <div className="page-header">
        <h1>New Post</h1>
        <Link to="/posts" className="bt btn-reverse">
          Back
        </Link>
      </div>

      <div className="page-content">
        <form method="POST">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>

          <div className="form-control">
            <label htmlFor="body">Post Body</label>
            <textarea name="body" id="body" />
          </div>
          <button type="submit" className="btn btn-block">
            Create Post
          </button>
        </form>
      </div>
    </>
  );
}

// https://remix.run/docs/en/v1/route/error-boundary
export function ErrorBoundary({ error }: { error: any }): JSX.Element {
  return (
    <div>
      <h1>Error: {typeof error}</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}
