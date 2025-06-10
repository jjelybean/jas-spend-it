import React from 'react'
import { Link } from 'react-router-dom';


function New_expense() {
  return (
    <div className='body'>
    <div className='container'>
        <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-outline-primary button-style w-100">
                    <Link to ="/budget">
                    Budget overview
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
