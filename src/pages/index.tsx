import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { useDebouncedState } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';
import Counter from '@/redux/slices/example/Counter';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [search, setSearch] = useDebouncedState('', 200);


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

      <section>
        <Text>Пример redux</Text>
        <Counter />
      </section>
    </main>
  </>)
}
