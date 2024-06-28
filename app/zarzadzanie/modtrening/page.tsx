"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'
import supabase from '/dust-maste2/dust-master/supabaseClient.js';
import { useEffect, useState } from 'react';
import TreningTabela from '/dust-maste2/dust-master/TreningTabela';
import EditableTable from '/dust-maste2/dust-master/EditableTable';



export default function page() {

    return (
        <main className="flex font-sans flex-col items-center text-black  dark:text-zinc-500  justify-between ">


            <div
                className=" font-sans font-semiboldbg-gradient-to-t from-gray-300 border-gray-600 border-b border-opacity-50 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white  px-5 py-4 rounded-3xl content-center m-20">

                <p className="font-extrabold"> Modyfikuj plan treningowy dla konia:</p>
                <div className="text-black">
                    <EditableTable/>

                </div>

            </div>

            {/* Uzupełnij kalendarz na kolejne 2 tygodnie:
        <div className="columns-2 font-mono border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-5 py-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-3xl content-center m-20">
            <div>
            </div>

            <div>
                <h1 className="font-bold text-center text-2xl w-auto">

                </h1>

            </div>

        </div> */}



        </main>


    )
}
