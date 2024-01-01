'use client'
import { useAtom } from 'jotai'
import { ProductCardProp, choosedProductsAtom } from '@/atoms'
import { Button } from '../button'
import {
  CardContainer,
  DescriptionPTag,
  NameAndDescriptionContainer,
  NamePTag,
  PriceAndCartContainer,
  PricePTag
} from './styles'

interface ProductCardProps {
  product: ProductCardProp
  index: number
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  //  const [choosedProducts,setChoosedProducts] = useAtom(choosedProductsAtom)
  //  const addNewProduct = () => {
  //   const updatedProductsArr=[];
  //   let isProductExist=false;
  //   for(let i=0;i<choosedProducts.length;i++){
  //     let updatedProduct=choosedProducts[i];
  //     if(choosedProducts[i].productName===product.productName){
  //       isProductExist=true;
  //       updatedProductsArr.push({...product,choosedQuantity:updatedProduct.choosedQuantity?updatedProduct.choosedQuantity+1:1})
  //     }else{
  //       updatedProductsArr.push(updatedProduct)
  //     }
  //   }
  //   if(!isProductExist){
  //     updatedProductsArr.push({...product,choosedQuantity:1})
  //   }
  //   setChoosedProducts(updatedProductsArr);
  //  };

  return (
    //  <CardContainer>
    //    {
    //      product.images?.length>0? <img className="w-full" src={product.images[0]} alt="product image"/>:''
    //    }
    //   <NameAndDescriptionContainer>
    //      <NamePTag>{product.productName}</NamePTag>
    //      <DescriptionPTag>   {product.description}</DescriptionPTag>
    //   </NameAndDescriptionContainer>

    //   <PriceAndCartContainer>
    //     <PricePTag>
    //       ${(product.discount?product.price-product.discount:product.price).toFixed(2)}
    //     </PricePTag>
    //    <Button color="gray" onClick={()=>addNewProduct()}>ADD TO CART</Button>
    //   </PriceAndCartContainer>
    //  </CardContainer>
    <></>
  )
}

export default ProductCard
