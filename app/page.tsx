import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <div className="flex flex-col items-center justify-center pt-20 pb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 animate-fade-in">
          Welcome to
        </h1>
        <div 
        className="relative animate-slide-up delay-100">
          <span className="text-6xl md:text-7xl font-black text-white tracking-tighter transform transition-all duration-500 hover:scale-105">
            WikiAmba
          </span>
        </div>
        <p 
        className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl text-center leading-relaxed animate-fade-in delay-200">
          Jelajahi pengetahuan lengkap seputar berbagai topik dalam<br />
          genggaman Anda
        </p>
      </div>
    </main>
  )
}
