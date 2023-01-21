import avatar from '../assets/147133.png'
import { Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';
import styles from '../styles/Username.module.css'
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

const Password = () => {

  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };



  const navigate = useNavigate();

  const [showpass, setShowpass] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      navigate('/profile')
    }
  })


  const IconButton = styled(ButtonUnstyled)(
    ({ theme }) => `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: inherit;
      cursor: pointer;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[700]};
      `,
  );


  const handleClickShowPassword = () => {

    setShowpass(!showpass);
  }


  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} >
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello Again !</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by connecting with us.
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={avatar} className={styles.profile_img} alt='avatar' />
            </div>

            <div className="textbox flex flex-col items-center gap-6">


              <Input {...formik.getFieldProps('password')} className={styles.textbox} type={showpass ? "text" : "password"} placeholder='Password'
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showpass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>} />





              <button className={styles.btn} type='submit'> Login</button>
            </div>

            <div className="text-center py-4">
              <span className='text-grey-500'>Forgot Password? <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
            </div>

          </form>
        </div>
      </div>





    </div>
  )
}

export default Password