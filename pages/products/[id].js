import { useRouter } from "next/router";

import React from 'react'

export default function ProductDetail() {

  const router = useRouter();
  const {id}  = router.query;
  return (
    <div className="bg-yellow-300 p-4 border-zinc-200">
       <h1>Product {id}</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque repellat sint fugiat provident velit animi expedita necessitatibus cupiditate odio.</p>
    </div>
  )
}
