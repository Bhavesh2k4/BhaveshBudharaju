import {BrowserRouter,Routes,Route} from "react-router-dom";
import {useEffect,useState} from "react";
import Home from "./pages/Home/Index"
import Admin from "./pages/Admin/index";
import Login from "./pages/Admin/Login";
import axios from "axios"; 
import {useDispatch,useSelector} from "react-redux";
import {SetPortfolioData, showLoading,hideLoading,reloadData} from "./redux/rootSlice";
import Loader from "./components/Loader";

function App() {
  //Note camelcase className
  const {loading,portfolioData,reloadData}=useSelector((state)=>state.root);
  const dispatch=useDispatch();
  const getPortfolioData=async()=>{
    try{
      dispatch(showLoading());
      const response=await axios.get("https://bhavesh-portfolio-backend.vercel.app/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(reloadData(false));
      dispatch(hideLoading());
    } catch(error){
      dispatch(hideLoading());
    }
  }
  useEffect(()=>{
    if (!portfolioData){
    getPortfolioData();
    }
  },[portfolioData]);

  useEffect(()=>{
    if (reloadData){
      getPortfolioData();
    }
  },[reloadData]);

  return (
    <BrowserRouter>
      {loading?<Loader/>:null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* for comments inside return(render) we cant directly comment so use {multiline comment}*/}
      {/*we can return only one element in return thats y u often see all elements inside<div> tag */}
    </BrowserRouter>
  );
}

export default App;
