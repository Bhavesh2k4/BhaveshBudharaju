import React from 'react'
import { Form, Input } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';
import Loader from '../../components/Loader';

function Admincontact() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const response = await axios.post("https://bhavesh-budharaju.vercel.app/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id,
      });
      dispatch(hideLoading())
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message)
    }
  };

  if (!portfolioData || !portfolioData.contact) {
    return <Loader />;
  }

  return (
    <div>
      <Form layout='vertical' onFinish={onFinish} initialValues={portfolioData.contact}>
        <Form.Item name="Name" label="Name :">
          <input placeholder='Bhav<3' /> 
        </Form.Item>
        <Form.Item name="Mobile" label="Mobile no. :">
          <input placeholder='+91 xxxxxxxxxx' />
        </Form.Item>
        <Form.Item name="Address" label="Address :">
          <input placeholder='221B Baker st.' />
        </Form.Item>
        <Form.Item name="Email" label="Email Address :">
          <input placeholder='Enter your Email Address' />
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-2 bg-blue-400 text-white rounded-xl'>Save</button>
        </div>
      </Form>
    </div>
  );
}

export default Admincontact;