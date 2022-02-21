import "./Form.css"
import { useState } from "react"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

import { IconContext } from "react-icons"
import styled from "styled-components"
import { Expandable } from "./ExpandableProps"

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
interface PersonalInfo {
  firstName: string
  lastName: string
  tel: string
  grade: string
  school: string
  address: string
  subdistrict: string
  district: string
  province: string
  postcode: string
}
interface PersonalInfoFormProps {
  onSubmit: any
  ids: string
  values: PersonalInfo
  email: string
  onChange: any
}

function PersonalInfoForm(props: PersonalInfoFormProps) {
  return (
    <form onSubmit={props.onSubmit} id={props.ids}>
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
          <Input type="text" name="firstName" value={props.values.firstName} onChange={props.onChange} required></Input>
          <Label>นามสกุล</Label>
          <Input type="text" name="lastName" value={props.values.lastName} onChange={props.onChange} required></Input>
        </div>
        <div className="row2">
          <Label>เบอร์โทรศัพท์</Label>
          <Input type="text" name="tel" value={props.values.tel} onChange={props.onChange} required></Input>
          <Label>อีเมล</Label>
          <Input type="email" name="email" value={props.email} onChange={props.onChange} required></Input>
        </div>
        <div>
          <div className="row3">
            <Label>ระดับชั้น</Label>
            <Select name="grade" value={props.values.grade} onChange={props.onChange}>
              <option value="ม.6" id="option">
                ม.6
              </option>
              <option value="ม.5" id="option">
                ม.5
              </option>
              <option value="ม.4" id="option">
                ม.4
              </option>
              <option value="ปวช.3" id="option">
                ปวช.3
              </option>
              <option value="ปวช.2" id="option">
                ปวช.2
              </option>
              <option value="ปวช.1" id="option">
                ปวช.1
              </option>
              <option value="อื่นๆ" id="option">
                อื่นๆ
              </option>
              <option value="ไม่ระบุ" id="option">
                ไม่ระบุ
              </option>
            </Select>
            <Label>โรงเรียน</Label>
            <Input type="text" name="school" value={props.values.school} onChange={props.onChange} required></Input>
          </div>
          <div className="row4">
            <Label>ที่อยู่</Label>
            <Input type="text" name="address" value={props.values.address} onChange={props.onChange} required></Input>
            <Label>ตำบล/แขวง</Label>
            <Input type="text" name="subdistrict" value={props.values.subdistrict} onChange={props.onChange} required></Input>
          </div>
          <div className="row5">
            <Label>อำเภอ/เขต</Label>
            <Input type="text" name="district" value={props.values.district} onChange={props.onChange} required></Input>
            <Label>จังหวัด</Label>
            <Input type="text" name="province" value={props.values.province} onChange={props.onChange} required></Input>
            <Label>รหัสไปรษณีย์</Label>
            <Input type="text" name="postcode" value={props.values.postcode} onChange={props.onChange} required></Input>
          </div>
        </div>
      </Expandable>
    </form>
  )
}

export default PersonalInfoForm
