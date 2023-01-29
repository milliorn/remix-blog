import { Outlet, LiveReload } from "@remix-run/react";

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : "Remix Blog"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
