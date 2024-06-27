import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    return (
        <main className=" items-center justify-between p-24">

            <div className="mb-32 flex flex-col gap-2 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">



                <Link href="/mod_boksy">
                    <div
                        className="group rounded-lg  border-b border-gray-600 px-5 py-4 bg-gradient-to-t from-white bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
                    >
                        <h2 className="mb-3 text-2xl font-semibold">
                            Modyfikacja boksów{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
                            </span>
                        </h2>
                    </div>
                </Link>

                <Link href="/mod_konie">
                    <div
                        className="group rounded-lg  border-b border-gray-600 px-5 py-4 bg-gradient-to-t from-white  bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
                    >
                        <h2 className="mb-3 text-2xl font-semibold">
                            Dodaj usuń konia{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                        </h2>
                    </div>
                </Link>

                <Link href="/mod_trening">
                    <div
                        className="group rounded-lg  border-b border-gray-600 px-5 py-4 bg-gradient-to-t from-white  bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
                    >
                        <h2 className="mb-3 text-2xl font-semibold">
                            Zmiana treningu{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                        </h2>
                    </div>
                </Link>

                <Link href="/zapasowy">
                <div
                    className="group rounded-lg  border-b border-gray-600 px-5 py-4 bg-gradient-to-t from-white  bg-gray-400 text-gray-800 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white "
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        zapasowy{" "}
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
