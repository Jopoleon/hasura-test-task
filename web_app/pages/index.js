import Link from 'next/link'
function HomePage() {

  return (
    <div>
      <h2>Welcome to the Hasura task!</h2>
      <p> Go to localhost:3000/{"{tail}"}, for example: <Link href="/best-hello-ever">localhost:3000/best-hello-ever</Link> to see the title and description. </p>
    </div>)
}

export default HomePage