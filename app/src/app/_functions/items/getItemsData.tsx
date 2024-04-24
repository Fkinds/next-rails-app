export const getItemsData = async() => {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${url}/items`,{
    next: { revalidate: 3600 }
  })
  const data = await res.json()
  return data
}
