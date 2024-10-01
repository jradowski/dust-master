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
import '@/boxtabela.css';


export default function page() {

    return (
        <main className="flex flex-col items-center text-black  dark:text-zinc-500  justify-between ">


            <div
                className="content-center ml-8 w-full grid grid-cols-1 gap-10 rounded-tl-xl  text-xl text-justify mb-10 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600   ">


                <h1 className="text-3xl dark:text-white text-center font-bold">Tygodniowy plan treningowy</h1>
                <div>
                    <TreningTabela/>
                </div>

            </div>


            <div
                className="content-center ml-8 w-full grid grid-cols-1 gap-10 rounded-tl-xl  text-2xl text-justify mb-10 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600   ">

                <h1 className="text-3xl dark:text-white text-center font-bold">Zmień plan treningowy</h1>
                <div>
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
