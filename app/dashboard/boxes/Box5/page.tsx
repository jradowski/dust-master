import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from '/dust-maste2/dust-master/supabaseClient.js';



const fetchData = async () => {
    const { data, error } = await supabase
        .from('horse')
        .select('*, image_url')
        .eq('id', 5)
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
                className="grid grid-cols-2 gap-5 font-sans  text-lg text-black leading-8 border-b px-5 py-4  border-gray-500 border-opacity-50 bg-gradient-to-b from-gray-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white content-center pb-6 pt-8 p-5 rounded-xl mb-24">

                <div className="columns-1 flex flex-col gap-3 h-1/2 ">
                    <div>
                        <Image
                            className="rounded-2xl border-2 border-gray-900"
                            src={zdj}
                            alt="Kolorado KG"
                            width={400}
                            height={200}
                        />
                    </div>
                    <div>
                        <div className=" w-fill grid grid-cols-2 gap-15  ">

                            <div >
                                <h1 className="font-semibold text-xl">Ojciec:</h1>
                                <h2>{data.data_urodzenia}</h2>
                            </div>
                            <div>
                                <h1 className="font-semibold text-xl">Matka(& oj.Matki):</h1>
                                <h2>{data.plec}</h2>
                            </div>

                        </div>
                    </div>

                </div>


                <div>
                    <h1 className="font-sans text-center text-3xl  w-auto">
                        {data.imie}
                    </h1>
                    <ul>
                        <h2 className="font-semibold text-xl">Data urodzenia:</h2>
                        <li>{data.data_urodzenia}</li>
                        <h2 className="font-semibold text-xl">Płeć:</h2>
                        <li>{data.plec}</li>
                        <h2 className="font-semibold text-xl">Rasa:</h2>
                        <li>Polski Koń Sportowy</li>
                        <h2 className="font-semibold text-xl">Właścicel:</h2>
                        <li>{data.wlasciciel}</li>
                    </ul>
                </div>


            </div>
            <div
                className="w-auto grid grid-cols-2 gap-20  font-sans  text-lg text-black leading-8 border-b px-5 py-4  border-gray-500 border-opacity-50 bg-gradient-to-b from-gray-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white rounded-2xl content-center ">
                <div className="mt-2">
                    <h1 className="text-xl">Wizyta kowala:</h1>
                    <h2 className="text-opacity-50 ">{data.kowal}</h2>
                </div>
                <div className="mt-2">
                    <h1 className="text-xl">Ilość miarek: {data.wielkosc_posilku}</h1>
                    <h2 className="text-opacity-50 ">
                        {data.posilek}
                    </h2>
                </div>
            </div>


        </main>


    )
}

export default Home;

