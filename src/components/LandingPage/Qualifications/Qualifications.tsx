import "./Qualifications.css"

function Qualifications(){

    const qualificationList = [
        "กำลังศึกษาอยู่ในระดับชั้นมัธยมศึกษาปีที่ 5 ปวช. 2 หรือมีวุฒิเทียบเท่า",
        "ไม่ป่วยเป็นโรคติดต่อร้ายแรง",
        "สามารถเข้าร่วมกิจกรรม ณ คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยได้ตลอดระยะเวลาที่จัดค่าย",
        "ไม่เคยเข้าร่วม FECamp  มาก่อน",
        "ได้รับวัคซีนที่ทางราชการกำหนดอย่างน้อยสองเข็ม หรือวัคซีนชนิดอื่นที่สำนักงานคณะกรรมการอาหารและยารับรองตามจำนวนที่กำหนดแล้วแต่กรณี ก่อนวันที่ 12 พ.ค. 2565 (14วันก่อนเข้าค่าย)"
    ]

    return (
        <div className="qualification-container">

            <h1 className="qualifications-header">คุณสมบัติผู้สมัคร</h1>
            <div>
                {qualificationList.map( (element,index)=>{
                    return (
                        <div key={index} className="qualification-box">
                            {/* <div className="flex-none"></div> */}
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