import React from "react";

function ProgressBar({progress=15}){
    return (<>
        <div id="outer">
            <div id="inner" style={{width: `${progress}%`}}>
            {progress}
            </div>
        </div>
    </>)
}

export default ProgressBar