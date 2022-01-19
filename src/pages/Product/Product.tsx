import React, { useEffect, useMemo, useState } from "react"
import { ProductContainer } from "./product.style"
import { ProductInfo, ProductInfoProps } from "../../components/ProductInfo/ProductInfo"
import Book from "../../assets/book_cover.jpg"
import Switch from "../../components/Switch/Switch"
import { PRODUCT_TYPE } from "../../utils/enums"
import { IoMdBasket } from "react-icons/io"
import { Circle } from "../../components/Containers"
const testProps: ProductInfoProps[] = [
  {
    title: "เตรียมสอบ PAT3 ความถนัดทางวิศวกรรมศาสตร์",
    summary:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe iure velit architecto asperiores obcaecati temporibus perspiciatis tempora quos, quae ex laudantium nam, commodi in rem fugit at magni nobis veritatis cum expedita aliquid distinctio a? Corrupti commodi mollitia blanditiis quasi officia nihil recusandae magni rerum quisquam adipisci, modi itaque dignissimos expedita! Ipsa vitae consequuntur porro earum quia vel molestias, eum dignissimos itaque nihil nostrum quo architecto iure vero molestiae cum quam minima, eligendi reprehenderit officiis nisi. Et suscipit quod incidunt soluta! Sapiente quibusdam eos architecto! Nam ipsa aliquid ut, eligendi nostrum quae non laboriosam tenetur. Maxime libero voluptatem ex",
    type: PRODUCT_TYPE.examPreps,
    author: "Somedude WithSurname",
    thumbnail: Book,
    index: ["ปรนัยตัวเลือก 10 ข้อ", "ปรนัยตัวเลือก 5 ข้อ", "เติมคำ 5 ข้อ"],
    price: 199,
    fileUrl: "https://pdfgeneratorapi.com/example-documents/52272/pdf",
  },
  {
    title: "ข้อสอบเตรียมสอบ PAT3 ความถนัดทางวิศวกรรมศาสตร์",
    summary:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe iure velit architecto asperiores obcaecati temporibus perspiciatis tempora quos, quae ex laudantium nam, commodi in rem fugit at magni nobis veritatis cum expedita aliquid distinctio a? Corrupti commodi mollitia blanditiis quasi officia nihil recusandae magni rerum quisquam adipisci, modi itaque dignissimos expedita! Ipsa vitae consequuntur porro earum quia vel molestias, eum dignissimos itaque nihil nostrum quo architecto iure vero molestiae cum quam minima, eligendi reprehenderit officiis nisi. Et suscipit quod incidunt soluta! Sapiente quibusdam eos architecto! Nam ipsa aliquid ut, eligendi nostrum quae non laboriosam tenetur. Maxime libero voluptatem ex",
    type: PRODUCT_TYPE.oldPapers,
    author: "Somedude WithSurname",
    thumbnail: Book,
    index: ["ปรนัยตัวเลือก 10 ข้อ", "ปรนัยตัวเลือก 5 ข้อ", "เติมคำ 5 ข้อ"],
    price: 199,
    fileUrl: "https://pdfgeneratorapi.com/example-documents/226340/pdf",
  },
]
const Product = () => {
  const switchItems = [
    {
      title: "หนังสือเตรียมสอบ",
      value: PRODUCT_TYPE.examPreps,
    },
    {
      title: "ข้อสอบเก่า",
      value: PRODUCT_TYPE.oldPapers,
    },
  ]
  const [product, setProduct] = useState<ProductInfoProps>()
  useEffect(() => {
    //mock api call
    setTimeout(() => {
      setProduct(testProps[0])
    }, 300)
  }, [])
  const getProduct = (value: string) => {
    //api calls?
    if (value === PRODUCT_TYPE.oldPapers) setProduct(testProps[1])
    else setProduct(testProps[0])
  }
  return (
    <ProductContainer>
      <div>
        <Switch items={switchItems} onSelectCallback={getProduct} />
        <div className="absolute right-8 top-32 hidden sm:block">
          <Circle color="white">
            <IoMdBasket size={40} color={"var(--crimson)"} />
          </Circle>
        </div>
      </div>
      <main className="glass-container p-4 md:pt-8">{product ? <ProductInfo {...product} /> : <div>loading</div>}</main>
    </ProductContainer>
  )
}

export default Product
