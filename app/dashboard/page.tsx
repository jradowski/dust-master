import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Kowal from "@/Kowal";
import Szczepienie from "@/Szczepienie";

export default function page() {
  return (
      <main className=" items-center justify-between p-24">

          <div
              className=" flex flex-col gap-4  text-center lg:w-full  lg:grid-cols-3 lg:text-left">


              <Link href="/dashboard/boxes">
                  <div
                      className="group rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600  "
                  >
                      <h2 className="mb-3 text-2xl font-semibold">
                          Boksy{" "}
                          <span
                              className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                      </h2>
                  </div>
              </Link>

              <Link href="/dashboard/padoki">
                  <div
                      className="group rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600  "
                  >
                      <h2 className="mb-3 text-2xl font-semibold">
                          Padoki{" "}
                          <span
                              className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                      </h2>
                  </div>
              </Link>

              <Link href="/dashboard/trening">
                  <div
                      className="group rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600  "
                  >
                      <h2 className="mb-3 text-2xl font-semibold">
                          Trening{" "}
                          <span
                              className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                      </h2>
                  </div>
              </Link>


          </div>

          <hr className="border-t-2 border-zinc-200 dark:border-gray-600 lg:w-full my-16 "/>

          <div className="w-11/12  border-t-1 border-gray-600"></div>
          <div
              className="group rounded-tl-xl  text-2xl text-justify bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600  "
          >
              <div>
                  <div className="h-12 text-2xl text-center font-semibold ">
                      Przypominajka
                  </div>
              </div>

              <div>
                  <h1 className="font-bold text-center text-2xl w-auto">

                  </h1>
                  <Kowal/>
              </div>

              <div>
                  <h1 className="font-bold text-center text-2xl w-auto">

                  </h1>
                  <Szczepienie/>
              </div>

          </div>


      </main>
  )
}
