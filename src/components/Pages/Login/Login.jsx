import React ,{useState} from 'react';
import axios from 'axios'
import './login.scss';
import FormInput from '../FormInputs/FormInputs';
import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../../index.js';
import { clearErrors, login,  } from "../../actions/userAction";
import toast from 'react-hot-toast';
// import { login } from '../../../redux/action';

const Login = () => {
  const {isAuthenticated, setIsAuthenticated , loading , setloading} = useContext(Context)

  // const url = "https://credimotionrenderbackend.onrender.com"
  const url ="https://credimotionbackend.vercel.app"

  // const {user} = useSelector(state => state?.user)
  // const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        // confirmPassword: "",
      });

      const { email , password , name} = values;
      const inputs = [
        {
          id: 1,
          name: "name",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          // pattern: "^[A-Za-z0-9]{3,16}$",
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
        // {
        //   id: 3,
        //   name: "birthday",
        //   type: "date",
        //   placeholder: "Birthday",
        //   label: "Birthday",
        // },
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
        // {
        //   id: 5,
        //   name: "confirmPassword",
        //   type: "password",
        //   placeholder: "Confirm Password",
        //   errorMessage: "Passwords don't match!",
        //   label: "Confirm Password",
        //   pattern: values.password,
        //   required: true,
        // },
      ];

      const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        try{
          const {data} = await axios.post(
            `${url}/api/v1/login`, 
            {
              name , 
              email,
              password
            },
            {
              headers : {
                "Content-Type" : "application/json",
                // "Content-Type": "multipart/form-data",
                
                
              }, 
              withCredentials : true
            }
          )
          toast.success("Logged In Successfully!")
          setIsAuthenticated(true)
          setloading(false)
          

        }catch(err){
          toast.error("Check your Credentials!")
          setIsAuthenticated(false)
          setloading(false)

        }

        // dispatch(login(values.email , values.password , values.name))
        // localStorage.setItem("currentUser", JSON.stringify({values}))
        // dispatch(login(values.email , values.password));
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      if(isAuthenticated) return <Navigate to={"/dashboard"}/>

    
  return (
    <div className='login'>
         <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button disabled={loading}>Submit</button>
      <h3>New to Credimotion? Please Register!</h3>
      <Link to='/register'>
        <button className='moveScreenBtn'>Register</button>
      </Link>
      </form>
    </div>
  )
}

export default Login