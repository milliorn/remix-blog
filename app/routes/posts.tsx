import { Outlet } from "@remix-run/react";

// https://reactrouter.com/en/6.8.0/components/outlet#outlet
export default function Posts(): JSX.Element {
  return (
    <>
      <Outlet />
    </>
  );
}
