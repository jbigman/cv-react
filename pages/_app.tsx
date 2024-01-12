import { type AppProps } from 'next/app'

import en from '../src/i18n/en.json'
import fr from '../src/i18n/fr.json'
import { LOCALES } from '../src/i18n/locales'

import '../src/css/index.scss'
import '../src/css/pure.css'

import { IntlProvider } from 'next-intl'
import { useRouter } from 'next/router'

export default function App ({
  Component,
  pageProps: { ...pageProps }
}: AppProps) {
  const { locale } = useRouter()

  const AnyComponent = Component as any

  const messages = {
    [LOCALES.ENGLISH]: en,
    [LOCALES.ENGLISH_AUSTRALIA]: en,
    [LOCALES.ENGLISH_BELIZE]: en,
    [LOCALES.ENGLISH_CANADA]: en,
    [LOCALES.ENGLISH_IRELAND]: en,
    [LOCALES.ENGLISH_JAMAICA]: en,
    [LOCALES.ENGLISH_NEW_ZEALAND]: en,
    [LOCALES.ENGLISH_TRINIDAD]: en,
    [LOCALES.ENGLISH_SOUTH_AFRICA]: en,
    [LOCALES.ENGLISH_UNITED_KINGDOM]: en,
    [LOCALES.ENGLISH_UNITED_STATES]: en,
    [LOCALES.FRENCH]: fr,
    [LOCALES.FRENCH_BELGIUM]: fr,
    [LOCALES.FRENCH_CANADA]: fr,
    [LOCALES.FRENCH_FRANCE]: fr,
    [LOCALES.FRENCH_LUX]: fr,
    [LOCALES.FRENCH_SWITZERLAND]: fr
  }

  if (locale !== undefined) {
    return (
            <IntlProvider
                messages={messages[locale.toLowerCase()]}
                locale={locale}
                onError={() => null}>
                  <Component {...pageProps} />
            </IntlProvider>
    )
  } else return <AnyComponent {...pageProps} />
}
