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
    <div className="flex justify-end pr-4">
      <form 
        className="w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 pl-4 pr-12 text-base rounded-xl border-2 border-gray-300 
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
              text-gray-800 placeholder-gray-500 caret-blue-500 transition-all duration-300
              shadow-sm"
            placeholder="Cari apa rek...."
          />
          
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 
              hover:text-blue-600 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}
