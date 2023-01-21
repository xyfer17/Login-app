import React from 'react'

//import { Link,useNavigate} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';


import styles from '../styles/Username.module.css'

const Recovery = () => {
  return (
    <div className="container mx-auto">
      
      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} >
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Recovery</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            Enter OTP to recover password.
            </span>
          </div>
          <form className='py-24' >
            

            <div className="textbox flex flex-col items-center gap-6">
            
              <input  className={styles.textbox} type="text" placeholder='Enter 6 digit OTP '/>
              <button className={styles.btn} type='submit'>Recover</button>
            </div>

            <div className="text-center py-4">
              <span className='text-grey-500'>Can't get OTP? <button className='text-red-500' to="/recovery">Resend</button></span>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Recovery