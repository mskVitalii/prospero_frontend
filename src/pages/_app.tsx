import store from '@app/store';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { MantineProvider } from '@mantine/core';
import { config } from '@shared/lib';
import { YandexMetricaProvider } from 'next-yandex-metrica';
import '@shared/ui/base.scss'


export default function App({ Component, pageProps }: AppProps) {

  return <>
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        {config.IS_PROD ?
          <YandexMetricaProvider
            tagID={config.Y_METRICA_ID}
            initParameters={{ clickmap: true, trackLinks: true, accurateTrackBounce: true }}
          >
            <Component {...pageProps} />
          </YandexMetricaProvider>
          : <Component {...pageProps} />}

      </MantineProvider>
    </Provider>
  </>
}
