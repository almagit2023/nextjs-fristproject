import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import Navigation from './component/Navigation'

export default function Home() {
  return (
    <div>
      <Navigation/>
       <h1 className='justify-center p-2 border-4 text-center bg-orange-300'>This is the Landing Page of my App</h1>
       <Link href="/routes" className='ml-4' passHref legacyBehavior>
          <a>Route Index</a>
       </Link>
       <Link href="/routes/about" className='ml-4'>About Page</Link>
    </div>
  )
}
