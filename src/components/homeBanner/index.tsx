import Image from 'next/image'

import {
  Div1,
  Div2,
  Div3,
  Header1,
  ImageDiv,
  Paragraph1,
  Paragraph2
} from './styles'

import { textes } from '@/commom/strings'

const HomeBanner = () => {
  return (
    <Div1>
      <Div2>
        <Div3>
          <Header1>{textes.summerScale}</Header1>
          <Paragraph1>{textes.enjoyDiscountsOnSelectedItems}</Paragraph1>
          <Paragraph2>{textes.getOff}</Paragraph2>
        </Div3>
        <ImageDiv>
          <Image
            src="/banner-image.png"
            fill
            alt="Banner Image"
            className="object-contain"
          />
        </ImageDiv>
      </Div2>
    </Div1>
  )
}

export default HomeBanner
