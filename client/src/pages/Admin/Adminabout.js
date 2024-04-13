import React from 'react'
import { Form, Input } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';
import Loader from '../../components/Loader';

function Adminabout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
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

  if (!portfolioData || !portfolioData.about) {
    return <Loader />;
  }

  return (
    <div>
      <Form layout='vertical' onFinish={onFinish} initialValues={portfolioData.about}>
        <Form.Item name="aboutAnimation" label="Animation URL(Lottie Player) :">
          <input placeholder='Simple Lottie Animation URL' />
        </Form.Item>
        <Form.Item name="descPara1" label="Description Paragraph 1:">
          <textarea placeholder='Brief Description about yourself (Tech)' />
        </Form.Item>
        <Form.Item name="descPara2" label="Description Paragraph 2:">
          <textarea placeholder='Brief Description about yourself (Others)' />
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-2 bg-blue-400 text-white rounded-xl'>Save</button>
        </div>
      </Form>
    </div>
  );
}

export default Adminabout;