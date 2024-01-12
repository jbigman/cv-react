import { useTranslations, type TranslationValues } from 'next-intl'

const FormattedMessage = (props: { id: string, values?: TranslationValues | undefined }) => {
  const t = useTranslations('COMMON')

  return (
        <> {t(props.id, props.values)}</>
  )
}

export default FormattedMessage
