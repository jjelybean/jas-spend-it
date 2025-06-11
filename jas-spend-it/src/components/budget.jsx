import React from 'react';
import supabase from '../supabaseClient';

function Budget() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Time to budget!</div> {/* dapat may something wherein there would be an error if mo exceed sha sa actual budget na giinput?? */}
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label htmlFor="email2">Budget Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email2" // change 
                        placeholder="e.g (Vacation, necessities)"
                        required
                      />
                      <small id="emailHelp2" className="form-text text-muted">
                        What are you saving for?
                      </small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder="Budget Description (optional)."
                      />

                    <hr/>

                    <h3>Sort it Out!</h3>
                    <small id="SortOut" className="form-text text-muted">
                         heheh
                    </small>

                    {/* selection on what the budget is for specifically */}


                    <select className="form-select form-select-sm" aria-label="Small select example">
                        <option selected>--Select Category--</option>
                        <option value="1">Food</option>
                        <option value="2">Fare</option>
                        <option value="2">Bills</option>
                        <option value="3">Custom</option>
                    </select>


                    </div>
                  </div> {/* col-md-6 col-lg-4 */}
                </div> {/* row */}
              </div> {/* card-body */}
            </div> {/* card */}
          </div> {/* col-md-12 */}
        </div> {/* row */}
      </div> {/* container */}
    </div> /* outermost div */
  );
}

export default Budget;
