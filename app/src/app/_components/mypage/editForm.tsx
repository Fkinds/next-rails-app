import { getSingleAddressData } from "@/app/_functions/mypage/getSingleAddressData";
import { paramsType } from "../items/show"
import { editSingleAddressData } from "@/app/_functions/mypage/editSingleAddressData";

export const EditForm = async( { params } : paramsType ) => {
  const addressObject = await getSingleAddressData({params})
  console.log(addressObject);
  const handleAction = async(formData:FormData) => {
    'use server'
    const res = await editSingleAddressData(formData,{params});
  }
  return (
    <>
      <form action={handleAction}>
        <input type="hidden" name="id" value={addressObject.id} />
        <input type="text" name="name" value={addressObject.name} />
        <input type="text" name="address" value={addressObject.address}/>
        <input type="number" name="zip_code" value={addressObject.zip_code} />
      </form>
    </>
  )
}
