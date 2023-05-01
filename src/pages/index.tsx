import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/appFSD/styles/Home.module.scss'
import { useDebouncedState } from '@mantine/hooks';
import { Text, TextInput } from '@mantine/core';
import Counter from '@/widgets/Counter';
import { useEffect, useState } from "react";
import { Article } from './api/news';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [search, setSearch] = useDebouncedState('', 200);
  const [foundNews, setFoundNews] = useState<Article[]>([]);

  useEffect(() => {
    // Initial load
    if (search.length < 2) return;

    // TODO: RTK Query
    async function GetNews() {
      console.log("/api/search");
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search })
      })

      const result: Article[] = (await response.json()).data
      setFoundNews(result)
    }

    GetNews()
  }, [search])


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
        <Text>[Debounced value]: {search}</Text>
      </section>

      <section>
        <Text>Пример redux</Text>
        <Counter />
      </section>

      <section>
        {Boolean(foundNews.length) && foundNews.map((newsItem, i) => {
          return <div key={i}>
            <h3>{newsItem.name}</h3>
            <Text>{newsItem.description}</Text>
          </div>
        })}
      </section>
    </main>
  </>)
}
