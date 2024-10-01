"use client";
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase  from './supabaseClient.js'
import React, { useState, useEffect, useCallback,  FormEvent  } from 'react';

interface Employee {
    id: string;
    first_name: string;
    last_name: string;
    position: string;
  }
  
  const AddSchedule: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
    const [startTime, setStartTime] = useState<string>('07:00');
    const [endTime, setEndTime] = useState<string>('18:00');
    const [dates, setDates] = useState<string[]>([]);
  
    useEffect(() => {
      const fetchEmployees = async () => {
        const { data, error } = await supabase
          .from('employees')
          .select('*');
  
        if (error) {
          console.error('Error fetching employees:', error);
        } else {
          setEmployees(data);
        }
      };
  
      fetchEmployees();
    }, []);
  
    const handleAddSchedule = async () => {
      for (const date of dates) {
        for (const employeeId of selectedEmployees) {
          const { error } = await supabase
            .from('work_schedule')
            .insert({
              employee_id: employeeId,
              date: date,
              start_time: startTime,
              end_time: endTime,
            });
  
          if (error) {
            console.error('Error adding schedule entry:', error);
          }
        }
      }
      // Wyczyść formularz po dodaniu
      setSelectedEmployees([]);
      setDates([]);
      setStartTime('07:00');
      setEndTime('18:00');
    };
  
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (dates.includes(value)) {
        setDates(dates.filter(date => date !== value));
      } else {
        setDates([...dates, value]);
      }
    };
  
    return (
      <div>
        <h2>Dodaj godziny do harmonogramu</h2>
        <label>
          Wybierz pracowników:
          <select
            multiple
            value={selectedEmployees}
            onChange={(e) => {
              const options = e.target.options;
              const values: string[] = [];
              for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                  values.push(options[i].value);
                }
              }
              setSelectedEmployees(values);
            }}
          >
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {`${employee.first_name} ${employee.last_name}`}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Czas rozpoczęcia:
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Czas zakończenia:
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
        <br />
        <h3>Wybierz daty:</h3>
        <input type="date" onChange={handleDateChange} />
        <br />
        <h4>Wybrane daty:</h4>
        <ul>
          {dates.map(date => (
            <li key={date}>{date}</li>
          ))}
        </ul>
        <button onClick={handleAddSchedule}>Dodaj do harmonogramu</button>
      </div>
    );
  };
  
  export default AddSchedule;