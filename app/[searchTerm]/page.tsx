import getWikiResults from "@/lib/getWikiResults"
import Item from "./components/Item"

type Props = {
  params: {
    searchTerm: string
  }
}
export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData : Promise<SearchResult> = (getWikiResults(searchTerm))
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll('20%', ' ')

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} tidak ditemukan rek`,
    }
  }

  return {
    title: displayTerm,
    description: `Hasil pencarian untuk ${displayTerm}`
  }
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData : Promise<SearchResult> = (getWikiResults(searchTerm))
  const data = await wikiData
  const results: Result[] | undefined = data?.query?.pages

  const content = (
    <main className="bbg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl"> 
        {results ? (
          <div className="grid grid-cols-1 gap-6"> 
            {Object.values(results).map((result) => (
              <Item key={result.pageid} result={result} />
            ))}
          </div>
        ) : (
          <h2 className="p-2 text-xl text-center text-gray-700">
            {`"${searchTerm.replaceAll('%20', ' ')}" tidak ditemukan rek..`}
          </h2>
        )}
      </div>
    </main>
  )
  return content
}