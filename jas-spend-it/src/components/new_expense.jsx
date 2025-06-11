import React from 'react'
import { Link } from 'react-router-dom';


function New_expense() {
  return (
    <div className='body'>
    {/* new */}
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
                          <p className="card-category">Number</p>
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
                          <p className="card-category">Revenue</p>
                          <h4 className="card-title">$ 1,345</h4>
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
                          <i className="icon-close text-danger"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Errors</p>
                          <h4 className="card-title">23</h4>
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
                          <i className="icon-social-twitter text-primary"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Followers</p>
                          <h4 className="card-title">+45K</h4>
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
              <button type="button" className="btn btn-outline-primary button-style w-100">
                    <Link to ="/new-budget">
                    Add budget
                    </Link>
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
