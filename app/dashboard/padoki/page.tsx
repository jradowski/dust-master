"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'
import supabase from '@/supabaseClient.js';

let fetchData = async () => {
    let { data, error } = await supabase
      .from('horse')
      .select('imie')
      .eq('nr_padoku', 1)
      .single()
  
    return data
};
let fetchData2 = async () => {
    let { data, error } = await supabase
      .from('horse')
      .select('imie')
      .eq('nr_padoku', 2)
      .single()
  
    return data
};
let fetchData3 = async () => {
    let { data, error } = await supabase
      .from('horse')
      .select('imie')
      .eq('nr_padoku', 3)
      .single()
  
    return data
};
let fetchData4 = async () => {
    let { data, error } = await supabase
      .from('horse')
      .select('imie')
      .eq('nr_padoku', 4)
      .single()
  
    return data
};
let fetchData5 = async () => {
    try {
        // Perform the query on the 'horse' table where 'nr_padoku' equals 5 and get a single record
        let { data, error } = await supabase
          .from('horse')          // Specify the table to query from
          .select('*')            // Select all columns
          .eq('nr_padoku', 5)     // Apply the filter condition
          .single();              // Ensure only one record is returned
        
        // Check if there is an error
        if (error) {
            throw error;
        }
        
        // Check if the record exists
        if (!data) {
            return "wolny";  // Return "wolny" if no record is found
        }
        
        // Return the data if the record is found
        return data;
    } catch (error) {
        // Handle the error (e.g., log it, return a custom error message, etc.)
        console.error('Error fetching data:', error);
        return "wolny";  // Return "wolny" if an error occurs
    }
};
let fetchData6 = async () => {
    try {
        // Perform the query on the 'horse' table where 'nr_padoku' equals 5 and get a single record
        let { data, error } = await supabase
          .from('horse')          // Specify the table to query from
          .select('*')            // Select all columns
          .eq('nr_padoku', 6)     // Apply the filter condition
          .single();              // Ensure only one record is returned
        
        // Check if there is an error
        if (error) {
            throw error;
        }
        
        // Check if the record exists
        if (!data) {
            return "wolny";  // Return "wolny" if no record is found
        }
        
        // Return the data if the record is found
        return data;
    } catch (error) {
        // Handle the error (e.g., log it, return a custom error message, etc.)
        console.error('Error fetching data:', error);
        return "wolny";  // Return "wolny" if an error occurs
    }
};

export default async function page() {
    const data = await fetchData()
    const data2 = await fetchData2()
    const data3 = await fetchData3()
    const data4 = await fetchData4()
    const data5 = await fetchData5()
    const data6 = await fetchData6()
    return (


        <main className="flex min-h-screen font-sans flex-col items-center justify-between p-24">



            <div className=" mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">


                <Link href="/dashboard/boxes/Grupa1">
                    <div
                        className=" w-full rounded-lg border-2 border-transparent px-5 py-4 bg-gradient-to-t from-gray-300 border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
                    >
                        <h2 className="mb-3 text-2xl font-semibold">
                            Grupa pierwsza
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                            rano
                        </p>
                    </div>
                </Link>
            </div>
            
            <div className="mb-32 gap-2 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
            <div
                className="group rounded-lg border-transparent px-5 py-4 border-2 bg-gradient-to-t from-gray-300 border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      Padok nr 1{" "}
                      
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

              
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {data?.imie}
                  </p>
              </div>
              <div
                  className="group rounded-lg border-transparent px-5 py-4 border-2 bg-gradient-to-t from-gray-300 border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      Padok nr 2{" "}
                      
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

              
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {data2?.imie}
                  </p>
              </div>
              <div
                  className="group rounded-lg border-transparent px-5 py-4 border-2 bg-gradient-to-t from-gray-300 border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      Padok nr 3{" "}
                      
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

              
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {data3?.imie}
                  </p>
              </div>
        </div>
       <br></br><br></br>
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <Link href="/dashboard/boxes/Grupa2">
                    <div
                        className="group rounded-lg border-2 border-transparent px-5 py-4 bg-gradient-to-t from-gray-300 border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
                    >
                        <h2 className="mb-3 text-2xl font-semibold">
                            Grupa druga (ogiery)
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

            </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                            po południu
                        </p>
                    </div>
                </Link>
            </div>
        <div className="mb-32 grid text-center gap-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <div
                  className="group rounded-lg border-transparent px-5 py-4 border-2 bg-gradient-to-t from-gray-300 border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      Padok nr 1{" "}
                      
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {data4?.imie}
                  </p>
              </div>
              <div
                  className="group rounded-lg border-transparent px-5 py-4 border-2 bg-gradient-to-t from-gray-300 border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      Padok nr 2{" "}
                      
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

              
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {data5.imie}
                  </p>
              </div>
              <div
                  className="group rounded-lg border-transparent px-5 py-4 border-2 bg-gradient-to-t from-gray-300 border-gray-600 bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
              >
                  <h2 className="mb-3 text-2xl font-semibold">
                      Padok nr 3{" "}
                      
                      <span
                          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

              
            </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {data6}
                  </p>
              </div>
        </div>
        </main>

    );
};