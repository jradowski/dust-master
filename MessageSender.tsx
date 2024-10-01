"use client";
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase  from './supabaseClient.js'
import React, { useState, useEffect, useCallback } from 'react';

const MessageSender: React.FC = () => {
    const [messageContent, setMessageContent] = useState<string>('');
    const [userId, setUserId] = useState<string | null>(null);
    const [recipientId, setRecipientId] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCurrentUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                console.error('Błąd podczas pobierania użytkownika:', error);
                setError('Błąd podczas pobierania użytkownika');
            } else if (data.user) {
                setUserId(data.user.id || null);
            }
        };

        getCurrentUser();
    }, []);

    const sendMessage = async () => {
        if (!userId || !recipientId || !messageContent) {
            setError('Wypełnij wszystkie pola');
            return;
        }

        const { error } = await supabase
            .from('messages')
            .insert([{ sender_id: userId, receiver_id: recipientId, content: messageContent }]);

        if (error) {
            console.error('Błąd podczas wysyłania wiadomości:', error);
            setError('Błąd podczas wysyłania wiadomości');
        } else {
            console.log('Wiadomość wysłana pomyślnie');
            setMessageContent(''); // Resetuj pole wiadomości
            setRecipientId(''); // Resetuj pole ID odbiorcy
            setError(null); // Resetuj błędy
        }
    };

    return (
        <div>
            <h2>Wyślij wiadomość</h2>
            <input
                className="custom-input"
                type="text"
                placeholder="ID odbiorcy"
                value={recipientId}
                onChange={(e) => setRecipientId(e.target.value)}
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

export default MessageSender;