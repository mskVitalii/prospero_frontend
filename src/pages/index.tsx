import Head from 'next/head'
import { createContext } from 'react';
import { LayoutMain } from '@widgets/LayoutMain';
import { config } from '@shared/lib';
import { Article } from '@entities/article';
import { initialSearchState } from '@entities/search/model/searchSlice';
import { methodTypes } from '@shared/api';

export const InitArticleContext = createContext<Props>({ articles: [], total: 0 })

type Props = {
  articles: Article[]
  total: number
}
export default function Home(props: Props) {
  return <>
    <Head>
      <title>Prospero</title>
      <meta name="description" content="news aggregator" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.svg" />
    </Head>
    <InitArticleContext.Provider value={props}>
      <LayoutMain />
    </InitArticleContext.Provider>
  </>
}

// Подгружаю изначальные статьи
export async function getServerSideProps() {
  try {
    const body = { ...initialSearchState, filterStrings: initialSearchState.filterStrings.filter(x => x.search.length > 0) }
    const res = await fetch(`${config.API_ENDPOINT}/grandFilter?size=${25}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: methodTypes.POST,
      body: JSON.stringify(body)
    });
    const data: { data: Article[], total: number } = await res.json()
    console.log(`[SSR] traceID=[${res.headers.get("Prospero-Trace-Id")}] loaded=[${data?.data?.length}] total=[${data?.total}] time=[${new Date().toJSON()}]`);
    const articles = (data?.data ?? []).map(a => ({
      ...a, publisher: {
        ...a.publisher, address: {
          ...a.publisher.address, coords: [
            Number((a.publisher.address.coords[0] - 0.1 + Math.random() * 0.2).toFixed(4)),
            Number((a.publisher.address.coords[1] - 0.1 + Math.random() * 0.2).toFixed(4))] as [number, number]
        }
      }
    }));
    const total = data?.total ?? articles.length ?? 0

    return { props: { articles, total } as Props };
  } catch (error) {
    console.error("[SSR] Не смогли достучаться до сервера", error)
    return { props: { articles: [], total: 0 } as Props };
  }
}
