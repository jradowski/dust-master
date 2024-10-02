"use client";
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import  supabase  from '@/supabaseClient.js'
import React, { useState } from 'react'
import '@/globals.css';


const Login: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) {
            console.error('Error logging in:', error.message)
        } else {
            console.log('User logged in:', data.user)
            onNavigate('home')
        }
    }


    return (
        <div className="flex items-center justify-center mt-6">
            <div className="font-sans text-center font-semibold justify-center w-72 p-2 text-xl border-b rounded-2xl border-gray-500 border-opacity-50 bg-gradient-to-b from-gray-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white">
                <h1>Logowanie</h1>
                <form onSubmit={handleLogin}>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="custom-input"
                        />
                    </label>
                    <br />
                    <label>
                        Hasło:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="custom-input"
                        />
                    </label>
                    <br />
                    <button type="submit">Zaloguj</button>
                </form>
                <button onClick={() => onNavigate('signup')}>Załóż konto</button>
            </div>
        </div>
    )
}

export default Login