import { paramsType } from "@/app/_components/items/show"

export const getSingleAddressData = async ({ params }: paramsType) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/addresses/${params.id}`)
  const data = res.json();
  return data
}
