import Link from "next/link"

export const Mypage = async() => {
  return (
    <>
      <p>Mypage</p>
      <Link href="mypage/edit">顧客情報編集</Link><br />
      <Link href="mypage/address">配送先</Link>
    </>
  )
}
