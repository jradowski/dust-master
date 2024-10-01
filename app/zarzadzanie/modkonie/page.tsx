
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from '/dust-maste2/dust-master/supabaseClient.js';
import UserForm from '/dust-maste2/dust-master/UserForm';
import UsunWiersz from '/dust-maste2/dust-master/UsunWiersz';
import ModyfikujKonia from '/dust-maste2/dust-master/ModyfikujKonia';
import '@/tabela.css'

//C:\dust-maste2\dust-master\app\UserForm.tsx


const Home = async () => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div
            className=" rounded-tl-xl  text-2xl text-left mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600 ">
            <div>
                <h1 className="font-bold text-left text-2xl w-auto">
                    <div className="h-12 text-xl font-extrabold ">
                        Dodaj konia do bazy:
                    </div>
                </h1>
                <UserForm/>
            </div>
        </div> 
        </main>
    )
}

export default Home;


