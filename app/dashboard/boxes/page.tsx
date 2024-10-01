"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from '/dust-maste2/dust-master/supabaseClient.js';



let fetchData = async () => {
    let { data, error } = await supabase
      .from('horse')
      .select('*')
      .eq('nr_boksu', 1)
      .single()
  
    return data
};
let fetchData2 = async () => {
    let { data, error } = await supabase
      .from('horse')
      .select('*')
      .eq('nr_boksu', 2)
      .single()
  
    return data
};
let fetchData3 = async () => {
    let { data, error } = await supabase
      .from('horse')
      .select('*')
      .eq('nr_boksu', 3)
      .single()
  
    return data
};
let fetchData4 = async () => {
    let { data, error } = await supabase
      .from('horse')
      .select('*')
      .eq('nr_boksu', 4)
      .single()
  
    return data
};
let fetchData5 = async () => {
    let { data, error } = await supabase
      .from('horse')
      .select('*')
      .eq('nr_boksu', 5)
      .single()
  
    return data
};

export default async function page() {
    const data = await fetchData()
    const data2 = await fetchData2()
    const data3 = await fetchData3()
    const data4 = await fetchData4()
    const data5 = await fetchData5()
    return (
  <main className=" min-h-full p-24">


      <div className=" flex flex-col gap-4 text-center  lg:mb-0 lg:w-full   lg:text-left">


          <Link href="/dashboard/boxes/Box1">
              <div
                  className="group rounded-tl-xl  text-3xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600  "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      1{" "}

                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
              
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-base opacity-50">
                      {data.imie}
                  </p>
              </div>
          </Link>

          <Link href="/dashboard/boxes/Box2">
              <div
                  className="group rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600  "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      2{" "}
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-base opacity-50">
                      {data2.imie}
                  </p>
              </div>
          </Link>


          <Link href="/dashboard/boxes/Box3">
              <div
                  className="group rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600  "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      3{" "}
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-base opacity-50">
                      {data3.imie}
                  </p>
              </div>
          </Link>

          <Link href="/dashboard/boxes/Box4">
              <div
                  className="group rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600  "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      4{" "}
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-base opacity-50">
                  {data4.imie} 
                  </p>
              </div>
          </Link>

          <Link href="/dashboard/boxes/Box5">

              <div
                  className="group rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600  "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      5{" "}
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-base opacity-50">
                      {data5.imie}
                  </p>
              </div>
          </Link>

      </div>
  </main>

    );
};