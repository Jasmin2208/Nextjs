import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h5><Link href='/'>Home page</Link></h5>
        <h5><Link href='/api/hello'>Hello page</Link></h5>
        <h5><Link href='/api/user'>User API data page</Link></h5>
        <h5><Link href='/user'>User page</Link></h5>
        <br />
        <br />
        {children}
      </body>
    </html>
  )
}
