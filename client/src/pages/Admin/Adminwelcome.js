import React from 'react'
import { Form, Input } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';
import Loader from '../../components/Loader';

function Adminwelcome() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intros._id,
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

  if (!portfolioData || !portfolioData.intros) {
    return <Loader />;
  }

  return (
    <div>
      <Form layout='vertical' onFinish={onFinish} initialValues={portfolioData.intros}>
        <Form.Item name="firstName" label="First Name :">
          <input placeholder='Bhav<3' />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name :">
          <input placeholder='Budharaaaaju :|' />
        </Form.Item>
        <Form.Item name="caption" label="Caption :">
          <input placeholder='Something like smooth operator works :)' />
        </Form.Item>
        <Form.Item name="description" label="Description :">
          <textarea placeholder='Brief Description about yourself' />
        </Form.Item>
        <Form.Item name="profilePictureUrl" label="Profile Picture URL :">
          <input placeholder='Enter the URL of your profile picture' />
        </Form.Item>
        <Form.Item name="resumeUrl" label="Resume URL :">
          <input placeholder="Enter the URL of your resume" />
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-2 bg-blue-400 text-white rounded-xl'>Save</button>
        </div>
      </Form>
    </div>
  );
}

export default Adminwelcome;