import { loginCustomer } from "@/functions/customer/loginCustomer";


export const LoginButton = async () => {
  const handleAction = async (formData: FormData) => {
    "use server"
    const res = await loginCustomer(formData);
  };
  return (
    <>
      <form action={handleAction}>
        <label>メール</label><br />
        <input type="email" name="email" /><br />
        <label>パスワード</label><br />
        <input type="password" name="password" /><br />
        <button type="submit">ログイン</button><br />
      </form>
    </>
  )
}
