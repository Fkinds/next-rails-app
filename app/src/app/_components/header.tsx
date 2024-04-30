import Link from "next/link"
import { LogoutButton } from "./logoutButton"
import { auth } from "../auth";
import { LoginButton } from "./loginButton";


export const Header = async () => {
  const session = await auth();
  try {
    return (
      <>
        <header>
          {session ? (
            <ul className="flex">
              <li className="mr-6">
                <Link href="/">
                  <button type="button" className="text-blue-500 hover:text-blue-800">LOGO</button>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/mypage">
                  <button type="button" className="text-blue-500 hover:text-blue-800">マイページ</button>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/items">
                  <button type="button" className="text-blue-500 hover:text-blue-800">商品一覧</button>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/mypage/cart_item">
                  <button type="button" className="text-blue-500 hover:text-blue-800">カート</button>
                </Link>
              </li>
              <li className="mr-6">
                <LogoutButton />
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="mr-6">
                <Link href="/">
                  <button type="button" className="text-blue-500 hover:text-blue-800">LOGO</button>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/customers/my_page">
                  <button type="button" className="text-blue-500 hover:text-blue-800">about</button>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/items">
                  <button type="button" className="text-blue-500 hover:text-blue-800">商品一覧</button>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/auth/new">
                  <button type="button" className="text-blue-500 hover:text-blue-800">新規登録</button>
                </Link>
              </li>
              <li className="mr-6">
                <LoginButton />
              </li>
            </ul>
          )
          }
        </header>
      </>
    )
  } catch (error) {
    console.error("Error fetching customer data:", error);
    return null; // or display an error message
  }
}
