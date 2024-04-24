import Link from "next/link"

export const Mypage = async() => {
  return (
    <>
      <p>Mypage</p>
      <Link href="mypage/address">配送先</Link>
    </>
  )
}
