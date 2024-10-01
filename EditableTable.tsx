"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase from './supabaseClient.js'
import { useEffect, useState } from 'react'
import './tabela.css'; // Importowanie pliku CSS

type TreningData = {
  nr_konia: number;
  imie: string;
  [key: string]: any;
};

const EditableTable: React.FC = () => {
  const [suggestions, setSuggestions] = useState<TreningData[]>([]);
  const [value, setValue] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<TreningData | null>(null);
  const [columns, setColumns] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColumns = async () => {
      try {
        let { data, error } = await supabase
          .from('trening')
          .select('*')
          .limit(1);
        
        if (error) throw error;

        if (data && data.length > 0) {
          setColumns(Object.keys(data[0]));
          setLoading(false); // Zakończ ładowanie po uzyskaniu kolumn
        }
      } catch (error) {
        console.error('Error fetching columns:', error);
        setLoading(false); // Zakończ ładowanie w przypadku błędu
      }
    };

    fetchColumns();
  }, []);

  const fetchSuggestions = async (value: string) => {
    try {
      let { data, error } = await supabase
        .from('trening')
        .select('*')
        .ilike('imie', `%${value}%`);

      if (error) throw error;

      setSuggestions(data || []);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    fetchSuggestions(value);
  };

  const handleSelect = (record: TreningData) => {
    setSelectedRecord(record);
    setValue(record.imie);
    setSuggestions([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, column: string) => {
    if (selectedRecord) {
      setSelectedRecord({ ...selectedRecord, [column]: e.target.value });
    }
  };

  const handleSave = async () => {
    if (selectedRecord) {
      try {
        const { nr_konia, ...updatedData } = selectedRecord;
        console.log('Updating record with id:', nr_konia);
        console.log('Updated data:', updatedData);

        let { error } = await supabase
          .from('trening')
          .update(updatedData)
          .eq('nr_konia', nr_konia);

        if (error) throw error;

        alert('Record updated successfully!');
      } catch (error) {
        console.error('Error updating record:', error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
          className="custom-select"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type 'imie'"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li key={suggestion.nr_konia} onClick={() => handleSelect(suggestion)}>
              {suggestion.imie}
            </li>
          ))}
        </ul>
      )}
      {selectedRecord && (
        <div>
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {columns.map((column) => (
                  <td key={column}>
                    <input
                      type="text"
                      value={selectedRecord[column]}
                      onChange={(e) => handleInputChange(e, column)}
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <button className="custom-button" onClick={handleSave}>Zapisz</button>
        </div>
      )}
    </div>
  );
};

export default EditableTable;