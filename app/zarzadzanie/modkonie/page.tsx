'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from '/dust-maste2/dust-master/supabaseClient.js';
import UserForm from '/dust-maste2/dust-master/UserForm';
import UsunWiersz from '/dust-maste2/dust-master/UsunWiersz';
import ModyfikujKonia from '/dust-maste2/dust-master/ModyfikujKonia';

//C:\dust-maste2\dust-master\app\UserForm.tsx


const Home = async () => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="columns-1 font-sans border-b px-5 py-4 font-semibold text-lg text-black leading-8 border-gray-500 border-opacity-50 bg-gradient-to-b from-gray-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white rounded-3xl content-center m-20">
                <div>
                    <h1 className="font-bold text-center text-2xl w-auto">
                        <div className="h-12 text-xl font-extrabold ">
                            Dodaj konia do bazy:
                        </div>
                    </h1>
                    <UserForm/>
                </div>
            </div>


            <div className="columns-1 font-sans font-semibold text-lg text-black leading-8 border-b px-5 py-4  border-gray-500 border-opacity-50 bg-gradient-to-b from-gray-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white rounded-3xl content-center m-20">
                <div className="h-12 text-xl text-center font-extrabold ">
                    Modyfikuj konia w bazie:
                </div>

                <div>
                    <h1 className="font-bold text-black text-center text-2xl w-auto">

                    </h1>
                    <ModyfikujKonia />
                </div>

            </div>


            <div className="columns-1 font-sans font-semibold text-lg text-black leading-8 border-b px-5 py-4  border-gray-500 border-opacity-50 bg-gradient-to-b from-gray-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white  rounded-3xl content-center m-20">
                <div>
                    <div className="h-12 text-xl text-center font-extrabold ">
                        Usuń konia z bazy:
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-center text-2xl w-auto">

                    </h1>
                    <UsunWiersz />
                </div>

            </div>



        </main>


    )
}

export default Home;


