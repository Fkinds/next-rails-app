import { Session } from "next-auth"

export const registerAddress = async(formData:FormData) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/addresses`,{
    method: "POST",
    body: formData,
  })
  // const address = res.json();
  // return address
}
