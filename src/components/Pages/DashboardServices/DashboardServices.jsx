import React, { useEffect, useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';
import './dashboardservices.scss';
import { useContext } from 'react';
import { Context } from '../../../index.js';

const DashboardServices = () => {
    const {isAuthenticated, setIsAuthenticated ,loading , setloading ,user} = useContext(Context)
    // const url = "https://credimotionrenderbackend.onrender.com";
  const url ="https://credimotionbackend.vercel.app"

  const [focused, setFocused] = React.useState(false);
  const [SSN, setSSN] = useState('');
  const [noOfMilesRan, setnoOfMilesRan] = useState('');
  const [country, setCountry] = useState('');
  const [mob , setmob] = useState("")


  const[companyName , setCompanyName] = useState([]);
  const[carName , setCarName] = useState([]);
  
  
  const [carModelNo , setCarModelNo ] = useState('')
    const [carType , setCarType] = useState('')
  const [alt_mob , setAlt_mob] = useState("")

  const brands = [
    {id :"1", name:  "Skoda"},
    {id :"2", name:  "Alfa-Romeo"},
    {id :"3", name:  "Mercedes Benz"},
    {id :"4", name:  "Bentley"},
    // {id :1, name:  "Ford"},
    // {id :1, name:  "Porsche"},
    // {id :1, name:  "Nissan"},
  ]

  const make = [
    {id: "1", brandId : "1", makeName : "Kushaq"},
    {id: "2", brandId : "1", makeName : "Octavia"},
    {id: "3", brandId : "1", makeName : "Slavia"},
    {id: "4", brandId : "1", makeName : "Rapid"},

    {id: "5", brandId : "2", makeName : "Guilia"},
    {id: "6", brandId : "2", makeName : "Stelvio"},
    {id: "7", brandId : "2", makeName : "Alfa Romeo GTV"},
    {id: "8", brandId : "2", makeName : "Spider"},

    {id: "9", brandId : "3", makeName : "C-Class"},
    {id: "10", brandId : "3", makeName : "G-Class"},
    {id: "11", brandId : "3", makeName : "Gla"},
    {id: "12", brandId : "3", makeName : "Amg GT"},

    
    {id: "13", brandId : "4", makeName : "Continental GT"},
    {id: "14", brandId : "4", makeName : "Mark V1"},
    {id: "15", brandId : "4", makeName : "Bentley Bentayga"},
    {id: "16", brandId : "4", makeName : "Brooklands"},

  ]


  // console.log(carModelNo);
  useEffect(()=>{
    setCompanyName(brands)
    // setCarModelNo(make)
  },[])

  const handleBrand = (id) => {
    let brandName = brands.filter(item=>item.id == id)
    setCarModelNo(brandName[0].name)
    const dt = make.filter(x => x.brandId === id)
    setCarName(dt)


  }

  const handleCarName = (id) => {
    let nameOfCar = make.filter(item=>item.id == id);
    setCarType(nameOfCar[0].makeName)
  }

  const handleCarDetails = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.put(
        `${url}/api/v1/updateprofile`, 
        {
       
          carType,
          SSN,
          noOfMilesRan, 
          country,
          mob,
          alt_mob,
          carModelNo
        },
        {
          // headers : {
          //   "Content-Type" : "application/json",

          // }, 
          withCredentials : true
        }
      )
      toast.success("Car Details Updated Successfully")
      setIsAuthenticated(true)
      setloading(false)
      

    }catch(err){
      toast.error("Something Wrong! Please Login back again!")
      setIsAuthenticated(false)
      setloading(false)

    }
  }

  console.log(carType)
  console.log(carModelNo)

  


  

 

  return (
    <div  className='dashboardservices'>
        <div className="dashboardContainer">
            <form onSubmit={handleCarDetails}>
            <h1>Car Details </h1>
                <div className="formInput">
                    <label>Car Brand</label>
                    <select id='carbrand' className='form-control' onChange={(e)=> handleBrand(e.target.value)}>
                        <option className='option' value="0" >
                            Select Brand
                        </option>
                        {/* <input className='inputs' /> */}
                        {brands && brands !=undefined ? 
                        
                            brands.map((br,index)=> {
                                return(
                                    <option className='option' key={index} value={br.id} >{br.name}</option>
                                )
                            })

                            : "No brand"
                    }
                    </select>
                </div>
                <br/>
                <div className="formInput">
                    <label>Car Make</label>
                    <select id='carmake'  className='form-control' onChange={(e)=> handleCarName(e.target.value)} >
                        <option value="0" >
                            Select Make
                        </option>
                    
                        {
                        
                        carName && 
                        carName !== undefined ? 
                        
                        carName.map((br,index)=> {
                                return(
                                    <option key={index} value={br.id}>{br.makeName}</option>
                                )
                            })

                            : "No brand"
                    }
                    </select>
                </div>
                <label>No of Miles</label>
                <input type='Number' min={0} className='inputs' onChange={(e)=> setnoOfMilesRan(e.target.value)}></input>
                <label>Country</label>
                <input type='Text'  className='inputs' onChange={(e)=> setCountry(e.target.value)} ></input>
                <label>Social Security Number (SSN)</label>
                <input type='Text'  className='inputs'  onChange={(e)=> setSSN(e.target.value)}></input>
                <label>Mobile Number</label>
                <input type='Number'  className='inputs' onChange={(e)=> setmob(e.target.value)}></input>
                <label>AlternateMobile Number</label>
                <input type='Number'  className='inputs' onChange={(e)=> setAlt_mob(e.target.value)}></input>

                <button >Submit</button>

            </form>

        </div>
        {/* <FormContainer/> */}
    </div>
  )
}

export default DashboardServices