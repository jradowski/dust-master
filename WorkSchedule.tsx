"use client";
import Image from 'next/image'
import './Schedule.css';
import './tabela.css';
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase  from './supabaseClient.js'
import React, { useState, useEffect, useCallback } from 'react';


interface Employee {
  id: string;
  first_name: string;
  last_name: string;
  position: string;
}

interface ScheduleEntry {
  id: number; // ID wpisu do usunięcia i modyfikacji
  employee_id: string;
  date: string;
  start_time: string;
  end_time: string;
  employee: Employee;
}

const WorkSchedule: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleEntry[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editEntry, setEditEntry] = useState<ScheduleEntry | null>(null);

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

    const fetchSchedule = async () => {
      const { data, error } = await supabase
        .from('work_schedule')
        .select(`
          id,
          employee_id,
          date,
          start_time,
          end_time,
          employees:employees(id, first_name, last_name, position)
        `);

      if (error) {
        console.error('Error fetching schedule:', error);
      } else {
        const formattedData = data.map((entry: any) => ({
          id: entry.id,
          employee_id: entry.employee_id,
          date: entry.date,
          start_time: entry.start_time,
          end_time: entry.end_time,
          employee: entry.employees
        }));
        setSchedule(formattedData);
      }
    };

    fetchEmployees();
    fetchSchedule();
  }, []);

  const deleteScheduleEntry = async (id: number) => {
    const { error } = await supabase
      .from('work_schedule')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting entry:', error);
    } else {
      setSchedule(schedule.filter((entry) => entry.id !== id));
    }
  };

  const updateScheduleEntry = async (entry: ScheduleEntry) => {
    const { error } = await supabase
      .from('work_schedule')
      .update({
        employee_id: entry.employee_id,
        date: entry.date,
        start_time: entry.start_time,
        end_time: entry.end_time,
      })
      .eq('id', entry.id);

    if (error) {
      console.error('Error updating entry:', error);
    } else {
      setSchedule(schedule.map((e) => (e.id === entry.id ? entry : e)));
      setEditEntry(null);
    }
  };

  const handleEdit = (entry: ScheduleEntry) => {
    setEditEntry(entry);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (editEntry) {
      setEditEntry({ ...editEntry, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <table >
        <thead>
          <tr>
            <th>Data</th>
            <th>Godzina rozpoczęcia</th>
            <th>Godzina zakończenia</th>
            <th>Pracownik</th>
            <th>Stanowisko</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.start_time}</td>
              <td>{entry.end_time}</td>
              <td>{`${entry.employee.first_name} ${entry.employee.last_name}`}</td>
              <td>{entry.employee.position}</td>
              <td>
                <button className="button-table" onClick={() => handleEdit(entry)}>Edytuj</button>
                <button className="button-table" onClick={() => deleteScheduleEntry(entry.id)}>Usuń</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editEntry && (
          <div>
          <h3>Edytuj wpis</h3>
          <input
              className="custom-input"
            type="date"
            name="date"
            value={editEntry.date}
            onChange={handleChange}
          />
          <input
              className="custom-input"
            type="time"
            name="start_time"
            value={editEntry.start_time}
            onChange={handleChange}
          />
          <input
              className="custom-input"
            type="time"
            name="end_time"
            value={editEntry.end_time}
            onChange={handleChange}
          />
          <select
              className="custom-select"
            name="employee_id"
            value={editEntry.employee_id}
            onChange={handleChange}
          >
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {`${employee.first_name} ${employee.last_name}`}
              </option>
            ))}
          </select>
          <button className="custom-button" onClick={() => updateScheduleEntry(editEntry)}>Zapisz zmiany</button>
          <button className="custom-button" onClick={() => setEditEntry(null)}>Anuluj</button>
        </div>
      )}
    </div>
  );
};

export default WorkSchedule;