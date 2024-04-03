import { redirect } from "next/navigation";

export const logoutCustomer = async() => {
  "use server";
  const res = await fetch('http://localhost:3000/auth/sign_out',{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  redirect('/');
}
