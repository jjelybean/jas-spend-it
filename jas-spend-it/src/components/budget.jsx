import React, {useState, useEffect} from 'react'
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

function Budget() {

const navigate = useNavigate ();

const [userId, setUserId] = useState(null);

const categoryOptions = ['Food', 'Travel', 'Savings', 'Utilities', 'Extra', 'Others'];
const [customCategory, setCustomCategory] = useState('');
const [categories, setCategories] = useState([]);

const [selectedCategory, setSelectedCategory] = useState('');
const [title, setTitle] = useState ('');
const [desc, setDesc] = useState ('');
const [total_budget, setTotalBudget] = useState('');
const [amount, setAmount] = useState ('');
const [start_date, setStartDate] = useState('');
const [end_date, setEndDate] = useState('');


const [error, setError] = useState(null);
const [success, setSuccess] = useState(false); 

 const [categoryEntries, setCategoryEntries] = useState([
    { selectedCategory: '', customCategory: '', amount: '' }
  ]);

// verify if user is logged in

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


  const handleCategoryChange = (index, field, value) => {
    const updatedEntries = [...categoryEntries];
    updatedEntries[index][field] = value;
    setCategoryEntries(updatedEntries);
  };

// if multiple entries == add new entry 

  const addCategoryEntry = () => {
    setCategoryEntries([...categoryEntries, { selectedCategory: '', customCategory: '', amount: '' }]);
  };

// for the title and description

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!userId) {
    setError('You must be logged in to submit a budget.');
    return;
  }

  const totalCategoryAmount = categoryEntries.reduce((sum, entry) => {
    return sum + (parseFloat(entry.amount) || 0);
  }, 0);


  if (parseFloat(total_budget || 0) < totalCategoryAmount) {
    setError('Oops, I think you might be exceeding your budget! Let\'s go check that again.');
    return;
  }

  const rows = categoryEntries.map((entry) => ({
    title,
    desc,
    user_id: userId,
    category: entry.selectedCategory === 'Others' ? entry.customCategory : entry.selectedCategory,
    amount: entry.amount,
    start_date,
    end_date
  }));

  const { data, error } = await supabase.from('budget').insert(rows);

  if (error) {
    setError(error.message);
  } else {
    setTitle('');
    setDesc('');
    setTotalBudget('');
    setCategoryEntries([{ selectedCategory: '', customCategory: '', amount: '' }]);
    setStartDate('');
    setEndDate('');
    setError(null); 
    setSuccess(true);
      setTimeout(() => {
        navigate('/new-expense'); 
      }, 3000); 
        }
};


// for the categories
useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from('budget')
        .select('category')
        .order('category', { ascending: true });

      if (error) {
        console.error('Error fetching categories:', error.message);
      } else {
        setCategories(data);
      }
    }

    fetchCategories();
  }, []




);


  return (
    <div className='body'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">

      <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-header">
                <div className="card-title">Time to budget!</div> {/* dapat may something wherein there would be an error if mo exceed sha sa actual budget na giinput?? */}
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label htmlFor="title">Budget Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title" 
                        placeholder="e.g (Vacation, necessities)"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                      <small id="titleText" className="form-text text-muted">
                        What are you saving for?
                      </small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="desc">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="desc"
                        placeholder="Budget Description (optional)."
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />

                           {/* to enter TOTAL AMOUNT */}

                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Amount</span>
                    <input
                        type="number"
                        className="form-control"
                        id="amount" 
                        placeholder="Enter amount"
                        value={total_budget}
                        onChange={(e) => setTotalBudget(e.target.value)}
                         step="0.01" // allows decimal input
                        required
                      />
                        <small id="amountText" className="form-text text-muted">
                        How much will you allocate for this budget plan?
                      </small>
                </div>

                    <hr/>

                    <h3>Sort it Out!</h3>
                    <small id="SortOut" className="form-text text-muted">
                         heheh
                    </small>

                {categoryEntries.map((entry, index) => (
                  <div key={index} className="mb-3 p-3 border rounded bg-light">
                    <select
                      className="form-select form-select-sm"
                      value={entry.selectedCategory}
                      onChange={(e) => handleCategoryChange(index, 'selectedCategory', e.target.value)}
                    >
                      <option value="">--Select Category--</option>
                      {categoryOptions.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>

                    {entry.selectedCategory === 'Others' && (
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter custom category"
                        value={entry.customCategory}
                        onChange={(e) => handleCategoryChange(index, 'customCategory', e.target.value)}
                        required
                      />
                    )}

                    <input
                      type="number"
                      className="form-control mt-2"
                      placeholder="Enter amount for this category"
                      value={entry.amount}
                      onChange={(e) => handleCategoryChange(index, 'amount', e.target.value)}
                      step="0.01" 
                      required
                    />
                  </div>
                ))}
             

                <button type="button" className="btn btn-dark" onClick={addCategoryEntry}>
                  Add another category
                </button>

                {/* for start and end date */}


                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text">Date</span>
                        <input
                          type="date"
                          className="form-control"
                          value={start_date}
                          onChange={(e) => setStartDate(e.target.value)}
                          required
                        />
                </div>

                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text">End date of budget</span>
                        <input
                          type="date"
                          className="form-control"
                          value={end_date}
                          onChange={(e) => setEndDate(e.target.value)}
                          required
                        />
                </div>
                
           
                <button type="submit" className="btn btn-dark">I'm all set!</button>
            

                    </div>
                  </div> {/* col-md-6 col-lg-4 */}
                </div> {/* row */}
              </div> {/* card-body */}
            </div> {/* card */}
            </form> 

      {/* for error/ success messages */}

      {success && (
        <div className="alert alert-success" role="alert">
          Budget added successfully!
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}


          </div> {/* col-md-12 */}
        </div> {/* row */}
      </div> {/* container */}
    </div> /* outermost div */
  );
}

export default Budget;
