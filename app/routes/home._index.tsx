import { Outlet } from "react-router";
import { MessageComponent } from "~/components/message-component";

export default function Home() {
  // /home
  // 管理用のページ
  // 管理の候補のサーバーを全て表示する
  // /home/:serverId でサーバーの詳細を表示する
  // /home/:serverId とは、headerなどは共通の物を使う
  return (
    <div>
      <MessageComponent message={"Home"} />
      <Outlet />
    </div>
  );
}
