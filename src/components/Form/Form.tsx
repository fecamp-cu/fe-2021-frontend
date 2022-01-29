import "./Form.css"
import { useState } from "react"
import useCollapse from "react-collapsed"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

import { IconContext } from "react-icons"
import styled from "styled-components"
import { Expandable } from "../Expandable/Expandable"

const Input = styled.input`
  flex-shrink: 1;
  margin: 5px;
  padding: 1px 10px;
  height: 30px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: white;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    margin: 3px 2px;
    padding: 1px 5px;
    height: 28px;
  }
`

const Label = styled.label`
  margin: 15px 6px;
  height: 20px;
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: white;

  @media (max-width: 600px) {
    margin: 3px 6px;
  }
`

const Select = styled.select`
  margin: 10px;
  padding: 1px 10px;
  height: 30px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: white;

  &:focus {
    outline: none;
  }
  @media (max-width: 600px) {
    margin: 3px 2px;
    padding: 1px 5px;
    height: 28px;
  }
`

function FormComponent() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
    grade: "ม.5",
    school: "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    postcode: "",
  })
  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: any) => {
    console.log(values)
    e.preventDefault()
  }
  return (
    <div className="body">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mt-12 mx-7 mb-2.5 ml-7 sm:mt-12 sm:mb-7">
          <h1 id="header">ข้อมูลผู้สมัคร</h1>
          <Expandable
            className="my-7 justify-center"
            atWidth={600}
            expandedHeight={1200}
            collapsedHeight={450}
            expandIcon={<BsChevronDown />}
            collapseIcon={<BsChevronUp />}
          >
            <div className="row1">
              <Label>ชื่อ</Label>
              <Input type="text" name="firstName" value={values.firstName} onChange={onChange} required></Input>
              <Label>นามสกุล</Label>
              <Input type="text" name="lastName" value={values.lastName} onChange={onChange} required></Input>
            </div>
            <div className="row2">
              <Label>เบอร์โทรศัพท์</Label>
              <Input type="text" name="tel" value={values.tel} onChange={onChange} required></Input>
              <Label>อีเมล</Label>
              <Input type="email" name="email" value={values.email} onChange={onChange} required></Input>
            </div>
            <div>
              <div className="row3">
                <Label>ระดับชั้น</Label>
                <Select name="grade" onChange={onChange} value={values.grade}>
                  <option value="ม.5">ม.5</option>
                  <option value="ปวช.2">ปวช.2</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                  <option value="ไม่ระบุ">ไม่ระบุ</option>
                </Select>
                <Label>โรงเรียน</Label>
                <Input type="text" name="school" value={values.school} onChange={onChange} required></Input>
              </div>
              <div className="row4">
                <Label>ที่อยู่</Label>
                <Input type="text" name="address" value={values.address} onChange={onChange} required></Input>
                <Label>ตำบล/แขวง</Label>
                <Input type="text" name="subdistrict" value={values.subdistrict} onChange={onChange} required></Input>
              </div>
              <div className="row5">
                <Label>อำเภอ/เขต</Label>
                <Input type="text" name="district" value={values.district} onChange={onChange} required></Input>
                <Label>จังหวัด</Label>
                <Input type="text" name="province" value={values.province} onChange={onChange} required></Input>
                <Label>รหัสไปรษณีย์</Label>
                <Input type="text" name="postcode" value={values.postcode} onChange={onChange} required></Input>
              </div>
            </div>
            {/* <div className = 'collapsible'>
                            <div className = 'clpcontent' {...getCollapseProps()}>
                                <div className = 'row3'>
                                    <Label>ระดับชั้น</Label>
                                    <Select onChange = {onChange}>
                                        <option value = 'ม.5' id = 'option'>ม.5</option>
                                        <option value = 'ปวช.2' id = 'option'>ปวช.2</option>
                                        <option value = 'อื่นๆ' id = 'option'>อื่นๆ</option>
                                        <option value = 'ไม่ระบุ' id = 'option'>ไม่ระบุ</option>
                                    </Select>
                                    <Label>โรงเรียน</Label>
                                    <Input type = 'text' id = 'school' onChange = {onChange} required></Input>
                                </div>
                                <div className = 'row4'>
                                    <Label>ที่อยู่</Label>
                                    <Input type = 'text' id = 'address' onChange = {onChange} required></Input>
                                    <Label>ตำบล/แขวง</Label>
                                    <Input type = 'text' id = 'subdistrict' onChange = {onChange} required></Input>
                                </div>
                                <div className = 'row5'>
                                    <Label>อำเภอ/เขต</Label>
                                    <Input type = 'text' id = 'district' onChange = {onChange} required></Input>
                                    <Label>จังหวัด</Label>
                                    <Input type = 'text' id = 'province' onChange = {onChange} required></Input>
                                    <Label>รหัสไปรษณีย์</Label>
                                    <Input type = 'text' id = 'postcode' onChange = {onChange} required></Input>
                                </div>
                                <div>
                                    <button type = 'submit'>ลงทะเบียน</button>
                                </div>
                            </div>
                        <IconContext.Provider value = {{className : 'collapsed-icon'}}>
                            <div className = 'flex justify-center' {...getToggleProps()}>
                                {isExpanded ? (
                                    <div id = 'collapsed'><BsChevronUp/></div>
                                ) : (
                                    <div id = 'collapsed'><BsChevronDown/></div>
                                )
                                }
                            </div>
                        </IconContext.Provider>
                    </div> */}
          </Expandable>
          <div>
            <button type="submit">ลงทะเบียน</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormComponent
