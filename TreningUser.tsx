"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from './supabaseClient.js'
import { useEffect, useState } from 'react'
//import './tabela.css'; // Importowanie pliku CSS
import 'C:/dust-maste2/dust-master/app/globals.css';
import './tabela.css'


type TreningData = {
    [key: string]: any; // General typing for columns
  };
  
  const TreningUser: React.FC = () => {
    const [columns, setColumns] = useState<string[]>([]);
    const [data, setData] = useState<TreningData[]>([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null); // State for the user ID
  
    // Fetch logged-in user from Supabase
    const getCurrentUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error);
      } else if (data.user) {
        console.log("Logged in user:", data.user);
        setUserId(data.user.id); // Set the user ID when found
      } else {
        console.log("No logged-in user.");
        setLoading(false);
      }
    };
  
    // Fetch training data after the user ID is set
    useEffect(() => {
      const fetchData = async () => {
        if (!userId) return; // Exit if userId is null
  
        let { data, error } = await supabase
          .from('trening')
          .select('*')
          .eq('id_jezdzca', userId ); 
  
        if (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
          return;
        }
  
        if (data && data.length > 0) {
          // Get column names from the first row
          setColumns(Object.keys(data[0]));
          setData(data);
        }
  
        setLoading(false);
      };
  
      getCurrentUser(); // Call getCurrentUser before fetching data
      fetchData(); // Fetch data only if userId is available
    }, [userId]); // Trigger the effect when userId changes
  
    if (loading) {
      return <div>Loading data...</div>;
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
  
  export default TreningUser;