
// !this is our index route page ('/')
// define async function createUser
// use fetch at ('/api/users/addUser')
// await retrieved data with res
// define method: 'POST'
// define headers: {'Content-Type': 'application/json'}
// define body: payload
// await retrieved jsonified res
// use the data

// !Components
import Header from "@/components/Main/Header";

export default function Home() {
  return (
    <>
      <Header label={"Home"}/>
    </>
  )
}
