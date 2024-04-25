import React from "react"
import Header from "../../components/Header"
import Welcome from "./Welcome";
import About from "./About"
import SkillSection from "./Skill"
import Experiences from "./Experiences"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
import Social from "./Social"
import {useSelector} from "react-redux";
import { SpeedInsights } from "@vercel/speed-insights/react"

function Home(){
    const {loading,portfolioData}=useSelector((state)=>state.root);
    return(
        <div className="bg-primary px-20 sm-:px-1">
            <Header/>
            {portfolioData && (<div className="bg-primary px-48 py-9">
            <Welcome/>
            </div>
            )}
            {portfolioData &&(
            <div className="bg-primary px-28 sm:px-5" >
            <About/>
            <SkillSection/>
            <Experiences/>
            <Projects/>
            <Contact/>
            <Footer/>
            <Social/>
            <SpeedInsights />
            </div>
            )}
        </div>
    )
}

export default Home;