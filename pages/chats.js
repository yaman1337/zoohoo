import Navbar from "@/components/Navbar";
import Head from "next/head";
import ChatScreen from "@/components/ChatScreen";

module.exports = () => {
  return (
    <>
    <Head>
        <title>Chats</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ChatScreen />
    </>
  )
}
