import { Outlet } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>ホームの共通部分</h1>
      <Outlet />
    </div>
  );
}
