// dashboard when upon user log-in 
import React, { useState, useEffect } from 'react'
import Popup from './popup'
import '../components/styles/dashboard.css'
import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Dashboard() {

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // AOS

    useEffect(() => {
      AOS.init();
    }, [])


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


      {/* for username na popup */}
      {showPopup && (
        <Popup message="Let's get started" onClose={handleClose} />
      )}

      {/* pending goals -- podcast API */}  
  
  <section className='body py-3'>
    <div className='container'>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">BUDGET STATS</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">PODCAST HERE</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </section>     

  <section className='body'> 
      <h2>  nu gagawen </h2> {/*add style later*/}
        
    <div className='container'>
      <div className="row">
        <div className="col-4">
              {/* button */}   
          <Link
            to="/new-expense"
            style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}
          >
                  {/* CARD */}
                <div className="card">
                      <div className="card-body pb-0">
                         <i className="fa-solid fa-wallet fa-2x custom-icon"></i> {/* icon*/}
                          <h2 className="mb-2">Log</h2>
                            <p className="text-muted">Set budget. spend wisely</p>
                            <div className="pull-in sparkline-fix">
                              <div id="lineChart"></div>
                            </div>
                          </div>
                        </div>
              </Link>
        </div>

{/* second */}

        <div className="col-4">
          <Link
            to="/goals"
            style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}
          >
                        <div className="card">
                          <div className="card-body pb-0">
                             <i className="fa-solid fa-medal fa-2x custom-icon"></i> {/* icon */}
                            <h2 className="mb-2">Start a new goal!</h2>
                            <p className="text-muted">Okay. I promise i'll start saving</p>
                            <div className="pull-in sparkline-fix">
                              <div id="lineChart2"></div>
                            </div>
                          </div>
                        </div>
            </Link>
        </div>

{/* third -- diary */}

        <div className="col-4">
          <Link
            to="/new-expense"
            style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}
          >
                        <div className="card">
                          <div className="card-body pb-0"> 
                             <i className="fa-solid fa-book fa-2x custom-icon"></i> {/* icon */}
                            <div className="h1 fw-bold float-end text-warning">i</div>
                            <h2 className="mb-2">Spending Diaries</h2>
                            <p className="text-muted">where did all my money go?</p>
                            <div className="pull-in sparkline-fix">
                              <div id="lineChart3"></div>
                            </div>
                          </div>
                        </div>
            </Link>
        </div>
    
        </div> {/* row */}
     </div>   {/* container */}
  </section>  

</div> //body 
  )
}

export default Dashboard
