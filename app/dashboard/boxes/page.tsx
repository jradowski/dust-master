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


      <div className=" flex flex-col gap-4 text-center  lg:mb-0 lg:w-full lg:max-w-5xl  lg:text-left">


          <Link href="/dashboard/boxes/Box1">
              <div
                  className=" rounded-lg  border-transparent px-5 py-4 bg-gradient-to-t from-white border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      1{" "}
                      
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
              
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {data.imie}
                  </p>
              </div>
          </Link>

          <Link href="/dashboard/boxes/Box2">
              <div
                  className=" rounded-lg  border-transparent px-5 py-4 bg-gradient-to-t from-white border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      2{" "}
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {data2.imie}
                  </p>
              </div>
          </Link>




          <Link href="/dashboard/boxes/Box3">
              <div
                  className=" rounded-lg  border-transparent px-5 py-4 bg-gradient-to-t from-white border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      3{" "}
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {data3.imie}
                  </p>
              </div>
          </Link>

          <Link href="/dashboard/boxes/Box4">
              <div
                  className=" rounded-lg  border-transparent px-5 py-4 bg-gradient-to-t from-white border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      4{" "}
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {data4.imie}
                  </p>
              </div>
          </Link>

          <Link href="/dashboard/boxes/Box5">
            
              <div
                  className=" rounded-lg  border-transparent px-5 py-4 bg-gradient-to-t from-white border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      5{" "}
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {data5.imie}
                  </p>
              </div>
          </Link>

          <Link href="/dashboard/boxes/Box6">
              <div
                  className="rounded-lg  border-transparent px-5 py-4 bg-gradient-to-t from-white border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      Zarządzaj stajnią{" "}
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                      Panel administracyjny
                  </p>
              </div>
          </Link>

      </div>
  </main>

    );
};