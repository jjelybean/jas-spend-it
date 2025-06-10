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

          
          <h2>  Featured </h2>
        
      <div className='container'>
        <div className="row">
              <div className="col-md-4">
       {/* to make the whole thing a button */}   
          <div 
            className="card" 
            style={{ cursor: 'pointer' }} 
            onClick={() => navigate('/new-expense')}
          ></div>
          {/* CARD */}
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="h1 fw-bold float-end text-primary">+5%</div>
                    <h2 className="mb-2">Log</h2>
                    <p className="text-muted">Set budget. spend wisely</p>
                    <div className="pull-in sparkline-fix">
                      <div id="lineChart"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="h1 fw-bold float-end text-danger">-3%</div>
                    <h2 className="mb-2">Start a new goal!</h2>
                    <p className="text-muted">Okay. I promise i'll start saving</p>
                    <div className="pull-in sparkline-fix">
                      <div id="lineChart2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="h1 fw-bold float-end text-warning">i</div>
                    <h2 className="mb-2">Spending Diaries</h2>
                    <p className="text-muted">where did all my money go?</p>
                    <div className="pull-in sparkline-fix">
                      <div id="lineChart3"></div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
