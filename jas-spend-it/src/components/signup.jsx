import React, { useState, useEffect } from 'react'
import "../styles/forms.css"
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Signup() {

  const navigate = useNavigate();
  const [status, setStatus] = useState("");

    const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
   //supabase auth na table
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          first_name: formData.first_name,
          last_name: formData.last_name,
        }
      }
    });

    if (error) {
      console.error("Sign-up error:", error.message);
      setStatus("Signup failed: " + error.message);
      return; 
    }

    if (!data.user) {
    setStatus("Signup failed: No user returned.");
    return;
  }
  
    // to link auth to users table using userID

  const userId = data.user.id;

  const { error: insertError } = await supabase.from("users").insert([
    {
      user_id: userId, 
      first_name: formData.first_name,
      last_name: formData.last_name,
    }
  ]);

   if (insertError) {
    console.error("User table insert error:", insertError.message);
    setStatus("Signup failed");
    return;
  }    
      navigate("/dashboard");

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
            <label htmlFor="first_name" className="form-label">First Name</label>
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
            <label htmlFor="last_name" className="form-label">Last Name</label>
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
            <label htmlFor="email" className="form-label">Email Address</label>
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
            <label htmlFor="password" className="form-label">Password</label>
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

    <p>already have an account?
      <Link to="/sign-in" >Sign in
      </Link>
    </p>
    </div>
  )

  }

 



