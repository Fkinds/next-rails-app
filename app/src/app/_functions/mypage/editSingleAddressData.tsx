import { paramsType } from "@/app/_components/items/show"

export const editSingleAddressData = async(formData:FormData,{params}:paramsType) => {
  console.log(formData)
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/addresses/${params.id}`)
  return (
    <div>editSingleAddressData</div>
  )
}
