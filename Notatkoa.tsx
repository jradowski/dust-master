/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from './supabaseClient.js'
import { useEffect, useState } from 'react'
//import './tabela.css'; // Importowanie pliku CSS
import 'C:/dust-maste2/dust-master/app/globals.css';

// Definicja typu dla props
interface NotatkaProps {
    horseId: number; // ID konia
}

const Notatka: React.FC<NotatkaProps> = ({ horseId }) => {
    const [notatka, setNotatka] = useState<string>(''); // Początkowa wartość notatki to pusty string
    const [isEditing, setIsEditing] = useState<boolean>(false); // Zarządzanie stanem edycji
    const [loading, setLoading] = useState<boolean>(true); // Zarządzanie stanem ładowania danych

    // Funkcja do pobierania notatki z Supabase
    const fetchNotatka = async () => {
        try {
            const { data, error } = await supabase
                .from('horse') // Nazwa tabeli w Supabase
                .select('notatka') // Pobierz tylko kolumnę 'notatka'
                .eq('id', horseId) // Warunek: id konia równe podanemu horseId
                .single(); // Oczekujemy pojedynczego rekordu

            if (error) {
                console.error('Błąd podczas pobierania notatki:', error);
            } else if (data) {
                setNotatka(data.notatka); // Ustaw notatkę, jeśli istnieje
            }
        } catch (error) {
            console.error('Błąd sieciowy:', error);
        } finally {
            setLoading(false); // Zakończ ładowanie po pobraniu danych
        }
    };

    // Użyj useEffect, aby pobrać notatkę po załadowaniu komponentu
    useEffect(() => {
        fetchNotatka();
    }, [horseId]); // Ponownie pobieraj notatkę, jeśli horseId się zmieni

    // Funkcja zapisująca notatkę do Supabase
    const handleSave = async () => {
        try {
            const { data, error } = await supabase
                .from('horse')
                .update({ notatka }) // Aktualizacja kolumny "notatka"
                .eq('id', horseId); // Warunek: id konia równe horseId

            if (error) {
                console.error('Błąd podczas zapisywania notatki:', error);
            } else {
                console.log('Notatka została zaktualizowana:', data);
            }
        } catch (error) {
            console.error('Błąd sieciowy:', error);
        }
        setIsEditing(false); // Zakończ tryb edycji
    };

    const handleEdit = () => {
        setIsEditing(true); // Włącz tryb edycji
    };

    if (loading) {
        return <p>Ładowanie...</p>; // Komunikat o ładowaniu, jeśli dane są w trakcie pobierania
    }

    return (
        <div>
            <h1 className="text-xl"></h1>
            {isEditing ? (
                // Pole tekstowe do edycji
                <textarea
                    className="custom-textarea"
                    value={notatka}
                    onChange={(e) => setNotatka(e.target.value)} // Obsługa zmiany tekstu
                />
            ) : (
                // Wyświetlenie notatki
                <h2 className="text-opacity-50 font-semibold">{notatka || 'Brak notatki'}</h2> // Jeśli brak notatki, wyświetl komunikat
            )}

            {isEditing ? (
                // Przycisk "Zapisz" do zapisania notatki
                <button
                    onClick={handleSave}
                    className="custom-button"
                >
                    Zapisz
                </button>
            ) : (
                // Przycisk "Edytuj" do rozpoczęcia edycji
                <button
                    onClick={handleEdit}
                    className="custom-button"
                >
                    Edytuj
                </button>
            )}
        </div>
    );
};

export default Notatka;