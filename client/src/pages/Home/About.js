import React from "react"
import SectionTitle from "../../components/Sectiontitle"
import {useSelector} from "react-redux";
import { Element } from "react-scroll";

function About(){
const {loading,portfolioData}=useSelector((state)=>state.root);
  const about = portfolioData && portfolioData.about;
const { aboutAnimation = '', descPara1 = '', descPara2 = ''} = about || {};
return(
    <Element name="about">
        <SectionTitle title="About Me  ⎯⎯⎯⎯"/>
        <div className="flex w-full items-center py-16">
            <div className="h-[50vh] w-1/2">
            <dotlottie-player src={aboutAnimation||''} 
            background="transparent" 
            speed="1"  
            loop autoplay>
            </dotlottie-player>
            </div>
            <div className="flex flex-col gap-5 w-1/2">
                {/* Render the paragraphs with HTML markup for bold text */}
                <p className="text-gray-950" dangerouslySetInnerHTML={{ __html: descPara1 }} />
                <p className="text-gray-950" dangerouslySetInnerHTML={{ __html: descPara2 }} />
            </div>
        </div>
        </Element>
)
}
export default About;