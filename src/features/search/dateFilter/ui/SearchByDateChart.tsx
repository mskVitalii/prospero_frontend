import React from 'react'
import { useAppDispatch } from '@shared/lib';
import { BarChart, Bar, Brush, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { search, useSearchArticlesMutation } from '@entities/search';


type PublishedChart = {
  publishedDate: Date,
  publishedCount: number
}

const SearchByDateChart = () => {
  const dispatch = useAppDispatch()
  const [_, { data: articlesData }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })
  const articles = articlesData?.data ?? []
  // articles && console.table(articles)


  function onDateChange({ startIndex, endIndex }: {
    startIndex?: number | undefined,
    endIndex?: number | undefined
  }) {
    // const start = new Date(articles?.at(startIndex ?? 0)?.datePublished ?? Date.now())
    // const end = new Date(articles?.at(endIndex ?? 0)?.datePublished ?? Date.now())

    const start = chartData?.at(startIndex ?? 0)?.publishedDate ?? new Date()
    const end = chartData?.at(endIndex ?? 0)?.publishedDate ?? new Date()

    // console.table({
    //   start: start.toLocaleString("default", { month: "short", day: "2-digit" }),
    //   end: end.toLocaleString("default", { month: "short", day: "2-digit" })
    // })

    dispatch(search.changeTimeFilter({
      start: start.toJSON(),
      end: end.toJSON()
    }))
  }

  const chartData = (articles ?? [])
    ?.map(x => new Date(x.datePublished))
    .reduce((acc, current) => {
      const index = acc.findIndex(x => x.publishedDate.getDate() === new Date(current).getDate())
      if (index === -1) {
        acc.push({
          publishedDate: current,
          publishedCount: 1
        })
      } else {
        acc[index].publishedCount++
      }
      return acc
    }, [] as PublishedChart[])
    .sort((a, b) => Number(a.publishedDate) - Number(b.publishedDate))


  // Format date for chart
  const timeData = (chartData ?? []).map(x => ({
    ...x, publishedDate: x.publishedDate.toLocaleString("default", { month: "short", day: "2-digit" })
  }))

  return <ResponsiveContainer width="100%" height="95%">
    <BarChart
      data={timeData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="publishedDate" />
      <YAxis dataKey="publishedCount" />
      <Tooltip />
      <Brush dataKey="publishedDate" aria-label='название' height={30} fill='none' stroke="#8884d8" onChange={onDateChange} />
      <Bar dataKey="publishedCount" label="Опубликовано" fill="#8884d8" />
      {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} /> */}
      {/* <ReferenceLine y={0} stroke="#000" /> */}
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  </ResponsiveContainer>
}

export default SearchByDateChart
