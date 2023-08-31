'use client'

export default function Home() {
  return (
    <>
      <main>
        <h1 className='heading'>Home Page</h1>
        {
          process.env.NODE_ENV == 'development' ?
            <h1>Development Mode</h1> :
            <h1>Production Mode</h1>
        }
      </main>
    </>
  )
}

