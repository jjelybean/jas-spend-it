import React from 'react'
import "../styles/forms.css"

function Signup() {
  return (
    <div className='body'>
        {/* form */}

    <div className='formText'>
      <h2>Sign-up</h2>
    </div>

    <div className="container border border-success rounded p-3 border-3 custom-border">

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">First Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1"
                   placeholder="First Name (Required)" required/>
        </div>

         <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Last Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1"
                   placeholder="Last Name"/>
        </div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email Address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1"
                   placeholder="email@gmail.com"/>
        </div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Passsword</label>
            <input type="password" className="form-control" id="exampleFormControlInput1"
                   placeholder="Enter New password"/>
        </div>
    </div>


    </div>
  )
}

export default Signup;
