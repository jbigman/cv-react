import React from 'react'
import { useTranslations } from 'next-intl'

const FormattedMessage = (props: { id: string, values?: any }) => {
  const t = useTranslations('COMMON')

  return (
        <> {t(props.id, props.values)}</>
  )
}

export default FormattedMessage
