import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function New_expense() {
     const navigate = useNavigate();

  return (
    <div className='body'>
  
    <div className='container'>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="icon-pie-chart text-warning"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Current balance</p>
                          <h4 className="card-title">150GB</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="icon-wallet text-success"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Total Spent</p>
                          <h4 className="card-title">$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
      </div> 


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
