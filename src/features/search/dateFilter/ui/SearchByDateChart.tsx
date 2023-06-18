import React, { useContext } from 'react'
import { config, useAppDispatch } from '@shared/lib';
import { BarChart, Bar, Brush, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { search, useSearchArticlesMutation } from '@entities/search';
import { InitArticleContext } from '@pages/index';


type PublishedChart = {
  publishedDate: Date,
  publishedCount: number
}

const SearchByDateChart = () => {
  //#region Articles
  const dispatch = useAppDispatch()
  const [_, { data: articlesData }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })
  const initArticles = useContext(InitArticleContext)
  const articles = articlesData?.data ?? initArticles.articles
  // articles && console.table(articles)
  //#endregion

  //#region Chart
  function onDateChange({ startIndex, endIndex }: {
    startIndex?: number | undefined,
    endIndex?: number | undefined
  }) {
    const start = chartData?.at(startIndex ?? 0)?.publishedDate ?? new Date()
    const end = chartData?.at(endIndex ?? 0)?.publishedDate ?? new Date()

    // console.table({
    //   start: start.toLocaleString("ru-RU", { month: "short", day: "2-digit" }),
    //   end: end.toLocaleString("ru-RU", { month: "short", day: "2-digit" })
    // })

    dispatch(search.changeTimeFilter({
      start: start.toJSON(),
      end: end.toJSON()
    }))
  }

  const chartData = (articles ?? [])
    .map(article => ({
      ...article,
      datePublished: config.IS_DEV
        ? new Date(article.datePublished).valueOf() + (-20 + Math.random() * 20) * 1000 * 60 * 60 * 24
        : article.datePublished
    }))
    .map(x => new Date(x.datePublished))
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
  const timeData = chartData.map(x => ({
    ...x, publishedDate: x.publishedDate.toLocaleString("ru-RU", { month: "short", day: "2-digit" })
  }))
  //#endregion

  return <ResponsiveContainer width="100%" height="95%">
    <BarChart
      data={timeData}
      margin={{ top: 5, bottom: 5, left: 20, right: 30 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="publishedDate" />
      <YAxis dataKey="publishedCount" />
      <Tooltip />
      <Brush dataKey="publishedDate" aria-label='Название' height={30} fill='none' stroke="#8884d8" onChange={onDateChange} />
      <Bar dataKey="publishedCount" label="Опубликовано" fill="#8884d8" />
      {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} /> */}
      {/* <ReferenceLine y={0} stroke="#000" /> */}
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  </ResponsiveContainer>
}

export default React.memo(SearchByDateChart)
