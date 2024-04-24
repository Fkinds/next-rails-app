export const getSingleItemData = async( url : string ) => {
  const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseurl}/${url}`)
  const data = await res.json()
  console.log(data)
  return data
}
