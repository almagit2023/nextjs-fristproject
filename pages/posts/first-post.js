import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import Button from '../components/Button'
import MyComponent from '../components/MyComponent'
import Profile from './Profile'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
        <Button text="click" />
        <MyComponent/>
      </h2>
      <h1 style={{ fontFamily: 'Roboto' }}>Roboto Font</h1>
      <Profile/>
    </Layout>
  )
}
