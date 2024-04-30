import { deleteCartItemsData } from "@/app/_functions/cart_itemes/deleteCartItemsData"
import { deleteSingleCartItemData } from "@/app/_functions/cart_itemes/deleteSingleCartItemData";
import { getCartItemsData } from "@/app/_functions/cart_itemes/getCartitemsData";
import { updateCartItemAmountData } from "@/app/_functions/cart_itemes/updateCartItemAmountData";
import { revalidateTag } from "next/cache";

export type cartItemType = {
  id: number,
  item_id: string,
  amount: string
}

const Index = async () => {
  revalidateTag('cartItems');
  const cartItems = await getCartItemsData();

  const cartHandleAction = async () => {
    'use server'
    const res = await deleteCartItemsData()
  }
  const cartItemHandleAction = async (formData: FormData) => {
    'use server'
    const res = await deleteSingleCartItemData(formData)
  }
  const itemHandleAction = async (formData: FormData) => {
    'use server'
    const res = await updateCartItemAmountData(formData)
  }
  return (
    <>
      <form action={cartHandleAction}>
        <button type="submit">カートを空にする</button>
      </form>
      {cartItems.map((cartItem: cartItemType) => (
        <ul key={cartItem.id}>
          <link href={`mypage/cart_item`} />
          <form action={cartItemHandleAction}>
            <input type="hidden" name="id" value={cartItem.id} />
            <button type="submit">削除</button>
          </form>
          <form action={itemHandleAction}>
            {cartItem.amount}<br />
            <input type="hidden" name="id" value={cartItem.id}/>
            <input type="hidden" name="item_id" value={cartItem.item_id} />
            <select name="amount" defaultValue={cartItem.amount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <button type="submit">変更</button>
          </form>
        </ul>
      ))}
    </>
  )
}

export default Index
