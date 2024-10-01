"use client";
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase  from './supabaseClient.js'
import React, { useState, useEffect, useCallback } from 'react';

const Inbox: React.FC = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const [userId, setUserId] = useState<string | null>(null);
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

    useEffect(() => {
        const fetchMessages = async () => {
            if (!userId) return;

            const { data, error } = await supabase
                .from('messages')
                .select('*')
                .eq('receiver_id', userId)
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Błąd podczas pobierania wiadomości:', error);
                setError('Błąd podczas pobierania wiadomości');
            } else {
                setMessages(data || []);
            }
        };

        fetchMessages();
    }, [userId]);

    return (
        <div>
            <h2>Skrzynka odbiorcza</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <p><strong>Od (ID):</strong> {message.sender_id}</p>
                        <p><strong>Treść:</strong> {message.content}</p>
                        <p><strong>Data:</strong> {new Date(message.created_at).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inbox;