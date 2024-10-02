"use client";
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import React, { useEffect, useState } from 'react';
import supabase from '@/supabaseClient.js';
import SignUp from '@/SingUp';
import Login from '@/Login';
import Wylogowany from '@/Wylogowany';



const App: React.FC = () => {
    const [page, setPage] = useState<string>('home');
    const [userData, setUserData] = useState<any>(null);
    const [userName, setUserName] = useState<string | null>(null); // Ustawienie domyślne na null

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data, error } = await supabase.auth.getUser();

                if (error) {
                    throw error;
                }

                if (data) {
                    setUserData(data);
                    setUserName(data.user?.email || null); // Ustawienie userName na email użytkownika lub null, jeśli email nie jest zdefiniowany
                }
            } catch (error) {
                console.error('Error fetching user:');
                // Obsługa błędów
            }
        };

        fetchUser();
    }, []);
    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();

            if (error) {
                throw error;
            }

            setUserData(null); // Wyczyść dane użytkownika po wylogowaniu
        } catch (error) {
            console.error('Error signing out:');
            // Obsługa błędów wylogowania
        }
    };
    const renderPage = () => {
        switch (page) {
            case 'signup':
                return <SignUp onNavigate={setPage} />;
            case 'login':
                return <Login onNavigate={setPage} />;
            case 'wylogowany':
                return <Wylogowany onNavigate={setPage} userData={userData} />;
            default:
                return (
                    <div className="flex items-center justify-center mt-6">

                    <div className=" font-sans text-center font-semibold justify-center w-72 p-2 text-xl border-b rounded-2xl border-gray-500 border-opacity-50 bg-gradient-to-b from-gray-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white">
                        {userData==null && (
                            
                            <button onClick={() => setPage('login')}>Logowanie</button>
                        )}
                        
                        
                            <h1>{userName !== null ? `Witaj: ${userName}` : ''}</h1>      
                        {userData && (
                            <button onClick={handleLogout}>Wyloguj</button>
                        )}
                    </div>
                    </div>
                );

        }

    };

    return <div>{renderPage()}</div>;
};

export default App;