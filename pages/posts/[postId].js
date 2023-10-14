import React from 'react'

export default function PostDetail(props) {
  return (
    <>
     <p>{props.post.body}</p>
    </>
  )
}

export const getServerSideProps = async(context)=>{
  const  { params} = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

  const data = await response.json()

  return {
    props : {
      post : data
    }
  }
}
