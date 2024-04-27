import { redirect } from "next/navigation"

export const CreateCartItemData = async (formData: FormData) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/cart_items`, {
    method: "POST",
    body: formData
  })
  redirect('/mypage/cart_item')
}
