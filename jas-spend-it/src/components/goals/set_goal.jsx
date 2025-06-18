// This is where user could add and set his financial goals
import { Link } from 'react-router-dom';
import supabase from '../../supabaseClient'
import React, {useState, useEffect} from 'react'
import '../../App.css';

function Set_goal() {

  const [userId, setUserId] = useState(null);

  const [target_amount, setTargetAmount] = useState('');
  const [purpose, setPurpose] = useState ('');
  
  const [error, setError] = useState(null);


  // verify user is logged in
  useEffect(() => {
  const getUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      setError('User not logged in');
    } else {
      setUserId(user.id);
    }
  };

  getUser();
}, []);

  const handleSubmit = async (e) => {
     e.preventDefault();

     const {data, error} = await supabase

      .from('goals')
      .insert([
        { user_id: userId,
          purpose: purpose,
        target_amount: parseFloat(target_amount)}
      ]);

       if (error) {
          console.error('Error saving goal:', error);
          alert('There was an error setting your goal. Please try again.');
        } else {
          alert('Goal set successfully!');
          // reset the form
          setPurpose('');
          setTargetAmount('');
        }

      

  }


  return (
    <div className='body'>
      
    <div className='container'>
    <form onSubmit={handleSubmit}> 
      <div className="input-group">
        {/* PURPOSE  */}
          <span className="input-group-text">Purpose</span>
          <textarea className="form-control" aria-label="With textarea"
          placeholder='Enter goal title/purpose'
          value={purpose}
          onChange={(e)=> setPurpose(e.target.value)}
          required
          >
          </textarea>

        {/* TARGET AMOUNT  */}

          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Target Amount</span>
                <input
                  type="number"
                  className="form-control"
                  id="target_amount" 
                  placeholder="Enter amount"
                  value={target_amount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  step="0.01" // allows decimal input
                  required
                />
                <small id="amountText" className="form-text text-muted">
                  How much will you allocate for this budget plan?
                </small>
          </div>

            <button type="submit" className="btn btn-dark">Add Goal</button>
      </div>

    </form>
    </div>   {/* container */}




    {/* main div */}
    </div> 
  )
}

export default Set_goal
