const mongoose=require("mongoose");

const introSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    profilePictureUrl: {
      type: String,
      default: null,
    },
    resumeUrl: {
      type: String,
      default: null,
    },
  });

const aboutSchema=new mongoose.Schema({
    aboutAnimation:{
        type: String,
        required:true,
    },
    descPara1:{
        type: String,
        required:true,
    },
    descPara2:{
        type: String,
        required:true,
    },
});

const languageSchema = new mongoose.Schema({
    name: { type: String, required: true },
  });
  
  const frontendSkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
  });
  
  const backendSkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
  });
  
  const skillsSchema = new mongoose.Schema({
    languages: [languageSchema],
    frontend: [frontendSkillSchema],
    backend: [backendSkillSchema],
  });

  const eduexpSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    period:{
        type: String,
        required:true,
    },
    company:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
  });

  const projectsSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
    link:{
        type: String,
        required:true,
    },
    technologies:{
        type:Array,
        required:true,
    },
  })

  const contactSchema= new mongoose.Schema({
    Name:{
        type: String,
        required:true,
    },
    Mobile:{
        type: String,
        required:true,
    },
    Address:{
        type: String,
        required:true,
    },
    Email:{
        type: String,
        required:true,
    },
  })

  module.exports={
    Intro : mongoose.model("intros",introSchema),
    About : mongoose.model("about",aboutSchema),
    Skills : mongoose.model("skills",skillsSchema),
    Experience: mongoose.model("experiences",eduexpSchema),
    Projects: mongoose.model("projects",projectsSchema),
    Contact:mongoose.model("contact",contactSchema),
  };