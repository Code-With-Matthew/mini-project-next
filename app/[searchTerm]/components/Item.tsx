import Link from 'next/link'
import Image from 'next/image'

type Props = {
  result: Result
}

export default function Item({ result }: Props) {
  const itemTextcol = (
    <div className='flex flex-col justify-center flex-1'>
      <h2>
        <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank"
          className='text-xl font-bold text-gray-900 hover:text-blue-700 
          transition-colors duration-300 hover:underline underline-offset-4'>
          {result.title}
        </Link>
      </h2>
      <p className='text-gray-700 mt-3 text-justify leading-relaxed text-base'>
        {result.extract}
      </p>
    </div>
  )

  const content = result?.thumbnail?.source
    ? (
        <article className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg 
          hover:shadow-xl transition-all duration-300 p-6 w-full group 
          border border-white/20 hover:border-blue-100'>
          <div className='flex flex-row gap-6'>
            <div className='relative w-40 h-40 flex-shrink-0'>
              <Image 
                src={result.thumbnail.source} 
                alt={result.title}
                fill
                className='rounded-lg object-cover'
                loading='lazy'
                quality={100}
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
            {itemTextcol}
          </div>
        </article>
    )
    : (
        <article className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg 
          hover:shadow-xl transition-all duration-300 p-6 w-full group 
          border border-white/20 hover:border-blue-100'>
          {itemTextcol}
        </article>
    )

    return content
}