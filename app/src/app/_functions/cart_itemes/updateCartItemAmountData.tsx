import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const updateCartItemAmountData = async (formData: FormData) => {
  const id = formData.get("id")
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/cart_items/${id}`, {
    method: "PATCH",
    body: formData
  })
  revalidateTag('cartItems')
  redirect('/mypage/cart_item')
}
