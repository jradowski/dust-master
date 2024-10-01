import React from 'react';
import ProtectedRoute from './ProtectedRoute';

const WloscicielKoniaTab = () => {
  return (
    <ProtectedRoute allowedRoles={['wlasciciel_konia']}>
      <h1>Zakładka tylko dla wlasciciela konia</h1>
    </ProtectedRoute>
  );
};

export default WloscicielKoniaTab;