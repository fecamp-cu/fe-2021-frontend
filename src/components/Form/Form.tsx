import './Form.css'
import {useState} from 'react'
import useCollapse from 'react-collapsed'
import {BsChevronDown} from 'react-icons/bs'
import {BsChevronUp} from 'react-icons/bs'
import {IconContext} from 'react-icons'

function FormComponent(){
  const [values, setValues] = useState({
      firstName : "",
      surName : "",
      tel : "",
      email : "",
      grade : "ม.6",
      school : "",
      address : "",
      subdistrict : "",
      district : "",
      province : "",
      postcode : ""
  })
  const onChange= (e : any) =>{
    setValues({...values, [e.target.id] : e.target.value})
  }
  console.log(values)
  const handleSubmit = (e : any) =>{
      e.preventDefault()
  }
  const config = {duration : 500};
  const {getCollapseProps, getToggleProps, isExpanded} = useCollapse(config)
  return (
        <div className = 'body'>
            <form className = 'form' onSubmit = {handleSubmit}>
                <div className= 'formcon'>
                    <div className = 'uppercontainer'>
                        <h1 id = 'header'>ข้อมูลผู้สมัคร</h1>
                        <div>
                            <label className = 'label' >ชื่อ</label>
                            <input type = 'text' className = 'input' id = 'firstName' name = 'firstName' onChange = {onChange} required></input>
                            <label className = 'label'>นามสกุล</label>
                            <input type = 'text' className = 'input' id = 'lastName' name = 'lastName' onChange = {onChange} required></input>
                        </div>
                        <div>
                            <label className = 'label'>เบอร์โทรศัพท์</label>
                            <input type = 'text' className = 'input' id = 'tel' onChange = {onChange} required></input>
                            <label className = 'label'>อีเมล</label>
                            <input type = 'email' className = 'input' id = 'email' onChange = {onChange} required></input>
                        </div>
                        <div className = 'conpc'>
                            <div>
                                <label className = 'label'>ระดับชั้น</label>
                                <select className = 'input' id = 'grade' onChange = {onChange}>
                                    <option value = 'ม.6' id = 'option'>ม.6</option>
                                    <option value = 'ม.5' id = 'option'>ม.5</option>
                                    <option value = 'ม.4' id = 'option'>ม.4</option>
                                    <option value = 'ปวช.3' id = 'option'>ปวช.3</option>
                                    <option value = 'ปวช.2' id = 'option'>ปวช.2</option>
                                    <option value = 'ปวช.1' id = 'option'>ปวช.1</option>
                                    <option value = 'อื่นๆ' id = 'option'>อื่นๆ</option>
                                    <option value = 'ไม่ระบุ' id = 'option'>ไม่ระบุ</option>
                                </select>
                                <label className = 'label'>โรงเรียน</label>
                                <input type = 'text' className = 'input' id = 'school' onChange = {onChange} required></input>
                            </div>
                            <div>
                                <label className = 'label'>ที่อยู่</label>
                                <input type = 'text' className = 'input' id = 'address' onChange = {onChange} required></input>
                                <label className = 'label'>ตำบล/แขวง</label>
                                <input type = 'text' className = 'input' id = 'subdistrict' onChange = {onChange} required></input>
                            </div>
                            <div>
                                <label className = 'label'>อำเภอ/เขต</label>
                                <input type = 'text' className = 'input' id = 'district' onChange = {onChange} required></input>
                                <label className = 'label'>จังหวัด</label>
                                <input type = 'text' className = 'input' id = 'province' onChange = {onChange} required></input>
                                <label className = 'label'>รหัสไปรษณีย์</label>
                                <input type = 'text' className = 'input' id = 'postcode' onChange = {onChange} required></input>
                            </div>
                            <div>
                                <button type = 'submit'>ลงทะเบียน</button>
                            </div>
                        </div>
                        <div className = 'collapsible'>
                            <div className = 'clpcontent' {...getCollapseProps()}>
                                <div>
                                    <label className = 'label'>ระดับชั้น</label>
                                    <select className = 'input' id = 'grade' onChange = {onChange}>
                                        <option value = 'ม.6' id = 'option'>ม.6</option>
                                        <option value = 'ม.5' id = 'option'>ม.5</option>
                                        <option value = 'ม.4' id = 'option'>ม.4</option>
                                        <option value = 'ปวช.3' id = 'option'>ปวช.3</option>
                                        <option value = 'ปวช.2' id = 'option'>ปวช.2</option>
                                        <option value = 'ปวช.1' id = 'option'>ปวช.1</option>
                                        <option value = 'อื่นๆ' id = 'option'>อื่นๆ</option>
                                        <option value = 'ไม่ระบุ' id = 'option'>ไม่ระบุ</option>
                                    </select>
                                    <label className = 'label'>โรงเรียน</label>
                                    <input type = 'text' className = 'input' id = 'school' onChange = {onChange} required></input>
                                </div>
                                <div>
                                    <label className = 'label'>ที่อยู่</label>
                                    <input type = 'text' className = 'input' id = 'address' onChange = {onChange} required></input>
                                    <label className = 'label'>ตำบล/แขวง</label>
                                    <input type = 'text' className = 'input' id = 'subdistrict' onChange = {onChange} required></input>
                                </div>
                                <div>
                                    <label className = 'label'>อำเภอ/เขต</label>
                                    <input type = 'text' className = 'input' id = 'district' onChange = {onChange} required></input>
                                    <label className = 'label'>จังหวัด</label>
                                    <input type = 'text' className = 'input' id = 'province' onChange = {onChange} required></input>
                                    <label className = 'label'>รหัสไปรษณีย์</label>
                                    <input type = 'text' className = 'input' id = 'postcode' onChange = {onChange} required></input>
                                </div>
                                <div>
                                    <button type = 'submit'>ลงทะเบียน</button>
                                </div>
                            </div>
                        <IconContext.Provider value = {{className : 'collapsed-icon'}}>
                            <div /*className = 'collapsed-icon'*/ {...getToggleProps()}>
                                {isExpanded ? (
                                    <div id = 'collapsed'><BsChevronUp/></div>
                                ) : (
                                    <div id = 'collapsed'><BsChevronDown/></div>
                                )
                                }
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </form>
    </div>
    );
}

export default FormComponent