import { redirect } from "next/navigation";

export const logoutCustomer = async () => {
  "use server";
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/auth/sign_out`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = res.json();
  redirect('/');
}
