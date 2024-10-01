"use client";
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import './tabela.css'
import supabase  from './supabaseClient.js'
import React, { useState, useEffect, useCallback } from 'react';

interface Employee {
  id: string;
  first_name: string;
  last_name: string;
}

const AddTask: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');

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

  const handleAddTask = async () => {
    if (!selectedEmployee || !title) {
      alert('Please fill in all required fields');
      return;
    }

    const { error } = await supabase
      .from('tasks')
      .insert([
        {
          employee_id: selectedEmployee,
          title,
          description,
          due_date: dueDate,
        }
      ]);

    if (error) {
      console.error('Error adding task:', error);
    } else {
      alert('Task added successfully!');
      // Reset form
      setSelectedEmployee('');
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
      <div>
          <h2 className="mb-2 text-2xl">Dodaj zadanie:</h2>
          <label>Dla paracownika:</label>
          <select
              className="custom-select"
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
          >
              <option value="">wybierz pracownika</option>
              {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                      {employee.first_name} {employee.last_name}
                  </option>
              ))}
          </select>
          <br></br>
          <label>Tytuł zadania:</label>

          <input
              className="custom-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />

          <label className="float-left">Treść:</label>

          <textarea
              className="custom-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
          />

          <label>Termin:</label>
          <input
              className="custom-input"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
          />

          <button className="custom-button" onClick={handleAddTask}>Dodaj</button>
      </div>
  );
};

export default AddTask;