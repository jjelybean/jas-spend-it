import React from 'react'
import "../styles/forms.css"

function Sign_in() {
  return (
    <div>
      <h2>Sign-In</h2>
    
         <div className="container border border-success rounded p-3 border-3 custom-border">

        <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Username/Email</label>
            <input type="text" className="form-control" id="exampleFormControlInput1"
                   placeholder="Username/Email" required/>
        </div>

         <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Password</label>
            <input type="text" className="form-control" id="exampleFormControlInput1"
                   placeholder="Password" required/>
        </div>
    </div>


    </div>
  )
}

export default Sign_in
