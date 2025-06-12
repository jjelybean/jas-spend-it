import React, {useState, useEffect} from 'react'
import supabase from '../supabaseClient';

function Budget() {

const [userId, setUserId] = useState(null);

const categoryOptions = ['Food', 'Travel', 'Savings', 'Utilities', 'Extra', 'Others'];
const [customCategory, setCustomCategory] = useState('');

const [selectedCategory, setSelectedCategory] = useState('');
const [title, setTitle] = useState ('');
const [desc, setDesc] = useState ('');

const [error, setError] = useState(null);
const [success, setSuccess] = useState(false); 

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


// for the title and description

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      setError('You must be logged in to submit a budget.');
      return;
    }

      const finalCategory =
    selectedCategory === 'Others' ? customCategory : selectedCategory;


    const { data, error } = await supabase
      .from('budgets')
      .insert([{ title, description: desc, user_id: userId }]);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTitle('');
      setDesc('');
      setCustomCategory('');
      setSelectedCategory('');
    }
  };


// for the categories
useEffect(() => {
  async function fetchCategories() {
    const { data, error } = await supabase
      .from('budget') 
      .select('id, name')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching categories:', error.message);
    } else {
      setCategories(data);
    }
  }

  fetchCategories();
}, []);


  return (
    <div>
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

                    <hr/>

                    <h3>Sort it Out!</h3>
                    <small id="SortOut" className="form-text text-muted">
                         heheh
                    </small>

                    {/* selection on what the budget is for specifically */}

                    <select
                      className="form-select form-select-sm"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      aria-label="Small select example"
                    >
                      <option value="">--Select Category--</option>
                      {categoryOptions.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>

                    {/* if other option is selected */}

                    {selectedCategory === 'Others' && (
                    <div className="form-group mt-2">
                      <label htmlFor="customCategory">Specify Category</label>
                      <input
                        type="text"
                        className="form-control"
                        id="customCategory"
                        value={customCategory}
                        onChange={(e) => setCustomCategory(e.target.value)}
                        placeholder="Enter custom category"
                        required
                      />
                    </div>
                    )}

                <button type="submit" className="btn btn-dark">Add</button>


                    </div>
                  </div> {/* col-md-6 col-lg-4 */}
                </div> {/* row */}
              </div> {/* card-body */}
            </div> {/* card */}
            </form> 
          </div> {/* col-md-12 */}
        </div> {/* row */}
      </div> {/* container */}
    </div> /* outermost div */
  );
}

export default Budget;
