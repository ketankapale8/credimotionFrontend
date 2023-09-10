import React ,{useState} from 'react';
import axios from 'axios'
import './profile.scss';
import FormInput from '../FormInputs/FormInputs';
import { useContext } from 'react';
import { Context } from '../../../index.js';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import toast from 'react-hot-toast';

// import { clearErrors, loadUser, login, updateProfile } from "../../actions/userAction";
// import { login } from '../../../redux/action';

const Profile = () => {
  const url = "https://credimotionrenderbackend.onrender.com"

  const {isAuthenticated, setIsAuthenticated ,loading , setloading ,user} = useContext(Context)
  console.log(user?.user?.name)
  const navigation = useNavigate()
    const [values, setValues] = useState({
        name: user?.name,
        email: user?.email,
        carType: user?.carType
        // confirmPassword: "",
      });

      const { email , name , carType} = values;
      const inputs = [
        {
          id: 1,
          name: "name",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          required: true,
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
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
          name: "carType",
          type: "text",
          placeholder: "carType",
      
          label: "carType",
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
        try{
          const {data} = await axios.put(
            `${url}/api/v1/updateprofile`, 
            {
           
              carType
            },
            {
              headers : {
                "Content-Type" : "application/json",
              }, 
              withCredentials : true
            }
          )
          toast.success(data.success)
          setIsAuthenticated(true)
          setloading(false)
          

        }catch(err){
          toast.error(err.msg)
          setIsAuthenticated(false)
          setloading(false)

        }

        // dispatch(updateProfile(values.carType))
        // dispatch(loadUser())
        // localStorage.setItem("currentUser", JSON.stringify({values}))
        // dispatch(login(values.email , values.password));
        // navigation('/')
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
  return (
    <div className='profile'>
         <form onSubmit={handleSubmit}>
        <h1>Profile</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Update</button>
    
      </form>
    </div>
  )
}

export default Profile