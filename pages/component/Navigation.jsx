import Link from "next/link";
import { useRouter } from "next/router";

import React from 'react'

export default function Navigation() {
  const router = useRouter()

  const handleNavigate = (path) =>{
    router.push(path)
  }

  const handleClick = (path) => {
    router.replace(path)
  }


  return (
    <div>
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link href="/display">Main </Link>
        </li>
        <li>
          <Link href="/display/about">About</Link>
        </li>
        <li>
          <Link href="/display/contact">contact</Link>
        </li>
      </ul>
        {/* Pragmaic Navigation */}
      <button className="mt-4 p-4 bg-orange-500 rounded" onClick={()=>handleNavigate('/display')}>Goto Main page</button> <br />
        <button className="mt-4 p-4 bg-blue-500 rounded" onClick={()=>handleClick('/display/about')}>Goto About page</button>
    </div>
  )
}
