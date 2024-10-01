"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Dropdown from "C:/dust-maste2/dust-master/app/components/Dropdown";
import Image from "next/image";
import { supabase } from '/dust-maste2/dust-master/supabaseClient2.js';
import SignUp from '/dust-maste2/dust-master/SingUp';
import Login from '/dust-maste2/dust-master/Login';
import Wylogowany from '/dust-maste2/dust-master/Wylogowany';
import Cos from '/dust-maste2/dust-master/app/workers/page';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '@/ProtectedRoute'; // Komponent, który sprawdza uprawnienia
import WlascicielStajniTab from "@/WlascicielStajniTab";

const inter = Inter({ subsets: ["latin"] });



const UserProfile: React.FC = () => {
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        const getUserEmail = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();

            if (error) {
                console.error('Error fetching user:', error);
            } else if (user && user.email) {
                setEmail(user.email);
            } else {
                setEmail(null);
            }
        };

        getUserEmail();
    }, []);

    return (
        <div>
            {email ? (
                <p>Witaj: {email}</p>
            ) : (
                <p>Zaloguj się</p>
            )}
        </div>
    );
};
// export const metadata: Metadata = {
//   title: "Stable Assistant",
//  };
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang="en">
        <head>
            <title>Stable Assistant</title>
        </head>
        <body className={inter.className}>
        <div
            className="w-full h-fit p-4 columns-3 justify-between flex flex-row border-b-2 border-zinc-200 font-bold italic text-lg text-zinc-700 bg-gradient-to-t from-white  bg-gray-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-gray-600  dark:text-white">
            <div>
                <Link href="/workers"><UserProfile/></Link>
            </div>
            <div className="text-2xl"><Link href="/home">Stable Assistant ♘</Link></div>
            <div className="float-right">ZMIANA MOTYWU</div>
        </div>
        <div className="flex flex-row">
            <div
                className=" flex flex-col gap-2 min-h-screen w-fit  float-top-left text-zinc-700 lg:text-xl sm:text-sm border-r-2 border-zinc-200 bg-gradient-to-t from-white  bg-gray-400  font-bold italic dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-r-2 dark:border-gray-600  dark:text-white">

                <Link href="/dashboard">
                    <div className="hover:bg-gray-500  pl-2">
                        Stajnia
                    </div>
                </Link>

                <Link href="/dashboard/boxes">
                    <div className="hover:bg-gray-500 pl-2">
                        Boksy
                    </div>
                </Link>

                <Link href="/dashboard/padoki">
                    <div className="hover:bg-gray-500 pl-2">
                        Padoki
                    </div>
                </Link>

                <Link href="/dashboard/trening">
                    <div className="hover:bg-gray-500  pl-2">
                        Treningi
                    </div>
                </Link>
                <Router>
                
                <WlascicielStajniTab>
                <Link href="/zarzadzanie">
                    <div className="hover:bg-gray-500  pl-2">
                        Zarządzanie stajnią
                    </div>
                    
                </Link>
                <Link href="/dashboard/harmonogram">
                    <div className="hover:bg-gray-500 whitespace-break-spaces pl-2">
                        Zarządzanie pracownikami
                    </div>
                </Link>
                </WlascicielStajniTab>
                
                </Router>

                <Link href="/dashboard/notes">
                    <div className="hover:bg-gray-500 pl-2">
                        Wiadomości
                    </div>
                </Link>

                
                <Link href="/dashboard/zadania">
                    <div className="hover:bg-gray-500 whitespace-break-spaces pl-2">
                        Moje zadania
                    </div>
                </Link>


            </div>

            <div className=" w-11/12 mt-10">
                {children}
            </div>
        </div>
        <div
            className="w-full h-fit p-4  text-center border-t-2 border-zinc-200  font-bold italic text-lg text-zinc-700 bg-gradient-to-t from-white  bg-gray-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-t-2 dark:border-gray-600  dark:text-white">
            <div>
                © All rights reserved
            </div>


        </div>
        </body>
        </html>
    );
}