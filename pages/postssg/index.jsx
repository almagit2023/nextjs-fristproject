import React from 'react'
import Link from 'next/link'

export default function PostDetailSSG({posts}) {
  return (
   <>
      <h2>All Posts Static Page</h2>
      {
        posts.map(post => {
          return (
             <div key={post.id} className='flex w-32 bg-slate-300 text-slate-600 border-2'>
              <Link href={`postssg/${post.id}`} passHref legacyBehavior>
                  <h2>{post.title}</h2>
              </Link>
             </div>
          )
        })
      }
   </>
  )
}

export const getStaticProps = async()=> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return {
    props: {
      posts : data.slice(0,5)
    }
  }
}
