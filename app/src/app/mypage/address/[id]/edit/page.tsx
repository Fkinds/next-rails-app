import { EditForm } from "@/app/_components/mypage/editForm"

const page = ( { params } : { params : { id : number }}) => {
  return (
    <>
      <EditForm params = { params }/>
    </>
  )
}

export default page
