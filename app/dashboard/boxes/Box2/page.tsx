
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from 'C:/dust-master/supabaseClient.js'
import { useEffect, useState } from 'react'




const fetchData = async () => {
    const { data, error } = await supabase
        .from('horse')
        .select('*')
        .eq('id', 1)
        .single()

    console.log('Supabase data:', data)
    console.log('Supabase error:', error)

    if (error) {
        console.error(error)
        console.log('blad debilu')
    }
    return data
}

const Home = async () => {
    const data = await fetchData()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1>Data from Supabase</h1>
                <ul>
                    <li>{data.id}</li>
                </ul>
            </div>



            <div className="z-10  w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">


                <div
                    className="fixed left-0 top-0 flex w-full items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <Image
                        src="/profile.jpg"
                        alt="avatar"
                        className="rounded-full p-1"
                        width={50}
                        height={24}
                    />
                    Kamil Ślimak&nbsp;
                </div>
                <div
                    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">


                    <Link href="/">
                        <p className="fixed left-0 top-0 flex w-full items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                            HOME
                        </p>
                    </Link>

                </div>
            </div>

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
                        {data.imie}
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

