import { revalidateTag } from "next/cache";

export const deleteCartItemsData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/cart_items/destroy_all`, {
    method: "DELETE",
  });
  revalidateTag('cartItems')
};
