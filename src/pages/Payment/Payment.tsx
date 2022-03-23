import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { RiArrowDropDownLine } from "react-icons/ri"
import "./Payment.css"
import axios from "axios"
import ReuseForm from "../../components/Form/reuseForm"
import ProductListV2 from "../../components/Product_list/ProductListv2"
import facebookLogo from "../../assets/book_cover.jpg"
import { createOmiseToken, createSourceOmise, setUpOmise } from "../../utils/omise"
import axiosInstance from "../../utils/client"
import { PaymentTypes, PromotionCodeType } from "../../utils/enums"
import { ResizableContainer } from "../../components/Containers"

interface Basket {
  productId: number
  quantity: number
}
interface HeadingProps {
  index: number
  title: string
}

interface Book {
  productId: number
  title: string
  price: number
  productImg: string
}

const book: Book[] = [
  { productId: 1, title: "เตรียมสอบ PAT 3 ความถนัดทางวิศวกรรมศาสตร์", price: 15, productImg: facebookLogo },
  { productId: 2, title: "เตรียมสอบ PAT 3 ความถนัดทางวิศวกรรมศาสตร์", price: 15, productImg: facebookLogo },
  { productId: 3, title: "เตรียมสอบ PAT 3 ความถนัดทางวิศวกรรมศาสตร์", price: 15, productImg: facebookLogo },
]

const PaymentComponentBackground = styled.div`
  overflow: auto;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  background: var(--gm-color);
  border-radius: 17px;
  margin-top: 31px;
  margin: auto;
  width max-content;
  height:auto;
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
const Layout = styled.main.attrs({
  className: "grid grid-cols-3",
})`
  padding: 61px 19px;
`
const TextInput = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap");
  padding: 2px 2px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.3);
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
const FormContainer = styled.div`
  & > form > div {
    display: block;
    width: max-content;
  }
`
function Payment() {
  // ----------------------------User info--------------------------
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [grade, setGrad] = useState("")
  const [school, setSchool] = useState("")
  const [address, setAddress] = useState("")
  const [subDistrict, setSubDistrict] = useState("")
  const [district, setDistrict] = useState("")
  const [province, setProvince] = useState("")
  const [zipCode, setZipCode] = useState("")

  const [values, setValues] = useState({
    firstName: "",
    surName: "",
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

  function inputFirstName(event: any) {
    setFirstname(event.target.value)
  }

  function inputLastName(event: any) {
    setLastname(event.target.value)
  }

  function inputTel(event: any) {
    setTel(event.target.value)
  }

  function inputEmail(event: any) {
    setEmail(event.target.value)
  }

  function inputGrade(event: any) {
    setGrad(event.target.value)
  }

  function inputSchool(event: any) {
    setSchool(event.target.value)
  }

  function inputAddress(event: any) {
    setAddress(event.target.value)
  }

  function inputSubDistrict(event: any) {
    setSubDistrict(event.target.value)
  }

  function inputDistrict(event: any) {
    setDistrict(event.target.value)
  }

  function inputProvince(event: any) {
    setProvince(event.target.value)
  }

  function inputZipCode(event: any) {
    setZipCode(event.target.value)
  }

  // ----------------------------shipping address info--------------------
  const [isUseOldAddress, setIsUseOldAddress] = useState(false)
  const [shippingAddress, setShippingAddress] = useState("")
  const [shippingSubDistrict, setShippingSubDistrict] = useState("")
  const [shippingDistrict, setShippingDistrict] = useState("")
  const [shippingProvince, setShippingProvince] = useState("")
  const [shippingZipCode, setShippingZipCode] = useState("")

  function inputShippingAddress(event: any) {
    setShippingAddress(event.target.value)
  }
  function inputShippingSubDistrict(event: any) {
    setShippingSubDistrict(event.target.value)
  }
  function inputShippingDistrict(event: any) {
    setShippingDistrict(event.target.value)
  }
  function inputShippingProvince(event: any) {
    setShippingProvince(event.target.value)
  }
  function inputShippingZipCode(event: any) {
    setShippingZipCode(event.target.value)
  }

  function OnClickUseOldAddress(event: any) {
    setIsUseOldAddress(true)
  }

  function OnClickUseNewAddress(event: any) {
    setIsUseOldAddress(false)
  }

  // ----------------------------shipping address info--------------------
  const addressLableColor = isUseOldAddress ? "disable" : "enable"
  const addressInputColor = isUseOldAddress ? "disable" : "enable"

  useEffect(() => {
    if (isUseOldAddress) {
      setShippingAddress(address)
      setShippingSubDistrict(subDistrict)
      setShippingDistrict(district)
      setShippingProvince(province)
      setShippingZipCode(zipCode)
    }
  }, [isUseOldAddress, address, subDistrict, district, province, zipCode])

  // -------------------omise handle-----------------

  function omiseConfigure() {
    window.OmiseCard.configure({
      publicKey: "pkey_test_5qkz65yd4xjeimitf5x",
      frameLabel: "FE Camp",
      submitLabel: "Pay",
      defaultPaymentMethod: "credit_card",
    })
    window.OmiseCard.configureButton("#credit-card")
    window.OmiseCard.attach()
  }

  const sentData = async (
    source: string,
    email: string,
    firstName: string,
    lastName: string,
    tel: string,
    grade: string,
    school: string,
    address: string,
    subdistrict: string,
    district: string,
    province: string,
    // postalCode
    postcode: string,
    basket: Basket[],
    promotion_code?: string
  ) => {
    try {
      await axios({
        method: "post",
        url: "https://dev.fe.in.th/api",
        data: {
          source,
          email,
          firstName,
          lastName,
          tel,
          grade,
          school,
          address,
          subdistrict,
          district,
          province,
          postcode,
          basket,
          promotion_code,
        },
      })
    } catch {
      console.log("error")
    }
  }

  function omiseReceiveToken() {
    window.OmiseCard.open({
      amount: 12345,
      onCreateTokenSuccess: (token: any) => {
        console.log(token)
        const b1 = { productId: 10, quantity: 2 }
        const basket = [b1]
        sentData(
          token,
          email,
          firstName,
          lastName,
          tel,
          grade,
          school,
          shippingAddress,
          shippingSubDistrict,
          shippingDistrict,
          shippingProvince,
          shippingZipCode,
          basket
        )
      },
    })
  }

  function payWithCreditCard(event: any) {
    event.preventDefault()
    setUpOmise()
    omiseReceiveToken()
  }
  const onChange = (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }
  const Heading = ({ title, index }: HeadingProps) => {
    return (
      <div className="w-100 flex justify-between">
        <div>
          <WhiteCircle>
            <Number>{index}</Number>
          </WhiteCircle>
          <Header>{title}</Header>
        </div>
        {<RiArrowDropDownLine style={{ float: "right", display: "inline-flex" }} color="white" size={"3.7rem"} />}
      </div>
    )
  }
  return (
    <PaymentComponentBackground>
      <Layout>
        <div className="col-span-2 mr-4">
          <div>
            <Heading index={1} title="ข้อมูลผู้ซื้อ"></Heading>
            <FormContainer>
              <ReuseForm></ReuseForm>
            </FormContainer>
          </div>

          <div style={{ marginTop: "77px" }}>
            <Heading index={1} title="การจัดส่ง"></Heading>

            <Header style={{ color: "white", marginTop: "19px" }}>เลือกที่อยู่จัดส่งพัสดุของคุณ</Header>
            <form action="">
              <div style={{ marginBottom: "36px" }}>
                <input
                  className="form-check-input h-4 w-4 cursor-pointer appearance-none rounded-full border border-2 border-red-900 bg-red-300 checked:border-2 checked:border-blue-100 checked:bg-red-900"
                  type="radio"
                  name="selectAddress"
                  style={{ marginRight: "17px", marginTop: "20px" }}
                />
                <WhiteLabel style={{ marginRight: "112px" }}>ที่อยู่ปัจจุบัน</WhiteLabel>
                <input
                  className="form-check-input h-4 w-4 cursor-pointer appearance-none rounded-full border border-2 border-red-900 bg-red-300 checked:border-2 checked:border-blue-100 checked:bg-red-900"
                  type="radio"
                  name="selectAddress"
                  style={{ marginRight: "17px" }}
                />
                <WhiteLabel>ที่อยู่ใหม่</WhiteLabel>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <WhiteLabel className={addressLableColor}>ที่อยู่</WhiteLabel>
                <TextInput
                  className={addressInputColor}
                  disabled={isUseOldAddress}
                  type="text"
                  style={{ width: "407px" }}
                  onChange={inputShippingAddress}
                  value={shippingAddress}
                />
                <WhiteLabel className={addressLableColor}>ตำบล/แขวง</WhiteLabel>
                <TextInput
                  className={addressInputColor}
                  disabled={isUseOldAddress}
                  type="text"
                  style={{ width: "123px" }}
                  onChange={inputShippingSubDistrict}
                  value={shippingSubDistrict}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <WhiteLabel className={addressLableColor}>อำเภอ/เขต</WhiteLabel>
                <TextInput
                  className={addressInputColor}
                  disabled={isUseOldAddress}
                  type="text"
                  style={{ width: "128px" }}
                  onChange={inputShippingDistrict}
                  value={shippingDistrict}
                />
                <WhiteLabel className={addressLableColor}>จังหวัด</WhiteLabel>
                <TextInput
                  className={addressInputColor}
                  disabled={isUseOldAddress}
                  type="text"
                  style={{ width: "155px" }}
                  onChange={inputShippingProvince}
                  value={shippingProvince}
                />
                <WhiteLabel className={addressLableColor}>รหัสไปรษณีย์</WhiteLabel>
                <TextInput
                  className={addressInputColor}
                  disabled={isUseOldAddress}
                  type="text"
                  style={{ width: "116px" }}
                  onChange={inputShippingZipCode}
                  value={shippingZipCode}
                />
              </div>
            </form>
          </div>

          <div style={{ marginTop: "77px" }}>
            <Heading index={1} title="การชำระเงิน"></Heading>
            <form action="">
              <div>
                <div>
                  <input
                    className="form-check-input h-4 w-4 cursor-pointer appearance-none rounded-full border border-2 border-red-900 bg-red-300 checked:border-2 checked:border-blue-100 checked:bg-red-900"
                    type="radio"
                    name="selectPayment"
                    style={{ marginRight: "17px", marginTop: "20px" }}
                  />
                  <WhiteLabel style={{ marginRight: "112px" }}>พร้อมเพย์</WhiteLabel>
                </div>

                <div>
                  <input
                    className="form-check-input h-4 w-4 cursor-pointer appearance-none rounded-full border border-2 border-red-900 bg-red-300 checked:border-2 checked:border-blue-100 checked:bg-red-900"
                    type="radio"
                    name="selectPayment"
                    style={{ marginRight: "17px", marginTop: "20px" }}
                  />

                  <WhiteLabel>บัตรเครดิต/เดบิต</WhiteLabel>
                </div>

                <div>
                  <input
                    className="form-check-input h-4 w-4 cursor-pointer appearance-none rounded-full border border-2 border-red-900 bg-red-300 checked:border-2 checked:border-blue-100 checked:bg-red-900"
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
        <div className="col-span-1">
          <ProductListV2 bookList={book}></ProductListV2>
          <form>
            <button type="button" id="credit-card" onClick={payWithCreditCard}>
              จ่ายเงิน
            </button>
          </form>
        </div>
      </Layout>
    </PaymentComponentBackground>
  )
}

export default Payment
