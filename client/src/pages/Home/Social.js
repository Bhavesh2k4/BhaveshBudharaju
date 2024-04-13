import React from "react"
function Social(){
    return(
        <div className="fixed left-0 bottom-3 px-10">
            <div className="flex flex-col items-center">
            <div className="flex flex-col gap-5">
            <a href="https://www.linkedin.com/in/bhavesh-budharaju-0068b0250/"><i class="ri-linkedin-box-fill text-secondary text-2xl"></i></a>
            <a href="https://github.com/Bhavesh2k4"><i class="ri-github-fill text-secondary text-2xl"></i></a>
            <a href="https://leetcode.com/Bhavesh_XD/"><i class="ri-code-box-fill text-secondary text-2xl"></i></a>
            <a href="mailto:Bhavesh.oct2k4@gmail.com"><i class="ri-mail-fill text-secondary text-2xl"></i></a>
            <a href="https://www.instagram.com/Bhavesh_2k4/?hl=en"><i class="ri-instagram-fill text-secondary text-2xl"></i></a>
            </div>
            <div className="w-[1px] h-52 bg-tertiary">
            </div>
            </div>
        </div>
    )
}
export default Social;