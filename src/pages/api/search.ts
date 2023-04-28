import type { NextApiHandler } from 'next'
import { Article, mockArticles } from "@/pages/api/news";

const searchHandler: NextApiHandler = async (request, response) => {
  const { search } = request.body
  const searchLowerCase = search.toLowerCase()
  console.log('search', searchLowerCase)

  if (!Boolean(searchLowerCase.length)) return

  let result: Article[] = []
  mockArticles.forEach((newsItem) => {
    Object.values(newsItem).forEach((value) => {
      if (typeof value === 'string' && value.includes(searchLowerCase)) {
        result.push(newsItem)
      }
    })
  })

  response.json({ data: result })
}

export default searchHandler
