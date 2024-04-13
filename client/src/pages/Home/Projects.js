import React from "react"
import Sectiontitle from "../../components/Sectiontitle"
import {useSelector} from "react-redux";
import { Element } from "react-scroll";

function Projects(){
    const [selectedItemIndex,setSelectedItemIndex]=React.useState(0);
    const {portfolioData}=useSelector((state)=>state.root);
    const {projects}=portfolioData;
    return(
        <Element name="projects">
        <div className="py-24">
            <Sectiontitle title="Projects  ⎯⎯⎯⎯"/>
            <br/>
            <div className="flex py-10 gap-20">
                <div className="flex flex-col gap-10 border-l-2 border-teal-200 w-1/3">
                {projects.map((project,index)=>(
                    <div className="cursor-pointer" onClick={()=>{
                        setSelectedItemIndex(index);
                    }}>
                        <h1 className={`text-xl px-1 ${selectedItemIndex===index? "text-teal-500 border-teal-400 border-l-4"
                        :"text-tertiary"}`}>{project.title}
                        </h1>
                    </div>
                ))}
                </div>
                <div className="flex items-center justify-center gap-10 ">
                    <img src={projects[selectedItemIndex].image} className=" w-auto"/>
                </div>
                <div className="flex flex-col gap-3 ">
                    <h1 className="text-secondary text-xl">{projects[selectedItemIndex].title}</h1>
                    <h1 className="text-tertiary text-xl">{projects[selectedItemIndex].description}</h1>
                    <a href={projects[selectedItemIndex].link}><h1 className=" text-teal-600 text-xl">Link</h1></a>
                </div>
            </div>
        </div>
        </Element>
    )
}
export default Projects;