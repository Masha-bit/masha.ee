import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'masha.ee',
  // description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='icon' href='/canva-portfolio design/{m}.svg'/>
      <body className='font-rust-sans'>{children}</body>
    </html>
  )
}
