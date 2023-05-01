import '@/shared/base.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { MantineProvider } from '@mantine/core';
import store from '@/appFSD/appStore';

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
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  </>
}
