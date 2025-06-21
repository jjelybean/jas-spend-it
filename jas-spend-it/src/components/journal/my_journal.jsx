import supabase from '../../supabaseClient';
import React, { useEffect, useState } from 'react';

function My_journal() {

    const [title, setTitle] = useState ('');
    const [desc, setDesc] = useState ('');
    const [userid, setUserId] = useState ('');
    const [tags, setTags] = useState ('');

    const [error, setError] = useState (null);

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

        const handleSubmit = async (e) => {
            e.preventDefault();

            const {data, error} = await supabase 

            .from ('diary')
            .insert([{ 
                user_id: userid,
                title: title,
                desc: desc,
                tags: tags
            }])

            if (error){
                console.log('Oops, there seems to be a problem!', error)
                alert('try again later hahha')
            } else {
                alert('Journal entry added!')
                // clears form
                setTitle(''),
                setDesc('')
            }


        }
  return (
    <div className='body'>

        < div className='container'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page"
                    data-bs-toggle="tab" href="#tab1">
                        My journal entries
                    </a>
                </li> {/* add form */}
                <li className="nav-item">
                    <a className="nav-link" aria-current="page"
                    data-bs-toggle="tab" href="#notepad">
                        Notepad
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page"
                    data-bs-toggle="tab" href="#tab3">
                        what to put
                    </a>
                </li>
            </ul>

            {/* for tab content */}

        <div className="tab-content mt-3">

            <div className="tab-pane fade show active" id="tab1">
                <h2>Spending Diaries</h2>
                <form onSubmit={handleSubmit}>

                    {/* tags */}
                    <div className="form-group mt-3">
                    <label className="form-label">Tags</label>
                        <div className="d-flex flex-wrap gap-2">
                            {['Daily entry', 'Leisure', '+'].map((skill, index) => (
                            <label key={index} className="btn btn-outline-primary">
                                <input
                                type="checkbox"
                                value={skill}
                                onChange={(e) => console.log(e.target.value)} // replace later
                                style={{ display: 'none' }}
                                />
                                {skill}
                            </label>
                            ))}
                        </div>
                    </div>

                    {/* title */}
                    <div className = "container">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" 
                            placeholder = 'Title'
                            value={title}
                            onChange={(e)=> setTitle (e.target.value)}
                            />
                        </div>

                        {/* desc */}
                        <div className="input-group">
                            <textarea className="form-control" 
                            aria-label="With textarea"
                            placeholder='What is on your mind?'
                            value={desc}
                            onChange={(e)=> setDesc(e.target.value)}
                            required
                            >
                            </textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark">Add entry</button>
                </form>
            </div>

            <div className="tab-pane fade" id="notepad">
            Content for Tab 2
            </div>
            <div className="tab-pane fade" id="tab3">
            Content for Tab 3
            </div>

        </div>

        </div> {/* container for navs and tabs */}
      
    
    {/* main div */}
    </div>
  )
}

export default My_journal
