// import { Inter } from 'next/font/google'
 import './globals.css'
import Header from "components/Header"
import Side from "components/side"
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'News App',

  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

<div className="SB">
    <Side  />
    <div className="HB">
      <Header />
    </div>
</div>
      <body >{children}</body>
    </html>
  )
}
