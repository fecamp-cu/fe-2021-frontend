import React from "react"
import styled from "styled-components"
import { RiArrowDropDownLine } from "react-icons/ri"
import "./Payment.css"

const PaymentComponentBackground = styled.div`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  background: var(--gm-color);
  border-radius: 17px;
  margin-top: 31px;
  margin-left: 118px;
  margin-right: 118px;
`


const Header = styled.h1`
  padding-left: 15px;
  font-family: CHULALONGKORN;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 42px;

  display: inline-block;
  align-items: center;

  color: #ffffff;
`

const Number = styled.h1`
  padding-top: 6px;
  font-family: CHULALONGKORN;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 42px;
  display: flex;

  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #9b2c33 0%, #d1555d 49.48%, #ea727f 99.88%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`

const WhiteCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 50px;
  color: #fff;
  text-align: center;
  background: white;
  display: inline-block;
`

const WhiteLabel = styled.label`
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin-right: 16px;
`

const TextInput = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap");
  padding: 2px 2px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  background: var(--gm-color);
  border-radius: 5px;
  margin-right: 20px;
  color: white;
  outline: none;

  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
`

const WhiteSelect = styled.select`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  background: var(--gm-color);
  border-radius: 5px;
  margin-right: 20px;
  color: #ffffff;

  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
`

function Payment() {
  return (
    <PaymentComponentBackground>
      <div style={{ padding: "46px 20px", width: "760px" }}>
        <div>
          <WhiteCircle>
            <Number>1</Number>
          </WhiteCircle>
          <Header>ข้อมูลผู้ซื้อ</Header>
          {<RiArrowDropDownLine style={{ marginRight: "auto", marginLeft: "67%", display: "inline-flex" }} color="white" size={"3.7rem"} />}
          <form action="">
            <div style={{ marginBottom: "20px" }}>
              <WhiteLabel>ชื่อ</WhiteLabel>
              <TextInput type="text" style={{ width: "300px" }} />
              <WhiteLabel>นามสกุล</WhiteLabel>
              <TextInput type="text" style={{ width: "263px" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <WhiteLabel>เบอร์โทรศัพท์</WhiteLabel>
              <TextInput type="tel" style={{ width: "230px" }} />
              <WhiteLabel>อีเมล</WhiteLabel>
              <TextInput type="email" style={{ width: "285px" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <WhiteLabel>ระดับชั้น</WhiteLabel>
              <WhiteSelect id="grade" name="grade" style={{ width: "150px", height: "26px" }}>
                <option value="grade10">ม.4</option>
                <option value="grade11">ม.5</option>
                <option value="grade12">ม.6</option>
              </WhiteSelect>
              <WhiteLabel>โรงเรียน</WhiteLabel>
              <TextInput type="text" style={{ width: "382px" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <WhiteLabel>ที่อยู่</WhiteLabel>
              <TextInput type="text" style={{ width: "407px" }} />
              <WhiteLabel>ตำบล/แขวง</WhiteLabel>
              <TextInput type="text" style={{ width: "123px" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <WhiteLabel>อำเภอ/เขต</WhiteLabel>
              <TextInput type="text" style={{ width: "128px" }} />
              <WhiteLabel>จังหวัด</WhiteLabel>
              <TextInput type="text" style={{ width: "155px" }} />
              <WhiteLabel>รหัสไปรษณีย์</WhiteLabel>
              <TextInput type="text" style={{ width: "116px" }} />
            </div>
          </form>
        </div>

        <div style={{ marginTop: "77px" }}>
          <WhiteCircle>
            <Number>2</Number>
          </WhiteCircle>
          <Header>การจัดส่ง</Header>
          {<RiArrowDropDownLine style={{ marginRight: "auto", marginLeft: "67%", display: "inline-flex" }} color="white" size={"3.7rem"} />}

          <h1 style={{ color: "white", marginTop: "19px" }}>เลือกที่อยู่จัดส่งพัสดุของคุณ</h1>
          <form action="">
            <div style={{marginBottom:"36px"}}>
              <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-red-900 border-2 bg-red-300 checked:bg-red-900 checked:border-blue-100 checked:border-2 cursor-pointer" type="radio" name="selectAddress" style={{ marginRight: "17px", marginTop: "20px"}} />
              <WhiteLabel style={{ marginRight: "112px" }}>ที่อยู่ปัจจุบัน</WhiteLabel>
              <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-red-900 border-2 bg-red-300 checked:bg-red-900 checked:border-blue-100 checked:border-2 cursor-pointer" type="radio" name="selectAddress" style={{ marginRight: "17px" }} />
              <WhiteLabel>ที่อยู่ใหม่</WhiteLabel>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <WhiteLabel>ที่อยู่</WhiteLabel>
              <TextInput type="text" style={{ width: "407px" }} />
              <WhiteLabel>ตำบล/แขวง</WhiteLabel>
              <TextInput type="text" style={{ width: "123px" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <WhiteLabel>อำเภอ/เขต</WhiteLabel>
              <TextInput type="text" style={{ width: "128px" }} />
              <WhiteLabel>จังหวัด</WhiteLabel>
              <TextInput type="text" style={{ width: "155px" }} />
              <WhiteLabel>รหัสไปรษณีย์</WhiteLabel>
              <TextInput type="text" style={{ width: "116px" }} />
            </div>
          </form>
        </div>

        <div style={{ marginTop: "77px" }}>
          <WhiteCircle>
            <Number>3</Number>
          </WhiteCircle>
          <Header>การชำระเงิน</Header>
          {<RiArrowDropDownLine style={{ marginRight: "auto", marginLeft: "67%", display: "inline-flex" }} color="white" size={"3.7rem"} />}
          <form action="">
            <div>
              <div>
                <input
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-red-900 border-2 bg-red-300 checked:bg-red-900 checked:border-blue-100 checked:border-2 cursor-pointer"
                  type="radio"
                  name="selectPayment"
                  style={{ marginRight: "17px", marginTop: "20px" }}
                />
                <WhiteLabel style={{ marginRight: "112px" }}>พร้อมเพย์</WhiteLabel>
              </div>
              <div>
                <input
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-red-900 border-2 bg-red-300 checked:bg-red-900 checked:border-blue-100 checked:border-2 cursor-pointer"
                  type="radio"
                  name="selectPayment"
                  style={{ marginRight: "17px", marginTop: "20px" }}
                />
                <WhiteLabel>บัตรเครดิต/เดบิต</WhiteLabel>
              </div>
              <div>
                <input
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-red-900 border-2 bg-red-300 checked:bg-red-900 checked:border-blue-100 checked:border-2 cursor-pointer"
                  type="radio"
                  name="selectPayment"
                  style={{ marginRight: "17px", marginTop: "20px" }}
                />
                <WhiteLabel>โอนผ่านธนาคาร</WhiteLabel>
              </div>
            </div>
          </form>
        </div>
      </div>
    </PaymentComponentBackground>
  )
}

export default Payment
