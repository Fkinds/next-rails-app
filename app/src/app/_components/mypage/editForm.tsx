import { getSingleAddressData } from "@/app/_functions/mypage/getSingleAddressData";
import { paramsType } from "../items/show"
import { editSingleAddressData } from "@/app/_functions/mypage/editSingleAddressData";
import { revalidateTag } from "next/cache";

export const EditForm = async ({ params }: paramsType) => {
  revalidateTag('SingleAddressData')
  const addressObject = await getSingleAddressData({ params })
  const handleAction = async (formData: FormData) => {
    'use server'
    const res = await editSingleAddressData(formData, { params });
  }
  return (
    <>
      <form action={handleAction}>
        <input type="hidden" name="id" defaultValue={addressObject.id} />
        宛名<br />
        <input type="text" name="name" defaultValue={addressObject.name} /><br />
        配送先<br />
        <input type="text" name="address" defaultValue={addressObject.address} /><br />
        郵便番号<br />
        <input type="number" name="zip_code" defaultValue={addressObject.zip_code} /><br />
        <button type="submit">更新ボタン</button>
      </form>
    </>
  )
}
