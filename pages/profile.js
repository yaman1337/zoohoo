import Navbar from "../components/Navbar";
import Head from "next/head";


const profile = () => {
  return (
    <div>
    <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  )
}

export default profile