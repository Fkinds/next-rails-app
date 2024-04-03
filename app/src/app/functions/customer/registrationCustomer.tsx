import { redirect } from "next/navigation"

export const registrationCustomer = async(formData: FormData) => {
  const customerObject = {
    first_name: formData.get("first_name"),
    first_name_kana: formData.get("first_name_kana"),
    last_name: formData.get("last_name"),
    last_name_kana: formData.get("last_name_kana"),
    email: formData.get("email"),
    address: formData.get("address"),
    phone_number: formData.get("phone_number"),
    password: formData.get("password"),
  }
  const res = await fetch('http://localhost:3000/auth',{
    method: "POST",
    body: formData
  });
  redirect('../customer/my_page');
}
