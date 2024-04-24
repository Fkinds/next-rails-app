'use server'

import { auth } from "@/app/auth"
import { revalidateTag } from "next/cache";

export const registerAddress = async(formData:FormData) => {
  const session = await auth();
  const addressObject = {
    name: formData.get("name"),
    address: formData.get("address"),
    zip_code: formData.get("zip_code"),
    customer_id: session?.user?.id
  }
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/addresses`,{
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(addressObject),
  })
  revalidateTag('addresses')
  // const address = res.json();
  // return address
}
