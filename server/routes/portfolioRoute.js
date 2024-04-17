const router =require("express").Router();
const {Intro,About,Skills,Experience,Projects,Contact} = require("../models/portfolioModel");
const User= require("../models/userModel");

//get all portfolio data
router.get("https://bhavesh-budharaju.vercel.app/get-portfolio-data",async(req,res)=>{
    try{
        const intros=await Intro.find();
        const about=await About.find();
        const skills=await Skills.find();
        const experiences=await Experience.find();
        const projects=await Projects.find();
        const contact=await Contact.find();
        res.status(200).send({
            intros:intros[0],
            about:about[0],
            skills:skills,
            experiences:experiences,
            projects:projects,
            contact:contact[0],
        })
    }catch(error){
        res.status(500).send(error);
    }
});

//update intro 
router.post("https://bhavesh-budharaju.vercel.app/update-intro", async (req, res) => {
  try {
    const { firstName, lastName, caption, description, profilePictureUrl, resumeUrl } = req.body;
    const intros = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      { firstName, lastName, caption, description, profilePictureUrl, resumeUrl },
      { new: true, useFindAndModify: false }
    );
    res.status(200).send({
      data: intros,
      success: true,
      message: "Intro updated successfully!",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

  //update about
  router.post("https://bhavesh-budharaju.vercel.app/update-about", async (req, res) => {
    try {
      const { aboutAnimation ,descPara1,descPara2 } = req.body;
      const about = await About.findOneAndUpdate(
        { _id: req.body._id },
        { aboutAnimation ,descPara1,descPara2},
        { new: true, useFindAndModify: false }
      );
      res.status(200).send({
        data: about,
        success: true,
        message: "About updated successfully!",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  //update skills
  router.post("https://bhavesh-budharaju.vercel.app/update-skills", async (req, res) => {
    try {
      const { _id, languages, frontend, backend } = req.body;
      const updatedSkills = await Skills.findOneAndUpdate(
        { _id },
        { languages, frontend, backend },
        { new: true, useFindAndModify: false }
      );
      res.status(200).send({
        data: updatedSkills,
        success: true,
        message: "Skills updated successfully!",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  //add experience/education
  router.post("https://bhavesh-budharaju.vercel.app/add-experience", async (req, res) => {
    try {
      const { period, company, title, description } = req.body;
      const newExperience = new Experience({
        period,
        company,
        title,
        description,
      });
      await newExperience.save();
      res.status(200).send({
        data: newExperience,
        success: true,
        message: "Experience added successfully!",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  //update experience
  router.post("https://bhavesh-budharaju.vercel.app/update-experience", async (req, res) => {
    try {
      const { _id, period, company, title, description } = req.body;
      const updatedExperience = await Experience.findOneAndUpdate(
        { _id },
        { period, company, title, description },
        { new: true, useFindAndModify: false }
      );
      res.status(200).send({
        data: updatedExperience,
        success: true,
        message: "Experience updated successfully!",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  //delete experience
  router.post("https://bhavesh-budharaju.vercel.app/delete-experience", async (req, res) => {
    try {
      const { _id } = req.body;
      await Experience.findOneAndDelete({ _id });
      res.status(200).send({
        success: true,
        message: "Experience deleted successfully!",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  //add project
  router.post("https://bhavesh-budharaju.vercel.app/add-project", async (req, res) => {
    try {
      const { title, description, link, image,technologies } = req.body;
      const newProject = new Projects({
        title,
        description,
        link,
        image,
        technologies,
      });
      await newProject.save();
      res.status(200).send({
        data: newProject,
        success: true,
        message: "Project added successfully!",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  //update project
  router.post("https://bhavesh-budharaju.vercel.app/update-project", async (req, res) => {
    try {
      const { _id, title, description, link, image,technologies } = req.body;
      const updatedProject = await Projects.findOneAndUpdate(
        { _id },
        { title, description, link, image,technologies },
        { new: true, useFindAndModify: false }
      );
      res.status(200).send({
        data: updatedProject,
        success: true,
        message: "Project updated successfully!",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  //delete project
  router.post("https://bhavesh-budharaju.vercel.app/delete-project", async (req, res) => {
    try {
      const { _id } = req.body;
      await Projects.findOneAndDelete({ _id });
      res.status(200).send({
        success: true,
        message: "Project deleted successfully!",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  //update contact
  router.post("https://bhavesh-budharaju.vercel.app/update-contact", async (req, res) => {
    try {
      const { Name,Mobile,Address,Email} = req.body;
      const contacts = await Contact.findOneAndUpdate(
        { _id: req.body._id },
        { Name,Mobile,Address,Email },
        { new: true, useFindAndModify: false }
      );
      res.status(200).send({
        data: contacts,
        success: true,
        message: "Contact updated successfully!",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

//admin login
router.post('https://bhavesh-budharaju.vercel.app/login', async (req, res) => {
  try {
      const user = await User.findOne({
      username: req.body.username,
      password: req.body.password
    });
    user.password="";
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Admin login successfull!",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid Username or Password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
  
module.exports=router;