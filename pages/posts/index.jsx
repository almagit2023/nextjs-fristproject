import React from 'react'
import Link from 'next/link';

export default function PostList({ posts }) {
  return (
     <>
        <h2>Post Lists</h2>
        {
          posts.map(post => {
            return (
               <div key={post.id}>
                <Link href={`posts/${post.id}`} passHref legacyBehavior className="p-3 text-center bg-slate-300 text-slate-900">
                     <h2>{post.id} | {post.title}</h2>
                </Link>
               </div>
            )
          })
        }
     </>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data
    }
  }
}
