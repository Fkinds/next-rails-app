'use server'

import { redirect } from "next/navigation";

export const loginCustomer = async (formData: FormData) => {
  const customerObject = {
    email: formData.get("email"),
    password: formData.get("password")
  }
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/auth/sign_in`, {
    method: "POST",
    body: formData,
  });
  redirect('../customers/my_page')
}
