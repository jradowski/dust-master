"use client";
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from '@/supabaseClient.js'
import React, { useState } from 'react'
type WylogowanyProps = {
    onNavigate: (page: string) => void;
    userData: any; // lub dokładniejszy typ, np. User | null
};

const Wylogowany: React.FC<WylogowanyProps> = ({ onNavigate, userData }) => {
    // Tu możesz korzystać z userData, jeśli jest dostępny
    return (
        <div>
            <h1>Welcome to Wylogowany Component</h1>
            {userData && <p>User Data: {JSON.stringify(userData)}</p>}
            <button onClick={() => onNavigate('signup')}>Załóż konto</button>
            <br></br>
            <button onClick={() => onNavigate('login')}>Logowanie</button>
        </div>
    );
};

export default Wylogowany;
