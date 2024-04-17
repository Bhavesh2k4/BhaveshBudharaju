import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {Modal , Form} from 'antd';
import axios from 'axios';
import {message} from 'antd';
import { showLoading,hideLoading ,reloadData} from '../../redux/rootSlice';

function Adminprojects() {
    const dispatch=useDispatch();
    const {portfolioData}=useSelector((state)=>state.root);
    const {projects}=portfolioData;
    const[showAddEditModal,setShowAddEditModal]=React.useState(false);
    const [seletedItemForEdit,setSelectedItemForEdit]=React.useState(null);
    const onFinish = async (values) => {
        try {
            const tempTech=values?.technologies?.split(' , ')||[];
            values.technologies=tempTech;
          dispatch(showLoading())
          let response
          if (seletedItemForEdit){
          response = await axios.post("https://bhavesh-budharaju.vercel.app/api/portfolio/update-project", {
            ...values,
             _id: seletedItemForEdit._id,
          });
        }
        else {
          response = await axios.post("https://bhavesh-budharaju.vercel.app/api/portfolio/add-project", {
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
          const response = await axios.post("https://bhavesh-budharaju.vercel.app/api/portfolio/delete-project", {
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
            }}>Add Project</button>
        </div>
        <div className="grid grid-cols-3 gap-5">
            {projects.map((project)=>(
                <div className='shadow border p-10  flex flex-col gap-5'>
                    <h1 className='text-xl text-blue-800'>{project.title}</h1>
                    <hr/>
                    <img src={project.image} alt="" className=" h-36 w-36"/>
                    <h1>Title :{project.title}</h1>
                    <h1>{project.description}</h1>
                    <h1>{project.link}</h1>
                    <div className='flex justify-end gap-5 mt-5'>
                        <button className="bg-red-400 text-white px-5 py-2 rounded-md"
                        onClick={()=>{
                            onDelete(project)
                        }}>Delete</button>
                        <button className="bg-teal-300 text-white px-5 py-2 rounded-md"
                        onClick={()=>{
                            setSelectedItemForEdit(project);
                            setShowAddEditModal(true);
                        }}>Edit</button>
                    </div>
                </div>
            ))}
        </div>
        <Modal open={showAddEditModal} 
        title={seletedItemForEdit?"Edit Project":"Add Project"} 
        footer={null}
        onCancel={()=>setShowAddEditModal(false)}>
            <Form layout="vertical" onFinish={onFinish} 
                initialValues={{...seletedItemForEdit,
                technologies:seletedItemForEdit?.technologies?.join(" , "),}||{}}>
                <Form.Item name="title" label="Title :">
                    <input placeholder="Title of the project " />
                </Form.Item>
                <Form.Item name="image" label="URL of Image :">
                    <input placeholder="Example : https://spacecats???" />
                </Form.Item>
                <Form.Item name="description" label="Description :">
                    <textarea placeholder="Example: Tic-Tac-Toe Capstone XD " />
                </Form.Item>
                <Form.Item name="link" label="Link :">
                    <input placeholder="Example : www.bhav.com" />
                </Form.Item>
                <Form.Item name="technologies" label="Technologies :">
                    <input placeholder="Technologies used in Project separated by comma" />
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

export default Adminprojects