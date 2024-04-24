import { registerAddress } from "@/app/_functions/mypage/registerAddress";
import { auth } from "@/app/auth";
import { Session } from "next-auth";

export const Address = async() => {

  const session = await auth();
  console.log(session)
  const handleAction = async(formData:FormData) => {
    'use server'
    const res = await registerAddress(formData)
  }
  return (
    <>
      <p>address</p>
      <form action={handleAction}>
        <input type="text" name="name" /> <br />
        <input type="string" name="address" /><br />
        <input type="numbedr" name="zip_code" /><br />
        <button type="submit">新規登録</button>
      </form>
    </>
  )
}
