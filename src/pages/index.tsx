import Head from 'next/head'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import {useDebouncedState} from '@mantine/hooks';
import {Text, TextInput} from '@mantine/core';
import Counter from '@/redux/slices/example/Counter';
import {useEffect, useState} from "react";


const inter = Inter({subsets: ['latin']})

export default function Home() {

  const [search, setSearch] = useDebouncedState('', 200);
  const [news, setNews] = useState([]);
  const [foundNews, setFoundNews] = useState([]);

  useEffect(() => {
    const searchLowerCase = search.toLowerCase()
    setFoundNews([])
    if (Boolean(searchLowerCase.length)) {
      news.forEach((newsItem) => {
        Object.entries(newsItem).forEach(([key, value]) => {
          if (typeof value === 'string' && value.includes(searchLowerCase)) {
            setFoundNews([...foundNews, newsItem])
          }
        })
      })
    }
  }, [search])

  const getNews = async () => {
    const response = await fetch('/api/news', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const res = await response.json()
    return res.data
  }

  const updateNewsList = async () => {
    setNews(await getNews())
  }

  return (<>
    <Head>
      <title>Prospero</title>
      <meta name="description" content="news aggregator"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <main className={`${styles.main} ${inter.className}`}>
      <section className={styles.filters}>
        <TextInput
          type='search'
          className={styles.inputFilter}
          label="Поиск новостей"
          defaultValue={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </section>

      <section>
        <Text>{search}</Text>
        <Text>[Debounced value]</Text>
      </section>

      <section>
        <Text>Пример redux</Text>
        <Counter/>
      </section>
      <section>
        <button onClick={updateNewsList}>Получить новости</button>
        <Text>
          {Boolean(news.length) && !Boolean(foundNews.length) && news.map((newsItem, i) => {
            return <div key={i}>
              <h3>{newsItem.name}</h3>
              <p>{newsItem.description}</p>
              <p>{newsItem.address?.country} {newsItem.address?.city}</p>
            </div>
          })}
          {Boolean(foundNews.length) && foundNews.map((newsItem, i) => {
            return <div key={i}>
              <h3>{newsItem.name}</h3>
              <p>{newsItem.description}</p>
            </div>
          })}
        </Text>
      </section>
    </main>
  </>)
}
