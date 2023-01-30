import { Outlet, LiveReload, Link, Links, Meta } from "@remix-run/react";
import globalStylesUrl from "~/styles/global.css";

// https://remix.run/docs/en/v1/guides/accessibility#links
export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

// https://remix.run/docs/en/v1/route/meta#meta
export const meta = () => {
  const description = "My personal blog";
  const keywords = "remix, react, typescript, node, isbot, eslint";

  return {
    description,
    keywords,
  };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/route/meta#meta
function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>{title ? title : "Remix Blog"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}

// https://remix.run/docs/en/v1/route/error-boundary
export function ErrorBoundary({ error }) {
  return (
    <Document>
      <Layout>
        <h1>Error: {typeof error}</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </Layout>
    </Document>
  );
}
