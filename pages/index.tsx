import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative h-[200vh] bg-[#e7ecee]">
        <Landing />
      </main>
    </div>
  );
};

export default Home;
