"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from './supabaseClient.js'
import { useEffect, useState } from 'react'
import { addWeeks, isWithinInterval, isSameWeek } from 'date-fns';



function Szczepienie() {
    const [records, setRecords] = useState<{ id: number; imie: string; }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchRecords();
    }, []);
  
    // Funkcja pobierająca dane z Supabase
    const fetchRecords = async () => {
      try {
        const { data, error } = await supabase
          .from('horse') // Nazwa tabeli
          .select('*'); // Pobiera wszystkie kolumny
  
        if (error) throw error;
  
        // Filtruj rekordy, gdzie data_termin + 10 tygodni to obecny tydzień
        const currentWeekRecords = data.filter(record => {
          const recordDate = new Date(record.szczepienie); // data_termin to nazwa kolumny
          const futureDate = addWeeks(recordDate, 16);
          return isSameWeek(futureDate, new Date()); // Sprawdza, czy data jest w bieżącym tygodniu
        });
  
        setRecords(currentWeekRecords);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="italic">
        <h1 className="font-bold">Filtered Records</h1>
        Termin szczepein na ten tydzień:
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul>
          {records.map((record) => (
            <li key={record.id}> {record.imie}</li> 
          ))}
        </ul>
      </div>
    );
  }
  
  export default Szczepienie;