import './Form.css'

function FormComponent(){
  return (
        <div className = 'body'>
            <div className = 'container'>
                <h1 id = 'header'>ข้อมูลผู้สมัคร</h1>
                <div>
                    <label className = 'label' style = {{left : '256px', right: '928px', top : '138.37px'}}>ชื่อ</label>
                    <input className = 'input' id = 'firstname' style = {{width : '300px', left : '291px', right : '612px', top : '135.37px'}}></input>
                    <label className = 'label' style = {{left : '611px', right: '535px', top : '138.37px'}}>นามสกุล</label>
                    <input className = 'input' id = 'surname' style = {{width : '263px', left :'683px', right : '257px', top : '135.37px'}}></input>
                </div>
                <div>
                    <label className = 'label' style = {{left : '256px', right: '856px', top : '188.37px'}}>เบอร์โทรศัพท์</label>
                    <input className = 'input' id = 'tel' style = {{width : '230px', left : '361px', right : '612px', top : '185.37px'}}></input>
                    <label className = 'label' style = {{left : '611px', right: '588px', top : '188.37px'}}>อีเมล</label>
                    <input className = 'input' id = 'email' style = {{width : '285px', left : '661px', right : '257px', top : '185.37px'}}></input>
                </div>
                <div>
                    <label className = 'label' style = {{left : '256px', right: '890px', top : '238.37px'}}>ระดับชั้น</label>
                    <select className = 'grade'>
                        <option>ม.6</option>
                        <option>ม.5</option>
                        <option>ม.4</option>
                    </select>
                    <label className = 'label' style = {{left : '493px', right: '655px', top : '235.37px'}}>โรงเรียน</label>
                    <input className = 'input' id = 'school'style = {{width : '382px', left : '564px', right : '257px', top : '232.37px'}}></input>
                </div>
                <div>
                    <label className = 'label' style = {{left : '256px', right: '916px', top : '288.37px'}}>ที่อยู่</label>
                    <input className = 'input' id = 'address' style = {{width : '407px', left : '302px', right : '494px', top : '285.37px'}}></input>
                    <label className = 'label' style = {{left : '729px', right: '380px', top : '288.37px'}}>ตำบล/แขวง</label>
                    <input className = 'input' id = 'subdistrict' style = {{width : '123px', left : '823px', right : '257px', top : '285.37px'}}></input>
                </div>

                <div>
                    <label className = 'label' style = {{left : '256px', right: '858px', top : '338.37px'}}>อำเภอ/เขต</label>
                    <input className = 'input' id = 'district' style = {{width : '128px', left : '345px', right : '730px', top : '335.37px'}}></input>
                    <label className = 'label' style = {{left : '493px', right: '649px', top : '338.37px'}}>จังหวัด</label>
                    <input className = 'input' id = 'province' style = {{width : '156px', left : '554px', right : '493px', top : '335.37px'}}></input>
                    <label className = 'label' style = {{left : '730px', right: '385px', top : '338.37px'}}>รหัสไปรษณีย์</label>
                    <input className = 'input' id = 'postalcode' style = {{width : '116px', left : '831px', right : '256px', top : '335.37px'}}></input>
                </div>
                <div>
                    <label className = 'label' style = {{left : '256px', right: '900px', top : '419.37px'}}>ชื่อผู้ใช้</label>
                    <input className = 'input' id = 'username' style = {{width : '634px', left : '312px', right : '257px', top : '416.37px'}}></input>
                </div>
                <div>
                    <label className = 'label' style = {{left : '256px', right: '890px', top : '466.37px'}}>รหัสผ่าน</label>
                    <input className = 'input' id = 'password1' style = {{width : '585px', left : '361px', right : '257px', top : '463.37px'}}></input>
                </div>

                <div>
                    <label className = 'label' style = {{left : '256px', right: '842px', top : '513.37px'}}>ยืนยันรหัสผ่าน</label>
                    <input className = 'input' id = 'password2' style = {{width : '585px', left : '361px', right : '257px', top : '510.37px'}}></input>
                </div>
            </div>
        </div>
  );
}

export default FormComponent