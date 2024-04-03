import { registrationCustomer } from "../functions/customer/registrationCustomer";

export const RegistrationButton = async() => {
  const handleAction = async (formData: FormData) => {
    "use server";
    const res = await registrationCustomer(formData);
  };
  return (
    <>
      <form action={handleAction}>
        <input type="text" name="first_name" />
        <input type="text" name="first_name_kana" />
        <input type="text" name="last_name" />
        <input type="text" name="last_name_kana"/>
        <input type="text" name="email" />
        <input type="text" name="address" />
        <input type="number" name="phone_number" />
        <input type="password" name="password" />
        <input type="tpassword" name="password_confirmation" />
        <button type="submit">新規登録</button>
      </form>
    </>
  )
}
