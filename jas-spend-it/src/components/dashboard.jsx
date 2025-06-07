import React, { useState, useEffect } from 'react'
import Popup from './popup'
import '../components/styles/dashboard.css'
import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';

function Dashboard() {

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate('/sign-up');
      } else {
        setShowPopup(true);
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleClose = () => {
    setShowPopup(false)
  }

    const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/landing');
  };

  return (
    <div className='body'>

      <h1>Welcome to Jas spend it</h1>

     <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>


      {/* for username na popup */}
      {showPopup && (
        <Popup message="Let's get started" onClose={handleClose} />
      )}

        <div className='card'>
          <div className="card-header">
            Featured
          </div>
          <div className='card-body options-container'>
            <div className='row'>
                <div className="d-flex gap-5">
                  <button type="button" className="btn btn-outline-primary button-style  w-25 p-3 fs-4">
                      Left</button>
                  <button type="button" className="btn btn-outline-primary button-style w-25 p-3 fs-4">
                    Middle</button>
                  <button type="button" className="btn btn-outline-primary button-style w-25 p-3 fs-4">
                    Right</button>
                </div>  
            </div> {/*row */}
          </div>
        </div>
       

    </div>
  )
}

export default Dashboard
