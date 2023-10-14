import Image from 'next/image'

export default function Profile() {
  return (
    <Image
      alt="The guitarist in the concert."
      src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
      width={2250}
      height={1390}
      layout="responsive"
    />
  )
}