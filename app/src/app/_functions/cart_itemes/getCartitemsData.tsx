export const getCartItemsData = async() => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/cart_items`,{
    next: { tags: ['cartItems']}
  })
  const data = await res.json();
  return  data
}
