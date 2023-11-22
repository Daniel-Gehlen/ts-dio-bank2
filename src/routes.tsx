// MainRoutes.tsx
import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AppContext } from './components/AppContext';
import Conta from './pages/Conta';
import ContaInfo from './pages/ContaInfo';
import Home from './pages/Home';

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/conta'
        element={isLoggedIn ? <Conta /> : <Navigate to="/" />}
      />
      <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Navigate to="/" />} />
      <Route path='/infoconta' element={<ContaInfo />} />
    </Routes>
  );
}

export default MainRoutes;
