import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { MdStore } from "react-icons/md"
import { BsCheckCircle } from "react-icons/bs"
import { AiOutlineCheck } from "react-icons/ai"
import { FaCheckCircle } from "react-icons/fa"
import "./PaymentConfirm.css"
import { FloatingGlassBox } from "../../components/Containers"
import { Button } from "../../components/Buttons/Button"
import { Link } from "react-router-dom"

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
    <FloatingGlassBox>
      <main className="py-8 px-8">
        <div>
          <div className="flex justify-center">
            <MdStore size={"10rem"} color="white" />
          </div>
          <Header>สั่งซื้อเรียบร้อย</Header>
        </div>
        <div className="flex items-center justify-between">
          <Button outline className="mr-4">
            <Link to="/profile">ไปหน้าข้อมูลผู้ใช้</Link>
          </Button>
          <Button bg="white" textColor="var(--pink-red)">
            <Link to="/">กลับหน้าหลัก</Link>
          </Button>
        </div>
      </main>
    </FloatingGlassBox>
  )
}

export default PaymentConfirm
