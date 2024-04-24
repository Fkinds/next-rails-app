import { getAddressesData } from "@/app/_functions/mypage/getAddressesData";
import { registerAddress } from "@/app/_functions/mypage/registerAddress";

export type addressType= {
  name: string,
  address: string,
  zip_code: number,
  customer_id: string
}

export const Address = async () => {

  const addresses = await getAddressesData();
  console.log(addresses);

  const handleAction = async (formData: FormData) => {
    'use server'
    const res = await registerAddress(formData)
  }
  return (
    <div>
      <h2>配送先一覧</h2>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>
            {address.name}<br />
            {address.address}<br />
            {address.zip_code}<br />
          </li>
        ))}
      </ul>
      <p>address</p>
      <form action={handleAction}>
        <input type="text" name="name" /> <br />
        <input type="string" name="address" /><br />
        <input type="numbedr" name="zip_code" /><br />
        <button type="submit">新規登録</button>
      </form>
    </div>
  )
}
