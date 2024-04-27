import { deleteCartItemsData } from "@/app/_functions/cart_itemes/deleteCartItemsData"
import { deleteSingleCartItemData } from "@/app/_functions/cart_itemes/deleteSingleCartItemData";
import { getCartItemsData } from "@/app/_functions/cart_itemes/getCartitemsData";
import { revalidateTag } from "next/cache";

export type cartItemType = {
  id: string,
  item_id: string,
  amount: string
}

const Index = async () => {
  revalidateTag('cartItems');
  const cartItems = await getCartItemsData();
  console.log(cartItems)

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
            {cartItem.amount}
            <button type="submit">変更</button>
          </form>
        </ul>
      ))}
    </>
  )
}

export default Index
