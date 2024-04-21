import { registrationCustomer } from "@/functions/customer/registrationCustomer";


export const RegistrationButton = async () => {
  const handleAction = async (formData: FormData) => {
    "use server";
    const res = await registrationCustomer(formData);
  };
  return (
    <>
      <form action={handleAction}>
        <label >姓</label><br />
        <input type="text" name="first_name" /><br />
        <label >名</label><br />
        <input type="text" name="last_name" /><br />
        <label >姓(カナ)</label><br />
        <input type="text" name="first_name_kana" /><br />
        <label >名(カナ)</label><br />
        <input type="text" name="last_name_kana" /><br />
        <label >メール</label><br />
        <input type="text" name="email" /><br />
        <label >アドレス</label><br />
        <input type="text" name="address" /><br />
        <label >郵便番号</label><br />
        <input type="number" name="zip_code" /><br />
        <label >電話番号</label><br />
        <input type="number" name="phone_number" /><br />
        <label >パスワード</label><br />
        <input type="password" name="password" /><br />
        <label >確認用パスワード</label><br />
        <input type="password" name="password_confirmation" /><br />
        <button type="submit">新規登録</button>
      </form>
    </>
  )
}
