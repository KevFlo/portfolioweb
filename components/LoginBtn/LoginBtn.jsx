import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
  const { data: session } = useSession()
  // you can fish more data here 
  

  if (session) {
    return (
      <>
   /\/\
  / /  \ 
 / / /\ \
 \ \/ / /
  \  / /
   \/\/<br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
\ \/\ \/\ \/\ \/ /
 \/ /\/ /\/ /\/ /
 / /\/ /\/ /\/ /\
/ /\ \/\ \/\ \/\ 
    <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}