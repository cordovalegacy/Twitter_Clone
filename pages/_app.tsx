
// !Components
import '@/styles/globals.css'
import Layout from '@/components/Global/Layout'
import Modal from '@/components/Modals/Modal'
import LoginModal from '@/components/Modals/LoginModal'

// !Packages
import type { AppProps } from 'next/app'
import RegisterModal from '@/components/Modals/RegisterModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Modal isOpen title={"Test Modal"} actionLabel='Submit' /> */}
    <LoginModal />
    <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
