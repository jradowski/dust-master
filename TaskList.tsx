"use client";
import Image from 'next/image'
import Link from 'next/link'
import "./tabela.css"
import 'reactjs-popup/dist/index.css'
import supabase  from './supabaseClient.js'
import React, { useState, useEffect, useCallback } from 'react';


interface Employee {
    id: string;
    first_name: string;
    last_name: string;
  }
  
  interface Task {
    id: string;
    title: string;
    description: string;
    due_date: string;
    status: string;
    employee: {
      first_name: string;
      last_name: string;
    };
  }
  
  const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      // Fetch tasks from the database
      const fetchTasks = async () => {
        setLoading(true);
        const { data, error } = await supabase
          .from('tasks')
          .select(`
            id,
            title,
            description,
            due_date,
            status,
            employee: employees (first_name, last_name)
          `);
  
        if (error) {
          console.error('Error fetching tasks:', error);
        } else {
          // Ensure the 'employee' is not an array and is a single object
          const formattedTasks = data.map((task: any) => ({
            ...task,
            employee: Array.isArray(task.employee) ? task.employee[0] : task.employee, // Grab the first employee if it's an array
          }));
          setTasks(formattedTasks);
        }
        setLoading(false);
      };
  
      fetchTasks();
    }, []);
  
    if (loading) return <div>Loading tasks...</div>;
  
    return (
      <div>
        <table >
          <thead>
            <tr>
              <th>Tytuł</th>
              <th>Treść</th>
              <th>Termin</th>
              <th>Status</th>
              <th>Pracownik</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.due_date}</td>
                <td>{task.status}</td>
                <td>{`${task.employee.first_name} ${task.employee.last_name}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TaskList;