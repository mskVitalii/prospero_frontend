import { Article } from "@shared/lib/ArticleType"

export async function searchApi(search: string): Promise<Article[]> {
  const response = await fetch('/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ search })
  })

  const result: Article[] = (await response.json()).data
  return result
}
