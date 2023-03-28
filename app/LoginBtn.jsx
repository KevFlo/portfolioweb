'use client';
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
  const { data: session } = useSession()
  // you can fish more data here 
  
  // text-white text-center flex flex-wrap break-normal whitespace-pre-wrap ...
  if (session) {
    return (
      <>
      <div className="box-content h-32 w-3/4 p-0 border-4 ..."> 
      <p className="whitespace-normal ...">
      /\/\
  / /  \ 
 / / /\ \
 \ \/ / /
  \  / /
   \/\/

      </p>

   <br />
        <button className=" px-3 py-2 border-0 text-[#141414] border-[#141414] hover:text-white hover:border-white  " onClick={() => signOut()}>Sign out</button>
      </div>
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
    <button className="px-2 py-1 border-0 text-[#141414] border-[#141414] hover:text-white hover:border-white " onClick={() => signIn()}>\/</button>
    </>
  )
}