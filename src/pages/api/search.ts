import type { NextApiResponse } from 'next'
import { mockArticles } from "@pages/api/news";
import { Article } from '@shared/lib'
import { NextApiRequestWithBody } from '@shared/lib';


export default async function searchHandler(
  request: NextApiRequestWithBody<{ search: string }>,
  response: NextApiResponse<{ data: Article[] }>) {

  const search = request.body.search.toLowerCase()
  console.log('/api/search', search)
  if (search.length < 2) return

  const data = mockArticles.filter(article =>
    article.name.toLocaleLowerCase().includes(search) ||
    article.description.toLocaleLowerCase().includes(search)
  )

  response.status(200).json({ data })
}
