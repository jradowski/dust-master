"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Dropdown from "C:/dust-maste2/dust-master/app/components/Dropdown";
import Image from "next/image";
import { supabase } from '/dust-maste2/dust-master/supabaseClient2.js';
import SignUp from '/dust-maste2/dust-master/SingUp';
import Login from '/dust-maste2/dust-master/Login';
import Wylogowany from '/dust-maste2/dust-master/Wylogowany';
import Cos from '/dust-maste2/dust-master/app/workers/page';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '@/ProtectedRoute'; // Komponent, który sprawdza uprawnienia

const WlascicielStajniTab = () => {
  return (
    <ProtectedRoute allowedRoles={['wlasciciel_stajni']}>
      <h1>Zakładka tylko dla właściciela stajni</h1>
      <Link href="/zarzadzanie">
                    <div className="hover:bg-gray-500  pl-2">
                        Zarządzanie stajnią
                    </div>
      </Link>
      <Link href="/dashboard/harmonogram">
                    <div className="hover:bg-gray-500 whitespace-break-spaces pl-2">
                        Zarządzanie pracownikami
                    </div>
                </Link>
    </ProtectedRoute>
  );
};

export default WlascicielStajniTab;