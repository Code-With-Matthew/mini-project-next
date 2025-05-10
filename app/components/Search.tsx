'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${search}`);
    setSearch('');
  };

  return (
    <form className='w-50 flex justify-center md:justify-between' 
    onSubmit={handleSubmit}>
      <input 
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='bg-white p-3 w-96 text-xl rounded-xl text-gray-800 placeholder-gray-500 
        focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Cari apa rek....'
      />
      <button className='p-3 text-xl rounded-xl bg-slate-300 ml-2 font-bold
      hover:bg-slate-400 transition-colors'>
        <p>💣</p>
      </button>
    </form>
  )
}
