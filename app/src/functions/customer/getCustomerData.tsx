export const getCustomerData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string
  const response = await fetch(`${baseUrl}/customers/session`,{
    cache: "no-store"
  })
  const current_customer = await response.json();
  console.log(current_customer)
  return current_customer
}
