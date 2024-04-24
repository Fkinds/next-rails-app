import { getSingleItemData } from "@/app/_functions/items/getSingleItemData";
export type paramsType = {
  params: {
    id: number
  }
}

export const Show = async ({ params }: paramsType) => {
  const url = `items/${params.id}`
  const item = await getSingleItemData(url);
  return (
    <>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </>
  )
}


