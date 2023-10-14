import React from 'react'

export default function PostDetail(props) {
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{props.postId}</p>
    </div>
  )
}

export async function getServerSideProps(context){
  const {postId}  = context.params;
  return {
    props : {
      postId : postId
    }
  }
}
