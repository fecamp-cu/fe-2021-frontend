import { useEffect, useState } from "react"
import styled from "styled-components"
import { RiArrowDropDownLine } from "react-icons/ri"
import "./Payment.css"
import PersonalInfoInputGroup from "../../components/Form/Form"
import ProductListV2 from "../../components/Product_list/ProductListv2"
import facebookLogo from "../../assets/book_cover.jpg"
import { checkoutWithOmise, getPaymentOption } from "../../utils/omise"
import { useCart } from "../../hooks/useCart"
import { PaymentMethod } from "../../utils/enums/shop.enum"
import { Book } from "../../utils/types/shop"
import { apiClient, CustomerInfo } from "../../utils/client"
import { Button } from "../../components/Buttons/Button"
import { Badge } from "../../components/Badge/Badge"
import KrungSri from "../../assets/images/bank_krungsri.png"
import SCB from "../../assets/images/bank_scb.png"
import BBL from "../../assets/images/bank_bbl.png"
import SomeBank from "../../assets/images/bank_something.png"

interface HeadingProps {
  index: number
  title: string
}
const book: Book[] = [
  { productId: 1, title: "เตรียมสอบ PAT 3 ความถนัดทางวิศวกรรมศาสตร์", price: 15, productImg: facebookLogo, quantity: 1 },
  { productId: 2, title: "เตรียมสอบ PAT 3 ความถนัดทางวิศวกรรมศาสตร์", price: 15, productImg: facebookLogo, quantity: 1 },
  { productId: 3, title: "เตรียมสอบ PAT 3 ความถนัดทางวิศวกรรมศาสตร์", price: 15, productImg: facebookLogo, quantity: 1 },
]

const PaymentComponentBackground = styled.div.attrs({ className: "mt-5" })`
  overflow: auto;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  background: var(--gm-color);
  border-radius: 17px;
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
  className: "grid grid-cols-3 px-7 py-12",
})``
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
  & > div {
    display: block;
    width: max-content;
  }
`
function Payment() {
  const { cart, dispatchCart, getTotalPrice } = useCart(book)
  const totalPrice = getTotalPrice()
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
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.CREDIT_CARD)
  const onCustomerInfoChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
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
  // ----------------------------shipping address info--------------------
  const addressLableColor = isUseOldAddress ? "disable" : "enable"
  const addressInputColor = isUseOldAddress ? "disable" : "enable"

  useEffect(() => {
    if (isUseOldAddress) {
      setShippingAddress(values.address)
      setShippingSubDistrict(values.subdistrict)
      setShippingDistrict(values.district)
      setShippingProvince(values.province)
      setShippingZipCode(values.postcode)
    }
  }, [isUseOldAddress, values.address, values.district, values.postcode, values.province, values.subdistrict])

  // -------------------omise handle-----------------
  const checkout = async (omiseNonce?: string) => {
    const source = omiseNonce ? { id: omiseNonce } : undefined
    const basket = cart.books.map(({ productId, quantity, price }) => ({ productId, quantity, price }))
    let data: CustomerInfo = {} as CustomerInfo
    if (!isUseOldAddress) {
      const shippingInfo = {
        address: shippingAddress,
        subdistrict: shippingSubDistrict,
        district: shippingDistrict,
        province: shippingProvince,
        postcode: shippingZipCode,
      }
      data = { ...values, ...shippingInfo, basket }
    } else data = { ...values, basket }
    console.log({ data, method: getPaymentOption(paymentMethod), source })
    const bankUri = await apiClient.checkout(data, getPaymentOption(paymentMethod), source)
    if (bankUri) {
      window.open(bankUri)
    }
  }
  const onCheckout = (e: any) => {
    e.preventDefault()
    if (getPaymentOption(paymentMethod).bank === "internet-banking") {
      checkout()
      return
    }
    checkoutWithOmise(totalPrice, checkout, paymentMethod)
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
      <form onSubmit={onCheckout} id="payment-form">
        <Layout>
          <div className="col-span-2 mr-4">
            <div>
              <Heading index={1} title="ข้อมูลผู้ซื้อ"></Heading>
              <FormContainer>
                <PersonalInfoInputGroup values={values} email={values.email} onChange={onCustomerInfoChange} />
              </FormContainer>
            </div>

            <div style={{ marginTop: "77px" }}>
              <Heading index={1} title="การจัดส่ง"></Heading>

              <Header style={{ color: "white", marginTop: "19px" }}>เลือกที่อยู่จัดส่งพัสดุของคุณ</Header>
              <div style={{ marginBottom: "36px" }}>
                <input
                  className="form-check-input h-4 w-4 cursor-pointer appearance-none rounded-full border border-2 border-red-900 bg-red-300 checked:border-2 checked:border-blue-100 checked:bg-red-900"
                  type="radio"
                  name="currentAddress"
                  onChange={(e) => {
                    setIsUseOldAddress(true)
                  }}
                  checked={isUseOldAddress}
                  style={{ marginRight: "17px", marginTop: "20px" }}
                />
                <WhiteLabel style={{ marginRight: "112px" }}>ที่อยู่ปัจจุบัน</WhiteLabel>
                <input
                  className="form-check-input h-4 w-4 cursor-pointer appearance-none rounded-full border border-2 border-red-900 bg-red-300 checked:border-2 checked:border-blue-100 checked:bg-red-900"
                  type="radio"
                  name="newAddress"
                  style={{ marginRight: "17px" }}
                  checked={!isUseOldAddress}
                  onChange={(e) => setIsUseOldAddress(false)}
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
            </div>

            <div style={{ marginTop: "77px" }}>
              <Heading index={1} title="การชำระเงิน"></Heading>
              <div>
                <div>
                  <input
                    className="form-check-input h-4 w-4 cursor-pointer appearance-none rounded-full border border-2 border-red-900 bg-red-300 checked:border-2 checked:border-blue-100 checked:bg-red-900"
                    type="radio"
                    name="selectPayment"
                    style={{ marginRight: "17px", marginTop: "20px" }}
                    checked={paymentMethod === PaymentMethod.PROMPTPAY}
                    onChange={() => setPaymentMethod(PaymentMethod.PROMPTPAY)}
                  />
                  <WhiteLabel style={{ marginRight: "112px" }}>พร้อมเพย์</WhiteLabel>
                </div>

                <div>
                  <input
                    className="form-check-input h-4 w-4 cursor-pointer appearance-none rounded-full border border-2 border-red-900 bg-red-300 checked:border-2 checked:border-blue-100 checked:bg-red-900"
                    type="radio"
                    name="selectPayment"
                    style={{ marginRight: "17px", marginTop: "20px" }}
                    checked={paymentMethod === PaymentMethod.CREDIT_CARD}
                    onChange={() => setPaymentMethod(PaymentMethod.CREDIT_CARD)}
                  />

                  <WhiteLabel>บัตรเครดิต/เดบิต</WhiteLabel>
                </div>

                <div>
                  <input
                    className="form-check-input h-4 w-4 cursor-pointer appearance-none rounded-full border border-2 border-red-900 bg-red-300 checked:border-2 checked:border-blue-100 checked:bg-red-900"
                    type="radio"
                    name="selectPayment"
                    style={{ marginRight: "17px", marginTop: "20px" }}
                    checked={getPaymentOption(paymentMethod).type === "internet-banking"}
                    onChange={() => setPaymentMethod(PaymentMethod.INTERNET_BANKING_KTB)}
                  />
                  <WhiteLabel>โอนผ่านธนาคาร</WhiteLabel>
                </div>
                <div className="ml-12 mt-2 grid grid-cols-3 gap-6">
                  <Badge
                    icon={KrungSri}
                    title="กรุงศรี"
                    checked={paymentMethod === PaymentMethod.INTERNET_BANKING_BAY}
                    onChangeCallback={() => setPaymentMethod(PaymentMethod.INTERNET_BANKING_BAY)}
                  ></Badge>
                  <Badge
                    icon={SCB}
                    title="ไทยพานิชย์"
                    checked={paymentMethod === PaymentMethod.INTERNET_BANKING_SCB}
                    onChangeCallback={() => setPaymentMethod(PaymentMethod.INTERNET_BANKING_SCB)}
                  ></Badge>
                  <Badge
                    icon={BBL}
                    title="กรุงเทพ"
                    checked={paymentMethod === PaymentMethod.INTERNET_BANKING_BBL}
                    onChangeCallback={() => setPaymentMethod(PaymentMethod.INTERNET_BANKING_BBL)}
                  ></Badge>
                  <Badge
                    icon={SomeBank}
                    title="กรุงไทย"
                    checked={paymentMethod === PaymentMethod.INTERNET_BANKING_KTB}
                    onChangeCallback={() => setPaymentMethod(PaymentMethod.INTERNET_BANKING_KTB)}
                  ></Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <ProductListV2 bookList={cart.books} onBookChange={dispatchCart} price={totalPrice}></ProductListV2>
            <Button type="submit" form="payment-form" bg="white" textColor="var(--bg-color)" className="mt-5">
              ยืนยันและไปชำระเงิน
            </Button>
          </div>
        </Layout>
      </form>
    </PaymentComponentBackground>
  )
}

export default Payment
