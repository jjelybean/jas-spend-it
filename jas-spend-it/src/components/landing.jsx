import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import supabase from '../supabaseClient.js';
import { motion } from 'framer-motion';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Landing() {

  useEffect(() => {
      AOS.init();
    }, [])

  console.log(supabase);

  return (
    

    <>
    <section className="body d-flex align-items-center justify-content-center min-vh-100">
      <motion.div
        className="text-center p-4 rounded"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-3 display-4 fw-bold">Welcome!</h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="lead"
        >
          Do you want to spend it or not?
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h5 mt-3"
        >
          Smarter Spending Starts Here
        </motion.p>
      </motion.div>
    </section>
  

    {/*next section*/}

    <section className='body'>
        <motion.div
            className="container text-center p-5 bg-white rounded shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h3 className="fw-bold mb-3 text-success">Jas Spend It!</h3>
            <p className="lead">
             <strong>JasSpendIt</strong> is a budgeting website designed to help you track your spending, 
             set savings goals, and stay on top of your finances — all in one easy-to-use place. Whether you're saving for something big, managing monthly 
             expenses, or just want to be smarter with your money, we’ve got your back! 💼💖
            </p>
        </motion.div>
    </section>

    {/* highlights features */}

    <section className='body'>
          <h2> 
            Why You will Love JasSpendIt 
            </h2>
    <div className='container'>
    <div className="row gy-4">
        <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="100">
            <div className="icon-box text-center p-3 bg-white rounded shadow-sm">
            <div className="icon fs-1 text-success"><i className="bi bi-easel"></i></div>
            <h4 className="title"><a href="#">Lorem Ipsum</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
        </div>

        <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="200">
            <div className="icon-box text-center p-3 bg-white rounded shadow-sm">
            <div className="icon fs-1 text-success"><i className="bi bi-gem"></i></div>
            <h4 className="title"><a href="#">Sed ut perspiciatis</a></h4>
            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
        </div>

        <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="300">
            <div className="icon-box text-center p-3 bg-white rounded shadow-sm">
            <div className="icon fs-1 text-success"><i className="bi bi-geo-alt"></i></div>
            <h4 className="title"><a href="#">Magni Dolores</a></h4>
            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
        </div>

        <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="400">
            <div className="icon-box text-center p-3 bg-white rounded shadow-sm">
            <div className="icon fs-1 text-success"><i className="bi bi-command"></i></div>
            <h4 className="title"><a href="#">Nemo Enim</a></h4>
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
        </div>
    </div>
    </div>
   

    </section>
    </>
  );
}

export default Landing;
