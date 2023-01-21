import React from 'react'
import avatar from '../assets/147133.png'
import { Link,useNavigate} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import {useFormik} from 'formik';
import { usernameValidate } from '../helper/validate';
import styles from '../styles/Username.module.css'

const Password = () => {
  const navigate = useNavigate();

    const formik = useFormik({
      initialValues:{
        password:''
      },
      validate: usernameValidate,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async values =>{
        navigate('/profile')
      }
    })


  return (
    <div className="container mx-auto">
      
      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} >
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by connecting with us.
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={avatar} className={styles.profile_img} alt='avatar'/>
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='password'/>
              <button className={styles.btn} type='submit'> Login</button>
            </div>

            <div className="text-center py-4">
              <span className='text-grey-500'>Not a Member? <Link className='text-red-500' to="/register">Register Now</Link></span>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Password