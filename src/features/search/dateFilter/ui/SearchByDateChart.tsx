import React from 'react'
import { useAppDispatch } from '@shared/lib';
import { BarChart, Bar, Brush, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { search, useSearchArticlesMutation } from '@entities/search';

// const data = [
//   { published: 456 },
//   { published: 230 },
//   { published: 345 },
//   { published: 450 },
//   { published: 321 },
//   { published: 235 },
//   { published: 267 },
//   { published: -378 },
//   { published: -210 },
//   { published: -23 },
//   { published: 45 },
//   { published: 90 },
//   { published: 130 },
//   { published: 11 },
//   { published: 107 },
//   { published: 926 },
//   { published: 653 },
//   { published: 366 },
//   { published: 486 },
//   { published: 512 },
//   { published: 302 },
//   { published: 425 },
//   { published: 467 },
//   { published: -190 },
//   { published: 194 },
//   { published: 371 },
//   { published: 376 },
//   { published: 295 },
//   { published: 322 },
//   { published: 246 },
//   { published: 33 },
//   { published: 354 },
//   { published: 258 },
//   { published: 359 },
//   { published: 192 },
//   { published: 464 },
//   { published: -2 },
//   { published: 154 },
//   { published: 186 },
// ]
//   .map<PublishedChart>((x, i) => ({
//     publishedDate: new Date(Date.now() - i * 1000 * 60 * 60 * 24),
//     publishedCount: Math.abs(x.published)
//   }))
//   .sort((a, b) => Number(a.publishedDate) - Number(b.publishedDate))

type PublishedChart = {
  publishedDate: Date,
  publishedCount: number
}

const SearchByDateChart = () => {
  const dispatch = useAppDispatch()
  const [_, { data: articles }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })
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

  // if (articles) {
  //   const articlesSorted = [...articles]
  //   articlesSorted?.sort((a, b) => new Date(a.datePublished).getDate() - new Date(b.datePublished).getDate()) ?? []
  //   const maxDate = articlesSorted.at(0)?.datePublished
  //   const minDate = articlesSorted.at(articlesSorted.length - 1)?.datePublished
  //   console.log("SearchByDateChart", maxDate, minDate);
  // }


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
