import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Main from "./Main";

interface Todo {
  id: number;
  name?: String;
  image?: String;
}

function Home({ todos }: { todos: Todo[] }) {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((count) => count + 1);
  };
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main onIncrease={handleIncrease} count={count} />
      <Link href="/post"><button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10 my-20">Post</button></Link>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://62e9e38d3a5f1572e87056f4.mockapi.io/api/users"
  );
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
};

export default Home;
