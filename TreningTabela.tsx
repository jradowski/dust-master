"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from './supabaseClient.js'
import { useEffect, useState } from 'react'
//import './tabela.css'; // Importowanie pliku CSS
import '/app/globals.css';
import '@/boxtabela.css';
import './tabela.css'

type TreningData = {
    [key: string]: any; // Typowanie ogólne dla kolumn
  };
  
  const TreningTable: React.FC = () => {
    const [columns, setColumns] = useState<string[]>([]);
    const [data, setData] = useState<TreningData[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        // Pobieranie danych z tabeli 'trening'
        let { data, error } = await supabase
          .from('trening')
          .select('*');
        
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
    }, []);
  
    if (loading) {
      return <div>Ładowanie danych...</div>;
    }

      return (
          <table>
              <thead>
              <tr>
                  {columns.map((column) => (
                      <th key={column} className="table-header">{column}</th>
                  ))}
              </tr>
              </thead>
              <tbody>
              {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                      {columns.map((column) => (
                          <td key={column} className="table-cell">{row[column]}</td>
                      ))}
                  </tr>
              ))}
              </tbody>
          </table>
      );
  };
  
  export default TreningTable;