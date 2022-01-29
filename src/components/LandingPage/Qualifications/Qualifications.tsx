import "./Qualifications.css"

function Qualifications(props : { qualificationsArray : Array<string> } ){

    return (
        <div className="qualification-container">

            <h1 className="qualifications-header">คุณสมบัติผู้สมัคร</h1>
            <div>
                {props.qualificationsArray.map( (element,index)=>{
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