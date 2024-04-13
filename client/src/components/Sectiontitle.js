import React from "react"

function Sectiontitle({
    title,
})
{
    return(
        <div className="flex">
            <h1 className="text-3xl text-secondary font-semibold">{title}</h1>
        </div>
    )
}

export default Sectiontitle;