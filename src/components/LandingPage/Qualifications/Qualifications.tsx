import { useEffect, useState } from "react";
import { landingPageInstance } from "../../../utils/client";
import "./Qualifications.css"

function Qualifications(){

    const [qualificationsArray, setQualificationsArray] = useState([]); 

    useEffect(() => {
        landingPageInstance.getActiveSetting().then((res) => {
            setQualificationsArray(res?.data.qualificationPreviews.map((e: { text: string; }) => e.text))
        })
    })

    return (
        <div className="qualification-container">

            <h1 className="qualifications-header">คุณสมบัติผู้สมัคร</h1>
            <div>
                {qualificationsArray.map( (element,index)=>{
                    return (
                        <div key={index} className="qualification-box">
                            <div className="index-with-bg">
                                <div className="index-num">{index+1}</div>
                            </div> 
                            <div className="qualification-text">
                                {element}
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Qualifications