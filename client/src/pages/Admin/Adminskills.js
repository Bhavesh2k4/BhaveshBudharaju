import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Modal, message } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { showLoading, hideLoading, reloadData } from '../../redux/rootSlice';
import axios from 'axios';
import styled from "styled-components"

function Adminskills() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const [languages, setLanguages] = useState([]);
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);

  useEffect(() => {
    if (portfolioData && portfolioData.skills && portfolioData.skills[0]) {
      const skills = portfolioData.skills[0];
      setLanguages(skills.languages || []);
      setFrontend(skills.frontend || []);
      setBackend(skills.backend || []);
    }
  }, [portfolioData]);

  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const response = await axios.post("/api/portfolio/update-skills", {
        _id: portfolioData.skills[0]._id,
        languages,
        frontend,
        backend,
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
  };

  const handleLanguageChange = (index, event) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].name = event.target.value;
    setLanguages(updatedLanguages);
  };

  const handleFrontendChange = (index, event) => {
    const updatedFrontend = [...frontend];
    updatedFrontend[index].name = event.target.value;
    setFrontend(updatedFrontend);
  };

  const handleBackendChange = (index, event) => {
    const updatedBackend = [...backend];
    updatedBackend[index].name = event.target.value;
    setBackend(updatedBackend);
  };

  const addLanguage = () => {
    setLanguages([...languages, { name: '' }]);
  };

  const addFrontend = () => {
    setFrontend([...frontend, { name: '' }]);
  };

  const addBackend = () => {
    setBackend([...backend, { name: '' }]);
  };

  const removeLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  const removeFrontend = (index) => {
    const updatedFrontend = [...frontend];
    updatedFrontend.splice(index, 1);
    setFrontend(updatedFrontend);
  };

  const removeBackend = (index) => {
    const updatedBackend = [...backend];
    updatedBackend.splice(index, 1);
    setBackend(updatedBackend);
  };

  return (
    <div>
    <h1>
    Note: You can't Edit(Update) by changing the text(ex python) .There is only Addition and Deletion . Therefore to update you need to remove the block and add new text!
    </h1>
    <h1 className=' text-blue-900'>Cough: This is a feature , Not a Bug</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className='shadow border p-10 flex flex-col'>
          <h1 className='text-xl text-blue-800'>Languages</h1>
          {languages.map((language, index) => (
            <SkillContainer key={index}>
              <SkillInput
                value={language.name}
                onChange={(e) => handleLanguageChange(index, e)}
              />
              <Button onClick={() => removeLanguage(index)}>Remove</Button>
            </SkillContainer>
          ))}
          <Button onClick={addLanguage}>Add Language</Button>
        </div>
        <div className='shadow border p-10 flex flex-col'>
          <h1 className='text-xl text-blue-800'>Frontend</h1>
          {frontend.map((skill, index) => (
            <SkillContainer key={index}>
              <SkillInput
                value={skill.name}
                onChange={(e) => handleFrontendChange(index, e)}
              />
              <Button onClick={() => removeFrontend(index)}>Remove</Button>
            </SkillContainer>
          ))}
          <Button onClick={addFrontend}>Add Frontend Skill</Button>
        </div>
        <div className='shadow border p-10 flex flex-col'>
          <h1 className='text-xl text-blue-800'>Backend</h1>
          {backend.map((skill, index) => (
            <SkillContainer key={index}>
              <SkillInput
                value={skill.name}
                onChange={(e) => handleBackendChange(index, e)}
              />
              <Button onClick={() => removeBackend(index)}>Remove</Button>
            </SkillContainer>
          ))}
          <Button onClick={addBackend}>Add Backend Skill</Button>
        </div>
      </div>
      <div className='pt-5'>
        <Button className=' bg-blue-400 text-white' onClick={onFinish}>Save Skills</Button>
      </div>
    </div>
  )
}

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SkillInput = styled(Input)`
  flex: 1;
  margin-right: 10px;
`;

export default Adminskills