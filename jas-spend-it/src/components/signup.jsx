import React, { useState } from 'react'
import "../styles/forms.css"
import supabase from '../supabaseClient';



export default function Signup() {

     const [formData, setFormData]= useState ({
        first_name:"",
        last_name:"",
        email:"",
        password:""

    });

     const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const { data, error } = await supabase.from("users").insert([formData]);

    if (error) {
      console.error("Insert error:", error);
      setStatus("Error submitting form.");
    } else {
      console.log("User inserted:", data);
      setStatus("Signup successful!");
      setFormData({ first_name: "", last_name: "", email: "", password: "" });
    }
  }


  return (
    <div className='body'>
        {/* form */}

    <div className='formText'>
      <h2>Sign-up</h2>
    </div>

  <form onSubmit={handleSubmit}>
    <div className="container border border-success rounded p-3 border-3 custom-border">

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
            <input
            name="first_name"
            type="text"
            className="form-control"
            placeholder="First Name (Required)"
            required
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>

         <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
            <input
            name="last_name"
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
            <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Email (Required)"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Passsword</label>
            <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter Password (Required)"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
    </div>
        <button className="btn btn-primary" type="submit">Sign Up</button>

        <p className="mt-2 text-info">{status}</p>

  </form> {/* heheh */}

    <p>already have an account?Sign in</p>
    </div>
  )

  }

 



