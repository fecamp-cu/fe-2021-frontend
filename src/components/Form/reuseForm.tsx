import './Form.css'
import {useState} from 'react'
import useCollapse from 'react-collapsed'
import {BsChevronDown} from 'react-icons/bs'
import {BsChevronUp} from 'react-icons/bs'
import {IconContext} from 'react-icons'
import styled from 'styled-components'

const Input = styled.input`
    flex-shrink : 1;
    margin : 5px;
    padding : 1px 10px;
    height : 30px;
    background : rgba(255, 255, 255, 0.3);
    border : 1px solid #FFFFFF;
    box-sizing : border-box;
    border-radius : 5px;
    font-family: Bai Jamjuree;
    font-style : normal;
    font-weight : normal;
    font-size : 14px;
    color : white;

    &:focus{
        outline : none;
    }

    @media (max-width : 600px){
        margin : 3px 2px;
        padding : 1px 5px;
        height : 28px;
    }
`;

const Label = styled.label`
    margin : 15px 6px; 
    height : 20px;
    font-family: Bai Jamjuree;
    font-style : normal;
    font-weight : normal;
    font-size : 16px;
    line-height : 20px;
    color : white;
    
    @media (max-width : 600px){
        margin : 3px 6px;    
    }
`;

const Select = styled.select`
    margin : 10px;
    padding : 1px 10px;
    height : 30px;
    background : rgba(255, 255, 255, 0.3);
    border : 1px solid #FFFFFF;
    box-sizing : border-box;
    border-radius : 5px;
    font-family: Bai Jamjuree;
    font-style : normal;
    font-weight : normal;
    font-size : 14px;
    color : white;

    &:focus{
        outline : none;
    }
    @media (max-width : 600px){
        margin : 3px 2px;
        padding : 1px 5px;
        height : 28px;
    }
`;
function ReuseForm(props : any){

    const config = {duration : 500, defaultExpanded : true};
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse(config);
    return (
        <form onSubmit = {props.onSubmit} id = {props.ids}>
            <div className = 'my-7 flex flex-col items-center'>
                <div className = 'row1'>
                    <Label>ชื่อ</Label>
                    <Input type = 'text' id = 'firstName' value = {props.values.firstName} onChange = {props.onChange} required></Input>
                    <Label>นามสกุล</Label>
                    <Input type = 'text' id = 'lastName' value = {props.values.lastName} onChange = {props.onChange} required></Input>
                </div>
                <div className = 'row2'>
                    <Label>เบอร์โทรศัพท์</Label>
                    <Input type = 'text'  id = 'tel' value = {props.values.tel} onChange = {props.onChange} required></Input>
                    <Label>อีเมล</Label>
                    <Input type = 'email' id = 'email' value = {props.email} onChange = {props.onChange} required></Input>
                </div>
                <div className = 'conpc'>
                    <div className = 'row3'>
                        <Label>ระดับชั้น</Label>
                        <Select id = 'grade' value = {props.values.grade} onChange = {props.onChange}>
                            <option value = 'ม.6' id = 'option'>ม.6</option>
                            <option value = 'ม.5' id = 'option'>ม.5</option>
                            <option value = 'ม.4' id = 'option'>ม.4</option>
                            <option value = 'ปวช.3' id = 'option'>ปวช.3</option>
                            <option value = 'ปวช.2' id = 'option'>ปวช.2</option>
                            <option value = 'ปวช.1' id = 'option'>ปวช.1</option>
                            <option value = 'อื่นๆ' id = 'option'>อื่นๆ</option>
                            <option value = 'ไม่ระบุ' id = 'option'>ไม่ระบุ</option>
                        </Select>
                        <Label>โรงเรียน</Label>
                        <Input type = 'text' id = 'school' value = {props.values.school} onChange = {props.onChange} required></Input>
                    </div>
                    <div className = 'row4'>
                        <Label>ที่อยู่</Label>
                        <Input type = 'text' id = 'address' value = {props.values.address} onChange = {props.onChange} required></Input>
                        <Label>ตำบล/แขวง</Label>
                        <Input type = 'text' id = 'subdistrict' value = {props.values.subdistrict} onChange = {props.onChange} required></Input>
                    </div>
                    <div className = 'row5'>
                        <Label>อำเภอ/เขต</Label>
                        <Input type = 'text' id = 'district' value = {props.values.district} onChange = {props.onChange} required></Input>
                        <Label>จังหวัด</Label>
                        <Input type = 'text' id = 'province' value = {props.values.province} onChange = {props.onChange} required></Input>
                        <Label>รหัสไปรษณีย์</Label>
                        <Input type = 'text' id = 'postcode' value = {props.values.postcode} onChange = {props.onChange} required></Input>
                    </div>
                </div>
                <div className = 'collapsible'>
                    <div className = 'clpcontent' {...getCollapseProps()}>
                        <div className = 'row3'>
                            <Label>ระดับชั้น</Label>
                            <Select onChange = {props.onChange}>
                                <option value = 'ม.6' id = 'option'>ม.6</option>
                                <option value = 'ม.5' id = 'option'>ม.5</option>
                                <option value = 'ม.4' id = 'option'>ม.4</option>
                                <option value = 'ปวช.3' id = 'option'>ปวช.3</option>
                                <option value = 'ปวช.2' id = 'option'>ปวช.2</option>
                                <option value = 'ปวช.1' id = 'option'>ปวช.1</option>
                                <option value = 'อื่นๆ' id = 'option'>อื่นๆ</option>
                                <option value = 'ไม่ระบุ' id = 'option'>ไม่ระบุ</option>
                            </Select>
                            <Label>โรงเรียน</Label>
                            <Input type = 'text' id = 'school' value = {props.values.school} onChange = {props.onChange} required></Input>
                        </div>
                        <div className = 'row4'>
                            <Label>ที่อยู่</Label>
                            <Input type = 'text' id = 'address' value = {props.values.address} onChange = {props.onChange} required></Input>
                            <Label>ตำบล/แขวง</Label>
                            <Input type = 'text' id = 'subdistrict' value = {props.values.subdistrict} onChange = {props.onChange} required></Input>
                        </div>
                        <div className = 'row5'>
                            <Label>อำเภอ/เขต</Label>
                            <Input type = 'text' id = 'district' value = {props.values.district} onChange = {props.onChange} required></Input>
                            <Label>จังหวัด</Label>
                            <Input type = 'text' id = 'province' value = {props.values.province} onChange = {props.onChange} required></Input>
                            <Label>รหัสไปรษณีย์</Label>
                            <Input type = 'text' id = 'postcode' value = {props.values.postcode} onChange = {props.onChange} required></Input>
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
                </div>
            </div>
        </form>
    );
}

export default ReuseForm;