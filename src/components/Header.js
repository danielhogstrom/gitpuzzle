import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function RoutingComponent() {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
        <button onClick={() => navigate('/about')}>About</button>
      </nav>
      <Outlet />
    </>
  );
}
