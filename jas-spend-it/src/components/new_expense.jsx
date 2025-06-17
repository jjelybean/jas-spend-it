import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function New_expense() {
     const navigate = useNavigate();

  return (
    <div className='body'>
  
    <h2> Your Finances</h2>
    <section className='container py-3'>
    
    <h1></h1>
            <div className="row justify-content-around">
              <div className="col-4"> 
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3">
                        <div className="icon-big text-center">
                          <i className="fa-solid fa-money-bill-1-wave custom-icon"></i>   {/* icon*/}
                        </div>
                      </div>
                      <div className="col-6"> {/* sa text */}
                        <div className="numbers">
                          <p className="card-category mt-4">Current balance</p>
                          <h4>150GB</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4"> 
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3">
                        <div className="icon-big text-center">
                          <i className="fa-solid fa-money-bill-1-wave custom-icon "></i>   {/* icon*/}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="numbers">
                          <p className="card-category mt-4">Total Spent</p>
                          <h4 className="card-title">$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
    </section> 


    <div className='container'>
        <div className="row">
            <div className="col-6">
                <button
                  type="button"
                  className="btn btn-outline-primary button-style w-100"
                  onClick={() => navigate('/add-budget')}
                >
                  Start budgeting
                </button>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-outline-primary button-style w-100">
                    Money Spent</button>
            </div>
        </div>
    </div>
    </div>

    
  )
}

export default New_expense
