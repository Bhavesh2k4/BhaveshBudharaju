import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {Modal , Form} from 'antd';
import axios from 'axios';
import {message} from 'antd';
import { showLoading,hideLoading ,reloadData} from '../../redux/rootSlice';

function Adminexpedu() {
    const dispatch=useDispatch();
    const {portfolioData}=useSelector((state)=>state.root);
    const {experiences}=portfolioData;
    const[showAddEditModal,setShowAddEditModal]=React.useState(false);
    const [seletedItemForEdit,setSelectedItemForEdit]=React.useState(null);
    const onFinish = async (values) => {
        try {
          dispatch(showLoading())
          let response
          if (seletedItemForEdit){
          response = await axios.post("/api/portfolio/update-experience", {
            ...values,
             _id: seletedItemForEdit._id,
          });
        }
        else {
          response = await axios.post("/api/portfolio/add-experience", {
            ...values,
          });
        }
          dispatch(hideLoading())
          if (response.data.success) {
            message.success(response.data.message);
            setShowAddEditModal(false);
            setSelectedItemForEdit(null)
            dispatch(hideLoading());
            dispatch(reloadData(true));
          } else {
            message.error(response.data.message);
          }
        } catch (error) {
          dispatch(hideLoading());
          message.error(error.message)
        }
      };

      const onDelete=async(item)=>{
        try {
          dispatch(showLoading())
          const response = await axios.post("/api/portfolio/delete-experience", {
            _id: item._id,
          });
          dispatch(hideLoading())
          if (response.data.success) {
            message.success(response.data.message);
            dispatch(hideLoading());
            dispatch(reloadData(true));
          } else {
            message.error(response.data.message);
          }
        } catch (error) {
          dispatch(hideLoading());
          message.error(error.message)
        }
      }
  return (
    <div>
        <div className='flex justify-end'>
            <button className='bg-blue-700 text-white px-5 py-2'onClick={()=>{
                setSelectedItemForEdit(null);
                setShowAddEditModal(true);
            }}>Add Experience/Education</button>
        </div>
        <div className="grid grid-cols-3 gap-5">
            {experiences.map((experience)=>(
                <div className='shadow border p-10  flex flex-col'>
                    <h1 className='text-xl text-blue-800'>{experience.period}</h1>
                    <hr/>
                    <h1>Company/Institute :{experience.company}</h1>
                    <h1>Title :{experience.title}</h1>
                    <h1>{experience.description}</h1>
                    <div className='flex justify-end gap-5 mt-5'>
                        <button className="bg-red-400 text-white px-5 py-2 rounded-md"
                        onClick={()=>{
                            onDelete(experience)
                        }}>Delete</button>
                        <button className="bg-teal-300 text-white px-5 py-2 rounded-md"
                        onClick={()=>{
                            setSelectedItemForEdit(experience);
                            setShowAddEditModal(true);
                        }}>Edit</button>
                    </div>
                </div>
            ))}
        </div>
        <Modal open={showAddEditModal} 
        title={seletedItemForEdit?"Edit Experience/Education":"Add Experience/Education"} 
        footer={null}
        onCancel={()=>setShowAddEditModal(false)}>
            <Form layout="vertical" onFinish={onFinish} initialValues={seletedItemForEdit}>
                <Form.Item name="period" label="Time Frame(Period) :">
                    <input placeholder="Time Period example:2024-Present" />
                </Form.Item>
                <Form.Item name="company" label="Company/Institute :">
                    <input placeholder="Example : PES University" />
                </Form.Item>
                <Form.Item name="title" label="Title/Role :">
                    <input placeholder="Example: 10th ICSE , SDE" />
                </Form.Item>
                <Form.Item name="description" label="Short Description :">
                    <input placeholder="Enter a short Description!" />
                </Form.Item>
                <div className='flex justify-end'>
                    <button className='border-blue-400 text-secondary px-5 py-2' onClick={()=>{
                        setShowAddEditModal(false)
                    }}>Cancel</button>
                    <button className='bg-blue-400 text-white px-5 py-2'>
                        {seletedItemForEdit?"Update":"Add"}
                    </button>
                </div>
            </Form>
        </Modal>
    </div>
  )
}

export default Adminexpedu