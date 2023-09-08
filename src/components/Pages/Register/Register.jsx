import React ,{useState} from 'react';
import './register.scss';
import FormInput from '../FormInputs/FormInputs';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast , {Toaster} from 'react-hot-toast'


const Register = () => {
  const url = "https://credimotionbackend.vercel.app/api/v1/register";
  const navigation = useNavigate()

  const successToast = () => toast('Congratulations! You have successfully registered!')
  
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        // confirmPassword: "",
      });
      const inputs = [
        {
          id: 1,
          name: "name",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
       
        {
          id: 3,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id: 4,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: false,
        },
      ];

      const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Registered Successfully');
        navigation('/verification',)
        


        // fetch(url, {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     name : values.name,
        //     email : values.email,
        //     password: values.password
            
        //     // Add parameters here
        //   }),
        //   headers: {
        //     'Content-type': 'application/json; charset=UTF-8',
        //   },
        // })
        //    .then((response) => response.json())
        //    .then((data) => {
        //       console.log(data);
        //       // Handle data
        //    })
        //    .catch((err) => {
        //       console.log(err.message);
        //    });
        axios.post(url , {
          name : values.name,
          email : values.email,
          password: values.password}, 
            {headers:{"Content-Type" : "application/json"}
          }


          
          
          ).then(resp => console.log(resp))
        .catch(error => console.log(error.response.data))
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
  return (
    <div className='register'>
         <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        <Toaster position='top-left'/>

        <h3>Registered User? Please login!</h3>
      <Link to='/login'>
        <button className='moveScreenBtn'>Login</button>
      </Link>
      </form>
      {/* <button onClick={successToast}>yyy</button> */}
      
    </div>
  )
}

export default Register