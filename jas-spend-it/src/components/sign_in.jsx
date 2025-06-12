import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/forms.css"
import supabase from '../supabaseClient';

function Sign_in() {

  const [formData, setFormData] = useState({emailOrUsername:"", password:""});
  const [status, setStatus] = useState(null);


  const navigate = useNavigate();

  const handleChange= (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }


  const isEmail = (input) => {
    return /\S+@\S+\.\S+/.test(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");

    let emailToUse = formData.emailOrUsername;

    if (!isEmail(formData.emailOrUsername)) {
      const { data, error } = await supabase
        .from("users")
        .select("email")
        .eq("username", formData.emailOrUsername)
        .single();

      if (error || !data) {
      setStatus(
        <>
          Account not found. <a href="/sign-up" className="text-primary">Create an account</a>.
        </>
      );
      return;
    }

      emailToUse = data.email;
    }
    
    const { error } = await supabase.auth.signInWithPassword({
      email: emailToUse,
      password: formData.password,
    });

    if (error) {
      console.error("Error logging in:", error.message);
      setStatus("Login failed: " + error.message);
    } else {
      setStatus("Login successful!");
      //============================== redirect to dashboard =========================
      navigate("/dashboard");
    }
  };

  return (
    <div className='body'>
      
    <div className='formText'>
      <h2>Sign In</h2>
    </div>
    
    <form onSubmit={handleSubmit}>
      <div className="container border border-success rounded p-3 border-3 custom-border">

        <div className="mb-3">
            <label htmlFor="emailOrUsername" className="form-label">Username/Email</label>
            <input
             name="emailOrUsername"
              type="text"
              className="form-control"
              placeholder="Username or Email"
              value={formData.emailOrUsername}
              onChange={handleChange}
              required/>
        </div>

         <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
             name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required/>
        </div>
              <button className="btn btn-success form-button" type="submit">Start Spendin'</button>
      </div>
           
    </form>

    {/* display error message */}
    {status && (
      <div className="alert alert-warning mt-2" role="alert">
        {status}
      </div>
    )}



    </div>
  )
}

export default Sign_in
