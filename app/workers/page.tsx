import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">


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
                  <a
                      className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                      target="_blank"
                      rel="noopener noreferrer"
                  >


                  </a>
              </div>

              <div
                  className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                  <a
                      className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <Link href="/">
                          <p className="fixed left-0 top-0 flex w-full items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                              HOME
                          </p>
                      </Link>

                  </a>
              </div>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">

              <Link href="/dashboard">
                  <div
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  >
                      <h2 className="mb-3 text-2xl font-semibold">
                          Stajnia{" "}
                          <span
                              className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                          Zarządzaj swoją stajnią!
                      </p>
                  </div>
              </Link>

              <Link href="/workers">
                  <div
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  >
                      <h2 className="mb-3 text-2xl font-semibold">
                          Pracownicy{" "}
                          <span
                              className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                          Zarządzaj kadrą!
                      </p>
                  </div>
              </Link>

          </div>

      </main>
  );
}
