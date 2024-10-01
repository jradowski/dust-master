"use client";
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase  from './supabaseClient.js'
import React, { useState, useEffect, useCallback } from 'react';


const UserList: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data, error } = await supabase.auth.admin.listUsers();

                if (error) {
                    throw error;
                }

                setUsers(data?.users || []);
            } catch (error) {
                setError('Błąd podczas pobierania użytkowników: ' + (error as Error).message);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.email} (ID: {user.id})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;