import { paramsType } from "@/app/_components/items/show"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const editSingleAddressData = async (formData: FormData, { params }: paramsType) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/addresses/${params.id}`, {
    method: "PATCH",
    body: formData
  })
  revalidateTag('addresses')
  redirect('/mypage/address')
}
