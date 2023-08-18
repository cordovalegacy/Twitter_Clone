
// !this is our index route page ('/')
// define async function createUser
// use fetch at ('/api/users/addUser')
// await retrieved data with res
// define method: 'POST'
// define headers: {'Content-Type': 'application/json'}
// define body: payload
// await retrieved jsonified res
// use the data

// to get data from a displayAll or displayOne, use getServerSideProps in index.tsx file
// await mongo connection
// run model method (await User.find())
// return { props: { users: JSON.parse(JSON.stringify(users)) } }, or catch error
// pass down the props into components you need it in ({users}: UserProps)
// this will create SSR in your components

// !Components
import Header from "@/components/Main/Header";

export default function Home() {
  return (
    <>
      <Header label={"Home"}/>
    </>
  )
}
