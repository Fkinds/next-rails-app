import { getAddressesData } from "@/app/_functions/mypage/getAddressesData";
import { registerAddress } from "@/app/_functions/mypage/registerAddress";
import Link from "next/link";

export type addressType = {
  id: number
  name: string,
  address: string,
  zip_code: number,
  customer_id: string
}

export const Address = async () => {
  
  const addresses = await getAddressesData();

  const handleAction = async (formData: FormData) => {
    'use server'
    const res = await registerAddress(formData)
  }
  return (
    <div>
      <h2>配送先一覧</h2>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>
            <Link href={`/mypage/address/${address.id}/edit`}>配送先情報編集</Link><br />
            {address.name}<br />
            {address.address}<br />
            {address.zip_code}<br />
          </li>
        ))}
      </ul>
      <p>address</p>
      <form action={handleAction}>
        <p>宛名</p>
        <input type="text" name="name" /> <br />
        <p>配送先</p>
        <input type="string" name="address" /><br />
        <p>郵便番号</p>
        <input type="numbedr" name="zip_code" /><br />
        <button type="submit">新規登録</button>
      </form>
    </div>
  )
}
