import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from '/dust-maste2/dust-master/supabaseClient.js';
import TreningJeden from '/dust-maste2/dust-master/TreningJeden';
import TreningTabela from '/dust-maste2/dust-master/TreningTabela';
import TreningTable from '@/TreningTabela';
import Notatkoa from '@/Notatkoa';
import '@/boxtabela.css';

const fetchData = async () => {
    const { data, error } = await supabase
        .from('horse')
        .select('*, image_url')
        .eq('id', 3)
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
    const zdj= data.image_url ? data.image_url : "/Kolorado.jpg";

    return (
        <main className="flex flex-col items-center ">


            <div
                className="grid grid-cols-2 gap-5 rounded-tl-xl  text-2xl text-justify mb-10 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600  ">

                <div className="columns-1 flex flex-col gap-3 h-1/2 ">
                    <div>
                        <Image
                            className="rounded-2xl aspect-square object-cover border-2 border-gray-900"
                            src={zdj}
                            alt="Kolorado KG"
                            width={400}
                            height={200}
                        />
                    </div>
                    <div>
                        <div className=" w-fill grid grid-cols-2 gap-15  ">

                            <div>
                                <h1 className="font-semibold text-2xl">Ojciec:</h1>
                                <h2 className="text-xl ">{data.v}</h2>
                            </div>
                            <div>
                                <h1 className="font-semibold text-2xl">Matka(& oj.Matki):</h1>
                                <h2 className="text-xl ">{data.m}/ {data.mv}</h2>
                            </div>

                        </div>
                    </div>

                </div>


                <div className="border-l-2 pl-5  border-gray-600">
                    <h1 className="text-center text-3xl pb-5 font-bold w-auto">
                        {data.imie}
                    </h1>
                    <ul>
                        <h2 className="font-semibold text-2xl">Data urodzenia:</h2>
                        <li className="text-xl pb-3">{data.data_urodzenia}</li>
                        <h2 className="font-semibold text-2xl">Płeć:</h2>
                        <li className="text-xl pb-3">{data.plec}</li>
                        <h2 className="font-semibold text-2xl">Rasa:</h2>
                        <li className="text-xl pb-3">Polski Koń Sportowy</li>
                        <h2 className="font-semibold text-2xl">Właścicel:</h2>
                        <li className="text-xl pb-3">{data.wlasciciel}</li>
                    </ul>
                </div>


            </div>
            <div
                className="w-auto grid grid-cols-2 rounded-tl-xl  text-2xl text-justify mb-10 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600   ">
                <div className="mt-2 border-r-2 border-gray-600 pr-5">
                    <h1 className="text-2xl">Wizyta kowala:</h1>
                    <h2 className="text-opacity-50 text-xl ">{data.kowal}</h2>
                </div>
                <div className="mt-2 pl-5">
                    <h1 className="text-2xl">Ilość miarek: {data.wielkosc_posilku}</h1>
                    <h2 className="text-opacity-50 text-xl ">
                        {data.posilek}
                    </h2>
                </div>


            </div>

            <hr className="border-t-2 border-zinc-200 dark:border-gray-600 lg:w-11/12 my-16  "/>

            <div
                className="content-center ml-8 grid grid-cols-1 gap-20 rounded-tl-xl  text-2xl text-justify mb-10 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600   ">
                <div className="mt-2">
                    <h1 className="text-xl font-bold">Plan treningowy: </h1>
                    <h2 className="text-lg">
                        <TreningJeden horseIdT={data.nr_treningowy}/>
                    </h2>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Notatka: </h1>
                    <h2>
                        <div>
                            <Notatkoa horseId={data.id}/>
                        </div>
                    </h2>
                </div>
            </div>


        </main>


    )
}

export default Home;

