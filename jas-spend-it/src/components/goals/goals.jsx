import React from 'react'
import { Link } from 'react-router-dom';

function Goals() {
  return (
    <div>

      {/* SET NEW GOAL, VIEW GOALS STATS, VIEW BADGES (accomplish how many goals*/}

            <h3 className="fw-bold mb-3">GOALS</h3>

            {/* setting new goal */}
            <div className="row">
              <div className="col-sm-6 col-md-3">
                
              <Link
                      to="/set-goals"
                      style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}
              >
 
                <div className="card card-stats card-primary card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="fas fa-users"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers"> {/* insert icon here later */}
                          <p className="card-category">Set New Goal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </Link>
              </div>
                        {/* VIEWING AND DELETING OF GOALS */}
              <div className="col-sm-6 col-md-3">
              <Link
                      to="/my-goals"
                      style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}
              >
                <div className="card card-stats card-info card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="fas fa-user-check"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers"> {/* insert icon here later */}
                          <p className="card-category">My Goals</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              </div>

              {/*insert view stats button later*/}
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-success card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="fas fa-chart-pie"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers"> {/* insert icon here later */}
                          <p className="card-category">View Badges</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
     
     {/* MAIN DIV */}
    </div>
  )
}

export default Goals
