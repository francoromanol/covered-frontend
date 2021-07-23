import styled from 'styled-components'

import Navbar from '../components/navbar/Navbar'
import ClientCard from '../components/clientCard/ClientCard'

export default function Home({ client }) {
  const clientInfo = client.client
  const initials = clientInfo.first_name[0] + clientInfo.last_name[0]
  

  return (
    <>
      <Navbar initials={initials} />
      <ClientCard client={client} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/client')
  const client = await res.json()

  return {
    props: {
      client,
    },
  }
}
