import { MessageComponent } from "~/components/message-component";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader(
  {
    // 今回はとりあえず引数は無し
  }: Route.LoaderArgs,
) {
  return { message: "hello" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  // /
  // とっぷぺーじ
  // /loginへのリンクを表示する
  // app/routes/~ が、実際に動くページ
  return (
    <div>
      <h1>Index</h1>
      <MessageComponent message={loaderData.message} />
    </div>
  );
}
