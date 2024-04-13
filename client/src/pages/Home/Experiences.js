import React from "react"
import Sectiontitle from "../../components/Sectiontitle"
import {useSelector} from "react-redux";
import { Element } from "react-scroll";
function Experiences(){
    const [selectedItemIndex,setSelectedItemIndex]=React.useState(0);
    const {portfolioData}=useSelector((state)=>state.root);
    const {experiences}=portfolioData;
    return(
        <Element name="experience">
        <div className="py-24">
            <Sectiontitle title="Experience & Education ⎯⎯⎯⎯"/>
            <br/>
            <div className="flex py-10 gap-20">
                <div className="flex flex-col gap-10 border-l-2 border-teal-200 w-1/3">
                {experiences.map((experience,index)=>(
                    <div className="cursor-pointer" onClick={()=>{
                        setSelectedItemIndex(index);
                    }}>
                        <h1 className={`text-2xl px-5 ${selectedItemIndex===index? "text-teal-500 border-teal-400 border-l-4"
                        :"text-tertiary"}`}>{experience.period}
                        </h1>
                    </div>
                ))}
                </div>
                <div className="flex flex-col gap-5 ">
                    <h1 className="text-teal-700 text-xl">{experiences[selectedItemIndex].company}</h1>
                    <h1 className="text-secondary text-xl">{experiences[selectedItemIndex].title}</h1>
                    <h1 className="text-tertiary text-xl">{experiences[selectedItemIndex].description}</h1>
                </div>
            </div>
        </div>
        </Element>
    )
}
export default Experiences;