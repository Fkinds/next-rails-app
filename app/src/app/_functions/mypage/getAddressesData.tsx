import { addressType } from "@/app/_components/mypage/address";

export const getAddressesData = async () => {
  const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseurl}/addresses`, {
    next: { tags: ['addresses'] }
  })
  const data: addressType[] = await res.json();
  return data
}
