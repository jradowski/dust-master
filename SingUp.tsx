"use client";
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from './supabaseClient.js'
import React, { useState } from 'react'
import 'C:/dust-maste2/dust-master/app/globals.css';


const SignUp: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                  
                }
              }
            
        })
        if (error) {
            console.error('Error signing up:', error.message)
        } else {
            console.log('User signed up:', data.user)
            onNavigate('login')
        }
    }

    return (
        <div className="flex items-center justify-center mt-6">
            <div className="font-sans text-center font-semibold justify-center w-72 p-2 text-xl border-b rounded-2xl border-gray-500 border-opacity-50 bg-gradient-to-b from-gray-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-2 dark:border-gray-600  dark:text-white">
                <h1>Załóż konto</h1>
                <form onSubmit={handleSignUp}>
                    <label>
                        Email:
                        <input
                            className="custom-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Hasło:
                        <input
                            className="custom-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Załóż konto</button><br></br>
                </form>

            </div>
        </div>
    )
}

export default SignUp