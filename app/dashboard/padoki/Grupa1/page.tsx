
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from '@/supabaseClient.js';






const Home = async () => {
    

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          

            <div className="columns-2 font-mono border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-5 py-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-3xl content-center m-20">
                <div>
                    <Image
                        className="rounded-2xl"
                        src="/Kolorado.jpg"
                        alt="Kolorado KG"
                        width={400}
                        height={400}
                    />
                </div>
                <div>
                    <h1 className="font-bold text-center text-2xl w-auto">
                       
                    </h1>
                    <ul>
                        <h2 className="font-semibold">Data urodzenia:</h2>
                        <li>2008-08-11</li>
                        <h2 className="font-semibold">Płeć:</h2>
                        <li>ogier</li>
                        <h2 className="font-semibold">Rasa:</h2>
                        <li>Polski Koń Sportowy</li>
                        <h2 className="font-semibold">Właścicel:</h2>
                        <li>Grzegorz Narętka</li>
                    </ul>
                </div>

            </div>
            <div className="flex-col columns-2 gap-2 items-center">
                <div className="w-auto font-mono px-5 py-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-3xl content-center ">
                    <Link className="font-mono " href="/photos">Rodowód</Link>
                </div>
                <div
                    className="w-auto font-mono px-5 py-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-3xl content-center ">
                    <h1 className="text-xl">Wizyta kowala:</h1>
                    <h2 className="text-opacity-50">
                        10.06.2024
                    </h2>
                </div>
            </div>


        </main>


    )
}

export default Home;

