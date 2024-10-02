import React from 'react';
import ProtectedRoute from '@/ProtectedRoute';

const PracownikTab = () => {
  return (
    <ProtectedRoute allowedRoles={['pracownik']}>
      <h1>Zakładka tylko dla pracowników</h1>
    </ProtectedRoute>
  );
};

export default PracownikTab;