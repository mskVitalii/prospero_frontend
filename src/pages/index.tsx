import Head from 'next/head'
import { LayoutMain } from '@widgets/LayoutMain';

export default function Home() {
  return <>
    <Head>
      <title>Prospero</title>
      <meta name="description" content="news aggregator" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.svg" />
    </Head>
    <LayoutMain />
  </>
}
