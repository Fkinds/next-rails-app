import { logoutCustomer } from "@/functions/customer/logoutCustomer";


export const LogoutButton = async () => {
  const handleAction = async () => {
    "use server";
    const res = await logoutCustomer();
  };
  return (
    <>
      <form action={handleAction}>
        <button>ログアウト</button>
      </form>
    </>
  )
}
