import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { useDebouncedState } from '@mantine/hooks';
import { Text, TextInput } from '@mantine/core';
import Counter from '@/redux/slices/example/Counter';
import { useEffect, useState } from "react";
import { Article } from './api/news';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [search, setSearch] = useDebouncedState('', 200);
  const [news, setNews] = useState<Article[]>([]);
  const [foundNews, setFoundNews] = useState<Article[]>([]);

  useEffect(() => {
    if (search.length === 0) return;

    async function GetNews() {

      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search })
      })

      const result: Article[] = await response.json()
      setFoundNews(result)
    }

    GetNews()
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
      <meta name="description" content="news aggregator" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
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

      {/* <section>
        <Text>Пример redux</Text>
        <Counter />
      </section> */}
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
