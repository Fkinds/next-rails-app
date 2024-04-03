import { loginCustomer } from "../functions/customer/loginCustomer";

export const LoginButton = async() => {
  const handleAction = async (formData: FormData) => {
    "use server"
    const res = await loginCustomer(formData);
  };
  return (
    <>
      <form action={handleAction}>
        <input type="email" name="email"/>
        <input type="password" name="password"/>
        <button type="submit">ログイン</button>
      </form>
    </>
  )
}
