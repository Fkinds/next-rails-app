import { redirect } from "next/navigation"

export const registrationCustomer = async (formData: FormData) => {
  const customerObject = {
    first_name: formData.get("first_name"),
    first_name_kana: formData.get("first_name_kana"),
    last_name: formData.get("last_name"),
    last_name_kana: formData.get("last_name_kana"),
    zip_code: formData.get("zip_code"),
    email: formData.get("email"),
    address: formData.get("address"),
    phone_number: formData.get("phone_number"),
    password: formData.get("password"),
    password_confirmation: formData.get("password_confirmation")
  }
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/auth`, {
    method: "POST",
    body: formData
  });
  // console.log(customerObject)
  redirect('../sessions/new');
}
