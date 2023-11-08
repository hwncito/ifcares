import useAuth from "../../../hooks/useAuth"

export default function Header() {
  const { auth, setAuth } = useAuth()
  const { name, lastname, email } = auth

  return (
    <header className="w-full h-14 bg-[#5D24FF] shadow text-white flex items-center justify-end px-40">
      <div className="text-xs text-right">
        <p>{`${name} ${lastname}`}</p>
        <p>{email}</p>
      </div>
      <div className="ml-8 mr-2 hover:text-slate-400 hover:cursor-pointer" onClick={() => setAuth({})}>
        Logout
      </div>
    </header>  
  )
}