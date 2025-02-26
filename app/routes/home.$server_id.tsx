import { useParams } from "react-router";

export default function HomeWithServerId() {
  const { server_id } = useParams<{ server_id: string }>();
  return <div>Home with server id: {server_id}</div>;
}
