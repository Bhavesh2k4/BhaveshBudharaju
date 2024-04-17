import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/reset.css';
import devhomePng from '../../assets/images/devhome.png';
import Adminwelcome from "./Adminwelcome"
import Adminabout from "./Adminabout"
import {useSelector} from'react-redux';
import Adminskills from "./Adminskills";
import Adminexpedu from "./Adminexpedu";
import Adminprojects from './Adminprojects';
import Admincontact from './Admincontact';

const { TabPane } = Tabs;

function Admin() {
  const {portfolioData}=useSelector((state)=>state.root);
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      window.location.href="https://bhavesh-budharaju.vercel.app/login";
    }
  },[])


  return (
    <div className='bg-primary'>
      <div className='px-8 bg-primary flex items-center justify-between pt-2'>
      <div className="flex items-center">
        <h1 className="text-secondary text-2xl sm:text-xl font-semibold m-0 p-0">
        <img src={devhomePng} alt="Bhav♡" className="h-12" />
        </h1>
        <h1 className='font-semibold text-2xl m-0 p-0'>Admin Portal</h1>
      </div>
      <div className="flex-grow"></div>
      <h1 className='underline text-blue-800 cursor-pointer'
      onClick={()=>{
        localStorage.removeItem("token");
        window.location.href="/login";
      }}>Logout</h1>
  </div>
    {portfolioData && <div className=' px-8'>
        <Tabs defaultactiveKey="1">
            <TabPane tab="Intro" key="1">
            <Adminwelcome />
            </TabPane>
            <TabPane tab="About" key="2">
            <Adminabout />
            </TabPane>
            <TabPane tab="Skills" key="3">
            <Adminskills />
            </TabPane>
            <TabPane tab="EduExp" key="4">
            <Adminexpedu />
            </TabPane>
            <TabPane tab="Projects" key="5">
            <Adminprojects/>
            </TabPane>
            <TabPane tab="Contact" key="6">
            <Admincontact />
            </TabPane>
        </Tabs>
      </div>}
    </div>
  );
}

export default Admin;
