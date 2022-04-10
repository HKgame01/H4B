import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Chatroom() {

  const { t } = useTranslation();

  return (
    <div className='mx-4 pt-8 pb-12'>

      <div className='mx-56 grid place-items-center'>
        <h1 className='text-5xl font-semibold text-white'>{t('navLinkChatroom')}</h1>
        <div className="bg-tertiary w-52 h-1 my-2"></div>
      </div>

      <iframe src="http://localhost:49493/" height={600} width={1500} title="chatroom"/>

    </div>
  )
}
