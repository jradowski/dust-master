import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from '/dust-maste2/dust-master/supabaseClient.js';
import UserForm from '/dust-maste2/dust-master/UserForm';
import UsunWiersz from '/dust-maste2/dust-master/UsunWiersz';
import ModyfikujKonia from '/dust-maste2/dust-master/ModyfikujKonia';
import Kowal from '@/Kowal';
import Szczepienie from '@/Szczepienie';
import MessageSender from '@/MessageSender';
import NotePad from '@/NotePad';
import Inbox from '@/Inbox';
import UserList from '@/UserList';
//C:\dust-maste2\dust-master\app\UserForm.tsx


const Home = async () => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div
                className=" rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600 ">
                <div>
                    <div className="h-12 text-xl text-center font-extrabold ">
                        Usuń konia z bazy:
                    </div>
                </div>

                <div >
                    <h1 className="font-bold text-center  text-2xl w-auto">

                    </h1>
                    <UsunWiersz />
                </div>

            </div>

        </main>


    )
}

export default Home;


