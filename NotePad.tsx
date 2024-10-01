"use client";
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase  from './supabaseClient.js'
import React, { useState, useEffect, useCallback } from 'react';




const Notepad: React.FC = () => {
    const [note, setNote] = useState<string>(''); // Stan dla notatki
    const [userId, setUserId] = useState<string | null>(null); // Stan dla ID użytkownika
    const [loading, setLoading] = useState<boolean>(true); // Stan ładowania
    const [noteId, setNoteId] = useState<number | null>(null); // Stan dla ID notatki

    // Pobierz zalogowanego użytkownika z Supabase
    const getCurrentUser = async () => {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
            console.error('Błąd podczas pobierania użytkownika:', error);
        } else if (data.user) {
            console.log("Zalogowany użytkownik:", data.user);
            setUserId(data.user.id);
        } else {
            console.log("Brak zalogowanego użytkownika.");
            setLoading(false);
        }
    };

    // Pobierz notatki dla zalogowanego użytkownika
    const fetchNote = useCallback(async () => {
        if (!userId) {
            console.log("Brak userId, nie można pobrać notatki.");
            return;
        }

        console.log("Pobieranie notatki dla userId:", userId);

        const { data, error } = await supabase
            .from('notes')
            .select('*')
            .eq('user_id', userId)
            .single();

        if (error) {
            console.error('Błąd podczas pobierania notatki:', error);
        } else if (data) {
            console.log("Pobrana notatka:", data);
            setNoteId(data.id || null);
            setNote(data.content || ''); // Ustawiamy zawartość notatki
        }

        setLoading(false); // Wyłączamy ładowanie
    }, [userId]);

    // Subskrypcja stanu sesji
    useEffect(() => {
        getCurrentUser();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user) {
                console.log("Zmiana stanu sesji: użytkownik zalogowany", session.user);
                setUserId(session.user.id);
            } else {
                console.log("Użytkownik wylogowany");
                setUserId(null);
                setNote(''); // Reset notatki
                setNoteId(null); // Reset ID notatki
            }
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    // Pobierz notatki, gdy userId się zmienia
    useEffect(() => {
        if (userId) {
            console.log("Wywoływanie fetchNote po zmianie userId:", userId);
            fetchNote();
        }
    }, [userId, fetchNote]);

    // Zapisz notatkę w bazie danych
    const saveNote = async () => {
        if (!userId) return;

        console.log("Zapisywanie notatki w bazie dla userId:", userId, "Notatka:", note);

        let error: { message: string } | null = null; // Typ dla błędu

        if (noteId) {
            // Aktualizuj istniejącą notatkę
            ({ error } = await supabase
                .from('notes')
                .update({ content: note })
                .eq('id', noteId));
        } else {
            // Wstaw nową notatkę
            ({ error } = await supabase
                .from('notes')
                .insert([{ user_id: userId, content: note }]));
        }

        if (error) {
            console.error('Błąd podczas zapisywania notatki:', error.message);
        } else {
            console.log('Notatka zapisana pomyślnie');
        }
    };

    // Wyświetlanie ekranu ładowania
    if (loading) {
        console.log("Ładowanie...");
        return <div>Ładowanie...</div>;
    }

    // Wyświetlanie notatnika po zakończeniu ładowania
    return (
        <div className="notepad-container">
            <textarea
                className="custom-textarea"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Wpisz swoją notatkę tutaj..."
            /><br></br>
            <button onClick={saveNote} className="custom-button">Zapisz</button>
        </div>
    );
};

export default Notepad;