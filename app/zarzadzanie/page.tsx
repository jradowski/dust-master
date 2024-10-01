import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    return (
        <main className=" items-center justify-between p-24">

            <div className="mb-32 flex flex-col gap-4 text-center lg:mb-0 lg:w-full  lg:grid-cols-3 lg:text-left">



                <Link href="/zarzadzanie/modboksy">
                    <div
                        className=" rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600 ">

                        <h2 className="mb-3 text-2xl font-semibold">
                            Modyfikacja konia{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
                            </span>
                        </h2>
                    </div>
                </Link>

                <Link href="/zarzadzanie/modkonie">
                    <div
                        className=" rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600 ">

                    <h2 className="mb-3 text-2xl font-semibold">
                            Dodaj konia{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                        </h2>
                    </div>
                </Link>

                

                <Link href="/zarzadzanie/zapasowy">
                <div
                    className=" rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600 ">

                <h2 className="mb-3 text-2xl font-semibold">
                        Usuń konia{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                    </h2>
                </div>
            </Link>
            <Link href="/zarzadzanie/modtrening">
                    <div
                        className=" rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600 ">

                    <h2 className="mb-3 text-2xl font-semibold">
                            Zmiana treningu{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                        </h2>
                    </div>
                </Link>


            </div>



        </main>
    )
}
