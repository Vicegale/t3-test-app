import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import autoAnimate from '@formkit/auto-animate'


import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data } = api.person.getAll.useQuery();
  
  const [selectedId, setSelectedId] = useState("");

  const things = api.person.getThings.useQuery({ id: selectedId });

  //auto-animate
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  //Pong!
  const [reveal, setReveal] = useState(false);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div ref={parent} className="flex flex-row">
            <div onClick={() => setReveal(!reveal)} className="text-white border-2 border-white p-4 rounded-full hover:bg-purple-400 hover:text-white transition-colors duration">Ping!</div>
            {reveal ? <div onClick={() => setReveal(!reveal)} className="w-fit border-2 border-white text-white p-4 rounded-full hover:bg-white hover:text-black transition-colors duration">Pong!</div> : <></>}
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-4 sm:grid-cols-2 md:gap-8 text-white">
              {data ? data?.map((person) => (<div className="border-2 border-white p-4 rounded-full hover:bg-white hover:text-black transition-colors duration" key={person.id} onClick={() => setSelectedId(person.id)}>{person.name} - {person.age} years old</div>)): "Loading people"}
            </div>
            <div className="text-white">
              {things ? things?.data?.map((thing) => (<div className="border-2 border-white p-4 rounded-full hover:bg-white hover:text-black transition-colors duration" key={thing.id}>{thing.name}</div>)): "Loading things"}
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
};

export default Home;
