import Link from "next/link"
import { LogoutButton } from "./logoutButton"
import { getCustomerSession } from "../functions/customer/getCustomerSession"

export const Header = async() => {
  const session = getCustomerSession();
  return (
    <>
      <header>
        { session ? (
          <>
            <ul className="nav">
              <li className="nav-item p-1">
                <Link href="/">
                  <button type="button" className="btn btn-secondary btn-lg nav-link">LOGO</button>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link href="../customers/my_page">
                  <button type="button" className="btn btn-secondary nav-link">マイページ</button>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link href="../items">
                  <button type="button" className="btn btn-secondary nav-link">商品一覧</button>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link href="../cart_items">
                  <button type="button" className="btn btn-secondary nav-link">カート</button>
                </Link>
              </li>
              <li className="nav-item p-1">
                <LogoutButton/>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="nav">
              <li className="nav-item p-1">
                <Link href="/">
                  <button type="button" className="btn btn-secondary btn-lg nav-link">LOGO</button>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link href="../customers/my_page">
                  <button type="button" className="btn btn-secondary nav-link">about</button>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link href="../items">
                  <button type="button" className="btn btn-secondary nav-link">商品一覧</button>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link href="../auth">
                  <button type="button" className="btn btn-secondary nav-link">新規登録</button>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link href="../sessions/new">
                  <button type="button" className="btn btn-secondary nav-link">ログイン</button>
                </Link>
              </li>
            </ul>
          </>
        ) 
      }
      </header>
    </>
  )
}
