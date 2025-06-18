import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../../supabaseClient';


function Add_progress() {

    const { id } = useParams();
    const [userId, setUserId] = useState(null); 
    const [goal, setGoal] = useState(null); 
    const [error, setError] = useState(null);

    // verify that the user is logged in 
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
        
         useEffect(() => {
            const fetchGoal = async () => {
            const { data, error } = await supabase
                .from('goals')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                setError('Goal not found');
                console.error(error);
            } else {
                setGoal(data);
            }
            };

            if (id) fetchGoal();
        }, [id]);

    if (error) return <p>Error: {error}</p>;
    if (!goal) return <p>Loading...</p>;
        
  return (
    <div className='body'>

        <div className="container py-4">
        <h2>{goal.purpose}</h2>
        <p><strong>Target Amount:</strong> ₱{goal.target_amount}</p>
        <p><strong>Current Progress:</strong> ₱{goal.progress || 0}</p>

        {/* add form/ button here for add progress */}
        <form>
        <label>Add Amount: </label>
        <input type="number" min="0" />
        <button type="submit">Add</button>
        </form>

        </div>


     {/* main div */} 
    </div>
  )
}

export default Add_progress
