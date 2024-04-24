import { getItemsData } from "@/app/_functions/items/getItemsData"
import Link from "next/link";
import { Key } from "react";

type itemType = {
  id: Key,
  name: String,
}

export const Index = async () => {
  const items = await getItemsData();
  return (
    <>
      <p>getItems</p>
      {items.map((item: itemType) => (
        <ul key={item.id}>
          <Link href={`items/${item.id}`} legacyBehavior><a>{item.name}</a></Link>
        </ul>
      ))}
    </>
  )
}
