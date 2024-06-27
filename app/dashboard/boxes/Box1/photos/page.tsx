"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css';


export default function page() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div className="z-10  w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">


                <div
                    className="fixed left-0 top-0 flex w-full items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <Image
                        src="/profile.jpg"
                        alt="avatar"
                        className="rounded-full p-1"
                        width={50}
                        height={24}
                    />
                    Kamil Ślimak&nbsp;
                </div>
                <div
                    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">


                    <Link href="/">
                        <p className="fixed left-0 top-0 flex w-full items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                            HOME
                        </p>
                    </Link>

                </div>
            </div>
            <Image
                src="/KolRodowod.png"
                alt="Colorado KG rodowód"
                width={1000}
                height={1000}
            ></Image>
        </main>

    );
};