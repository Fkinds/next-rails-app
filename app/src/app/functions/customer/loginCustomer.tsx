'use server'

import { redirect } from "next/navigation";

export const loginCustomer = async(formData: FormData) => {
  const customerObject = {
    email: formData.get("email"),
    password: formData.get("password")
  }
  const res = await fetch('http://localhost:3000/auth/sign_in',{
    method: "POST",
    body: formData,
  });
  redirect('../customer/my_page')
}
