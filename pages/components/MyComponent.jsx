import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import img from './1.jpg'

export default function MyComponent() {
  return (
    <div>
      <Image
        src={img}
        alt="My Image"
        width={500}
        height={500}
        quality={100}
      />
      <button className='btn btn-success'>Click Me</button>
    </div>
  )
}
