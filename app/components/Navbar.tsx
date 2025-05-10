import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
  return (
    <nav className="bg-slate-900/70 top-0 z-50 backdrop-blur-lg border-slate-800 shadow-md px-6 py-4 flex justify-between flex-col md:flex-row sticky border-b drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">WikiAmba</Link>
      </h1>
      <Search />
    </nav>
  )
}
