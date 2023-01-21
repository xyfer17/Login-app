import toast from 'react-hot-toast'



/** validate login page username */

export async function usernameValidate(values){
    const errors = usernameVerify({},values);
   

    return errors;
}




/** validate login page password */

export async function passwordValidate(values){
    const errors = passwordVerify({},values);
   

    return errors;
}


/** validate lreset password */

export async function resetPasswordValidate(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Password not match...!");
    }

    return errors;
}




/** ***************************************************************************************** */



/** validate username */

function usernameVerify(error={},values){
    if(!values.username){
        error.username = toast.error('Username Required ... !')
    }

    else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username ... !')
    }

    return error;
}



/** validate password */

function passwordVerify(error={},values){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        error.password = toast.error('Password Required ... !');
    }

    else if(values.password.includes(" ")){
        error.password = toast.error('Wrong Password ... !');
    }

    else if(values.password.length<4){
        error.password = toast.error("Password must be more than 4 Characters long");
    }

    else if(!specialChars.test(values.password)){
        error.password = toast.error("Password must contain Special Characters")
    }


    return error;
}