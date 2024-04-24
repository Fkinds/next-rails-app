import { signIn } from "../auth";

export const LoginButton = async () => {
  const handleAction = async () => {
    "use server"
    await signIn("google")
  };
  return (
    <>
      <form action={handleAction}>
        <button type="submit">Signin with Google</button>
      </form>
    </>
  )
}
