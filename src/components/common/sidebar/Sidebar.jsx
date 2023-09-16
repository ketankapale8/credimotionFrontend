import React from "react";
import "./sidebar.css";
// import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
// import {TreeView , TreeItem} from '@mui/lab';
// import { TreeView, TreeItem } from "@material-ui/lab";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import PostAddIcon from "@material-ui/icons/PostAdd";
// import AddIcon from "@material-ui/icons/Add";
// import ImportExportIcon from "@material-ui/icons/ImportExport";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import { useDispatch } from "react-redux";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CarRentalIcon from '@mui/icons-material/CarRental';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PaymentsIcon from '@mui/icons-material/Payments';
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import PeopleIcon from "@material-ui/icons/People";
import {Navigate} from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LogoutIcon from '@mui/icons-material/Logout';
// import RateReviewIcon from "@material-ui/icons/RateReview";
import axios from "axios";
import { useContext } from 'react';
import { Context } from '../../../index.js';
import toast from "react-hot-toast";

const Sidebar = () => {
  // const url = "https://credimotionrenderbackend.onrender.com";
  const url ="https://credimotionbackend.vercel.app"


  const {isAuthenticated, setIsAuthenticated ,loading , setloading } = useContext(Context)

  const handleLogout = async () => {
    setloading(true)
    try{
       await axios.get(
        `${url}/api/v1/logout`, { withCredentials : true}
      )
      toast.success("Logged out Successfully")
      setIsAuthenticated(false);
      setloading(false)
      

    }catch(err){
      toast.error(err.msg);
      setIsAuthenticated(true)
      setloading(false)

    }

    // dispatch(login(values.email , values.password , values.name))
    // localStorage.setItem("currentUser", JSON.stringify({values}))
    // dispatch(login(values.email , values.password));
  };


  // const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  // const dispatch = useDispatch();

  if(isAuthenticated) return <Navigate to={"/"}/>
  
  return (
    <div className="sidebar">
      <Link to="/">
        {/* <img src={logo} alt="Ecommerce" /> */}
      </Link>
      <Link to="/payments">
        <p>
          <DashboardIcon /> Service Selectors
        </p>
      </Link>
      {/* <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link> */}
      <Link to="/services">
        <p>
          <CarRentalIcon />
          Car Details
        </p>
      </Link>
      <Link to="/profile">
        <p>
          <PersonOutlineIcon /> Profile
        </p>
      </Link>
      <Link to="/support">
        <p>
          <MailIcon />
          Support
        </p>
      </Link>

      <Link to="/verification">
        <p>
          <VerifiedUserIcon />
          Verify
        </p>
      </Link>

      <Link to="/paymentinfo">
        <p>
          <PaymentsIcon />
          My Payment Info.
        </p>
      </Link>
      
      <Link to="/">
        <p disabled={loading} onClick={handleLogout}>
          <LogoutIcon />
          Logout
        </p >
      </Link>
    </div>
  );
};

export default Sidebar;