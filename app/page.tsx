import Image from "next/image";
import {text} from "node:stream/consumers";



export default function page() {
    return (
        <main
            className=" grid place-items-center gap-11 columns-1 font-sans mt-16 text-zinc-700 dark:text-white pb-6 pt-8">

            <hr className="border-t-2 border-zinc-200 dark:border-gray-600 w-11/12"/>
            <div className=" flex flex-row text-center w-10/12 my-3 ">
                <div className="object-center">
                    <Image
                        className="drop-shadow-2xl object-fill rounded-tl-xl "
                        src="/images/2.jpg"
                        alt="zdjęcie"
                        width={2000}
                        height={1000}
                    ></Image>
                </div>
                <div
                    className=" rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 font-sans dark:font-sans dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600 ">
                    <h1>
                        Zarządzanie stajnią jeszcze nigdy nie było łatwiejsze dzięki Stable Assistant! Nasza
                        aplikacja
                        zapewnia kompleksowe narzędzia do efektywnego zarządzania
                        każdym aspektem stajni. Śledź harmonogramy karmienia, terminy weterynaryjne i szczepień,
                        zarządzaj zadaniami dla personelu oraz kontroluj zapasy - wszystko
                        w jednym miejscu. Niezależnie od tego, czy jesteś właścicielem stajni, trenerem czy
                        hodowcą,
                        Stable Assistant umożliwia sprawną organizację i oszczędność czasu.
                    </h1>
                </div>
            </div>

            <hr className="border-t-2 border-zinc-200 dark:border-gray-600 w-11/12"/>

            <div className=" flex flex-row text-center w-10/12">


                <div
                    className=" rounded-tl-xl  text-2xl text-justify mx-2 bg-white border-r-2 border-b-2 border-zinc-200 p-5 font-sans dark:font-sans dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600 ">
                    <h1>
                        Zarządzanie stajnią jeszcze nigdy nie było łatwiejsze dzięki Stable Assistant! Nasza
                        aplikacja
                        zapewnia kompleksowe narzędzia do efektywnego zarządzania
                        każdym aspektem stajni. Śledź harmonogramy karmienia, terminy weterynaryjne i szczepień,
                        zarządzaj zadaniami dla personelu oraz kontroluj zapasy - wszystko
                        w jednym miejscu. Niezależnie od tego, czy jesteś właścicielem stajni, trenerem czy
                        hodowcą,
                        Stable Assistant umożliwia sprawną organizację i oszczędność czasu.
                    </h1>
                </div>
                <div className="object-center">
                    <Image
                        className="drop-shadow-2xl object-fill rounded-tl-xl "
                        src="/images/1.jpg"
                        alt="zdjęcie"
                        width={2000}
                        height={1000}
                    ></Image>
                </div>
            </div>
            <hr className="border-t-2 border-zinc-200 dark:border-gray-600 w-11/12"/>

            <div
                className="bg-white border-zinc-200 dark:bg-zinc-800 border-y-2 w-full dark:border-gray-600 p-2 ">
                <div
                    className="text-center border-zinc-200 border-b-2 dark:border-gray-600 font-sans text-2xl font-bold">
                    <h1>Galeria</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 m-2">
                    <img src="/images/third.jpg" alt="Image 1"
                         className="w-64 h-auto aspect-square object-cover shadow-lg hover:scale-105 transition-transform duration-300"/>
                    <img src="/images/12.jpg" alt="Image 2"
                         className="w-64 h-auto aspect-square object-cover shadow-lg hover:scale-105 transition-transform duration-300"/>
                    <img src="/images/3.jpg" alt="Image 3"
                         className="w-64 h-auto aspect-square object-cover shadow-lg hover:scale-105 transition-transform duration-300"/>
                    <img src="/images/first.jpg" alt="Image 4"
                         className="w-64 h-auto aspect-square object-cover shadow-lg hover:scale-105 transition-transform duration-300"/>
                    <img src="/images/fifth.jpg" alt="Image 5"
                         className="w-64 h-auto aspect-square object-cover shadow-lg hover:scale-105 transition-transform duration-300"/>
                    <img src="/images/fourth.jpg" alt="Image 6"
                         className="w-64 h-auto aspect-square object-cover shadow-lg hover:scale-105 transition-transform duration-300"/>
                    <img src="/images/second.jpg" alt="Image 7"
                         className="w-64 h-auto aspect-square object-cover shadow-lg hover:scale-105 transition-transform duration-300"/>
                    <img src="/images/stable.jpg" alt="Image 8"
                         className="w-64 h-auto aspect-square object-cover shadow-lg hover:scale-105 transition-transform duration-600"/>
                </div>
            </div>

            <hr className="border-t-2 border-zinc-200 dark:border-gray-600 w-11/12"/>

            <div
                className="bg-white border-zinc-200 dark:bg-zinc-800 border-y-2 w-full dark:border-gray-600 p-2 ">
                <div
                    className="text-center border-zinc-200 border-b-2 dark:border-gray-600 font-sans text-2xl font-bold">
                    <h1>Zostaw komentarz</h1>
                </div>
                <div>
                    <div className="p-4 max-w-md mx-auto">
                        <label htmlFor="text-input" className="block text-lg font-medium text-gray-700 mb-2 dark:text-white">
                            Wprowadź tekst:
                        </label>
                        <input
                            id="text-input"
                            type="text"
                            className="w-full p-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-zinc-800"
                            placeholder="Wpisz coś..."
                        />
                    </div>
                </div>

            </div>





        </main>
    );
}
