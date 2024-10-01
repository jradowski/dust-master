"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from './supabaseClient.js'
import { useEffect, useState } from 'react'
//import './tabela.css'; // Importowanie pliku CSS
import 'C:/dust-maste2/dust-master/app/globals.css';
import './boxtabela.css';

interface TreningJedenProps {
    horseIdT: number; // ID konia
}

type TreningData = {
    [key: string]: any; // Typowanie ogólne dla kolumn
  };
  
  const TreningJeden: React.FC<TreningJedenProps> = ({ horseIdT }) => {
    const [columns, setColumns] = useState<string[]>([]);
    const [data, setData] = useState<TreningData[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        // Pobieranie danych z tabeli 'trening'
        let { data, error } = await supabase
          .from('trening')
          .select('*, imie')
          .eq('nr_konia',  horseIdT); 
          
        
        if (error) {
          console.error(error);
          setLoading(false);
          return;
        }
  
        if (data && data.length > 0) {
          // Pobieranie nazw kolumn z pierwszego wiersza danych
          setColumns(Object.keys(data[0]));
          setData(data);
        }
  
        setLoading(false);
      };
  
      fetchData();
    }, [horseIdT]);
  
    if (loading) {
      return <div>Ładowanie danych...</div>;
    }

      return (
       
          <table >
              <thead>
              <tr>
                
                  {columns.map((column) => (
                      <th key={column} >{column}</th>
                  ))}
              </tr>
              </thead>
              <tbody>
              {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                      {columns.map((column) => (
                          <td key={column} >{row[column]}</td>
                      ))}
                  </tr>
              ))}
              </tbody>
          </table>
      );
  };
  
  export default TreningJeden;