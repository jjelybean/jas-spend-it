import React from 'react'

function Goals() {
  return (
    <div>

      {/* SET NEW GOAL, VIEW GOALS STATS, VIEW BADGES (accomplish how many goals*/}

            <h3 className="fw-bold mb-3">GOALS</h3>
            <div className="row">
              <div className="col-sm-6 col-md-3">
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
              </div>
              <div className="col-sm-6 col-md-3">
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
                          <p className="card-category">View Stats</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
