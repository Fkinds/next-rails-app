import { CreateCartItemData } from "@/app/_functions/items/CreateCartItemData";
import { getSingleItemData } from "@/app/_functions/items/getSingleItemData";
export type paramsType = {
  params: {
    id: number
  }
}

export const Show = async ({ params }: paramsType) => {
  const url = `items/${params.id}`
  const item = await getSingleItemData(url);
  const handleAction = async (formData: FormData) => {
    'use server'
    const res = await CreateCartItemData(formData);
  }
  return (
    <>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <form action={handleAction}>
        <input type="hidden" name="item_id" value={item.id} />
        <select name="amount">
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
        <button type="submit">カートに入れる</button>
      </form>
    </>
  )
}


