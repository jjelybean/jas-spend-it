import React, { useState, useEffect } from 'react';
import supabase from '../../supabaseClient';

function My_goals() {

  const [userId, setUserId] = useState ('');
  const [purpose, setPurpose] = useState ('');
  const [target_amount, setTargetAmount] = useState ('');
  const [goals, setGoals] = useState([]);
  const [error, setError] = useState (null);

    useEffect(() => {
    const fetchUserAndGoals = async () => {
    
    // verify user is logged in
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        setError('User not logged in');
        return;
      }

      setUserId(user.id);

      // Fetch info from the database
      const { data: goalsData, error: goalsError } = await supabase
        .from('goals')
        .select('purpose, target_amount')
        .eq('user_id', user.id);

      if (goalsError) {
        setError('Error fetching goals');
        console.error(goalsError);
      } else {
        setGoals(goalsData);
      }
    };

    fetchUserAndGoals();
  }, []);

  return (
    <div className='body'>

      <div className='container'>
      <div className='row py'> 
        {/*checks for goals or any errors: else*/}
       {goals.length === 0 && !error ? (
        <p>No goals found.</p> //*add option to add goal
      ) : (
      <div className="row">
      {goals.map((goal, index) => (
        <div className="col-sm-6 mb-3 mb-sm-0" key={index}>
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{goal.purpose}</h5>
              <p className="card-text">₱{goal.target_amount}</p>
              {/* make this clickable */}
            </div>
          </div>
        </div>
      ))}
    </div>
      )}
      </div> {/*row*/}
      </div> {/*container*/}
    {/* main div */}
  </div> 
  )
}

export default My_goals;
