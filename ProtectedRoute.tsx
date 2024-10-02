"use client";
import Image from 'next/image'
import Link from 'next/link'
import 'reactjs-popup/dist/index.css'
import supabase  from '@/supabaseClient.js'
import React, { useState, useEffect, useCallback } from 'react';



interface ProtectedRouteProps {
    allowedRoles: string[]; // Lista ról, które mają dostęp
    children: React.ReactNode;
  }
  
  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, children }) => {
    const [userRoles, setUserRoles] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchUser = async () => {
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
  
        if (sessionError) {
          console.error('Błąd podczas pobierania sesji:', sessionError);
          setLoading(false);
          return;
        }
  
        const session = sessionData?.session;
        if (session && session.user) {
          const { data, error } = await supabase
            .from('employees') // Zakładam, że tabela nazywa się 'users'
            .select('uprawnienia') // Pobieramy kolumnę z uprawnieniami
            .eq('id', session.user.id)
            .single();
  
          if (data) {
            setUserRoles(data.uprawnienia); // Zakładam, że 'upra' to tablica ról
          }
  
          if (error) {
            console.error('Błąd podczas pobierania ról użytkownika:', error);
          }
        }
        setLoading(false);
      };
  
      fetchUser();
    }, []);
  
    if (loading) {
      return <div>Ładowanie...</div>; // Można dodać lepszy loader
    }
  
    if (userRoles.length === 0) {
      return ;
    }
  
    // Sprawdzamy, czy użytkownik ma dostęp do tej trasy
    const hasAccess = allowedRoles.some(role => userRoles.includes(role));
  
    if (!hasAccess) {
      return <div>Brak dostępu do tej strony.</div>;
    }
  
    return <>{children}</>;
  };
  
  export default ProtectedRoute;