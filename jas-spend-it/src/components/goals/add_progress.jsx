import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../../supabaseClient';


function Add_progress() {

    const { id } = useParams();
    const [userId, setUserId] = useState(null); 
    const [goal, setGoal] = useState(null); 
    const [current_amount, setCurrentAmount] = useState('');
    const [amount_added, setAmountAdded] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();

       
        const amount = parseFloat(amount_added);
        if (isNaN(amount) || amount <= 0) {
            setError('Please enter a valid number greater than zero.');
            return;
        }

        
        const { error: insertError } = await supabase
            .from('goals_progress')
            .insert([
            {
                goal_id: id,
                amount_added: amount,
                created_at: new Date()
            }
            ]);

        if (insertError) {
            setError('Failed to add progress entry');
            console.error(insertError);
            return;
        }

        const newAmount = (goal.current_amount || 0) + amount;

        const { error: updateError } = await supabase
            .from('goals')
            .update({ current_amount: newAmount })
            .eq('id', id);

        if (updateError) {
            setError('Failed to update goal progress');
            console.error(updateError);
            return;
        }

        setGoal(prev => ({
            ...prev,
            current_amount: newAmount
        }));
        setAmountAdded('');
        setError(null);
};
        
  return (
    <div className='body'>


        <div className="container py-4">
        <h2>{goal.purpose}</h2>
        <p><strong>Target Amount:</strong> ₱{goal.target_amount}</p>
        <p><strong>Current Amount:</strong> ₱{goal.current_amount || 0}</p>

        {/* add form/ button here for add progress */}
        <form onSubmit={handleSubmit}>
            <label>Add Amount: </label>
            <input 
            type="number" 
            min="0" 
            value={amount_added}
            onChange={(e) => setAmountAdded(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>

        </div>


     {/* main div */} 
    </div>
  )
}

export default Add_progress
