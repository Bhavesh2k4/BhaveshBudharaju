import React from "react"
import Sectiontitle from "../../components/Sectiontitle";
import {useSelector} from "react-redux";
import { Element } from "react-scroll";

function Contact(){
    const {portfolioData}=useSelector((state)=>state.root);
    const {contact}=portfolioData;
    return(
        <Element name="contact">
        <div className="py-24">
            <Sectiontitle title="Ping Me  ⎯⎯⎯⎯"/>
            <div className=" text-xl flex items-center justify-between">
                <div className="flex flex-col gap-2">
                <h1 className="text-secondary">
                    {'{'}
                </h1>
                {Object.keys(contact).map((key)=>(
                    key!=='_id' && <h1>
                        <span className="text-secondary">{key}</span>:{" "}
                        <span className="text-secondary">{contact[key]}</span>
                    </h1>
                ))}
                <h1 className="text-secondary">
                    {'}'}
                </h1>
                </div>
                <div className="h-[200px]">
                <dotlottie-player src="https://lottie.host/5617c549-b01c-45b8-b6f7-b0574e618a5f/nLtXNqQ3IV.json" 
                background="transparent" speed="1" 
                loop autoplay></dotlottie-player>
                </div>
            </div>
        </div>
        </Element>
    );
}

export default Contact;