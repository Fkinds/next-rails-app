import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const deleteSingleCartItemData = async (formData: FormData) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const id = formData.get("id")
  const res = await fetch(`${baseUrl}/cart_items/${id}`, {
    method: "DELETE"
  })
  revalidateTag('cartItems')
  redirect('/mypage/cart_item')
}
