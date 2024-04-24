import { Show } from "@/app/_components/items/show"

const Page = async ({ params }: { params: { id: number } }) => {
  return (
    <>
      <Show params={params} />
    </>
  )
}

export default Page
