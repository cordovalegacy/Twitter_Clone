
// !Components
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import LoginModal from '@/components/LoginModal'

// !Packages
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Modal isOpen title={"Test Modal"} actionLabel='Submit' /> */}
    <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
