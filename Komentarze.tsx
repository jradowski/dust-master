"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from './supabaseClient.js'
import { useEffect, useState } from 'react'

const Komentarze: React.FC = () => {
    const [messageContent, setMessageContent] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
    const [ocenaa, setOcenaa] =  useState<string>('');
    const [error, setError] = useState<string | null>(null);


    const sendMessage = async () => {
        if (!userId || !messageContent) {
            setError('Wypełnij wszystkie pola');
            return;
        }

        const { error } = await supabase
            .from('komentarze')
            .insert([{ nick: userId, content: messageContent, ocena: ocenaa }]);

        if (error) {
            console.error('Błąd podczas wysyłania wiadomości:', error);
            setError('Błąd podczas wysyłania wiadomości');
        } else {
            console.log('Komentarz wysłano pomyślnie');
            setMessageContent(''); // Resetuj pole wiadomości
            setError(null); // Resetuj błędy
        }
    };

return (
    <div>
        <h2>Zostaw komentarz:</h2>
        <input
            className="custom-select"
            type="text"
            placeholder="Twój nick:"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
        />
        <h2>Twoja ocena w skali 1-6:</h2>
        <input
            className="custom-select"
            type="number"
            placeholder="Ocena:"
            value={ocenaa}
            onChange={(e) => setOcenaa(e.target.value)}
        />
        <br></br>
        <textarea
            className="custom-textarea"
            placeholder="Treść wiadomości"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
        /><br></br>
        <button className="custom-button" onClick={sendMessage}>Wyślij</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
);




};
export default Komentarze;