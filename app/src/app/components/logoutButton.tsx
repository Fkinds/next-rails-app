import { signOut } from "../auth";

export const LogoutButton = async () => {
  const handleAction = async () => {
    "use server";
    const res = await signOut();
  };
  return (
    <>
      <form action={handleAction}>
        <button>ログアウト</button>
      </form>
    </>
  )
}
