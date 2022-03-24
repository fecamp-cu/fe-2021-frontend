import { useCallback, useEffect, useState } from "react"
import { ProductContainer } from "./product.style"
import { ProductInfo, ProductInfoProps } from "../../components/ProductInfo/ProductInfo"
import Switch from "../../components/Switch/Switch"
import { useNavigate, useParams } from "react-router-dom"
import Axios, { CancelTokenSource } from "axios"
import { apiClient } from "../../utils/client"
import { IoMdBasket } from "react-icons/io"
import { Circle } from "../../components/Containers"

const Product = () => {
  const { id } = useParams()
  const navigator = useNavigate()
  const switchItems = [
    {
      title: "ข้อสอบเก่า 1",
      value: "1",
    },
    {
      title: "ข้อสอบเก่า 2",
      value: "2",
    },
  ]
  const [product, setProduct] = useState<ProductInfoProps>()
  const getProduct = useCallback(async (id: string, cancelToken?: CancelTokenSource) => {
    const product = await apiClient.fetchProduct(id, cancelToken)
    setProduct(product)
  }, [])
  useEffect(() => {
    const source = Axios.CancelToken.source()
    if (id) {
      getProduct(id, source)
    }
    return () => source.cancel()
  }, [id, getProduct])

  // TODO: Remove dummy div this in sprint 2
  return (
    <ProductContainer className="text-white">
      <div>
        <Switch items={switchItems} onSelectCallback={(id) => navigator(`/product/${id}`)} />
        {/* <div className="absolute right-8 top-32 hidden sm:block">
          <Circle color="white">
            <IoMdBasket size={40} color={"var(--crimson)"} />
          </Circle>
        </div> */}
      </div>
      <main className="glass-container p-4 md:pt-8">{product ? <ProductInfo {...product} /> : <div>loading</div>}</main>
    </ProductContainer>
  )
}

export default Product
