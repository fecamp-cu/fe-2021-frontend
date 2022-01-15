import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { MdStore } from "react-icons/md"
import { BsCheckCircle } from "react-icons/bs"
import { AiOutlineCheck } from "react-icons/ai"
import { FaCheckCircle } from "react-icons/fa"
import "./PaymentConfirm.css"

const PaymentComponentBackground = styled.div`
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  background: var(--gm-color);
  border-radius: 17px;
  margin-top: 200px;
  margin-bottom: 300px;
  margin-left: 30%;
  margin-right: 30%;
  Width : 473px;
  height: 414px;
`

const Header = styled.h1`
  padding-left: 15px;
  font-family: CHULALONGKORN;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #ffffff;
`

function PaymentConfirm() {
  return (
    <PaymentComponentBackground className="responsive-box">
      <div>
        <div style={{ display:'flex', justifyContent:'center', paddingTop:'64px'}}>
          <MdStore size={"10rem"} color="white"  />
        </div>
      </div>

      <Header>สั่งซื้อเรียบร้อย</Header>
      <div style={{ display: "flex", marginTop: "46px", justifyContent: "center" , paddingBottom:"20px"}}>
        <h1 style={{ marginRight: "90px" }}>ไปหน้าข้อมูลผู้ใช้</h1>
        <h1>กลับหน้าหลัก</h1>
      </div>
    </PaymentComponentBackground>
  )
}

export default PaymentConfirm
