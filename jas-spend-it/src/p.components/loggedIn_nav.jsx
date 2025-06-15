import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient.js';

function LoggedIn_nav() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/'); // Redirect to landing page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand text-white" to="/dashboard">Dashboard</Link>
      
      <div className="ms-auto">
        <button className="btn btn-outline-light" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default LoggedIn_nav;


