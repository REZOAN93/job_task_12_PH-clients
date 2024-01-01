import Link from 'next/link'
import { FaTwitterSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa'
import { MdOutlineFacebook } from 'react-icons/md'

import Container from '../container'

import { Footer, FooterList } from './styles'

const CustomFooter = () => {
  return (
    <Footer>
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href={'#'}>Phones</Link>
            <Link href={'#'}>Laptops</Link>
            <Link href={'#'}>Desktops</Link>
            <Link href={'#'}>Watches</Link>
            <Link href={'#'}>TVs</Link>
            <Link href={'#'}>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Services</h3>
            <Link href={'#'}>Contact List</Link>
            <Link href={'#'}>Shipping Policy</Link>
            <Link href={'#'}>Returns & Exchanges</Link>
            <Link href={'#'}>Watches</Link>
            <Link href={'#'}>FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              At our electronics store , we are dedicated to providing the
              latest and gretest devices and accessories to our customers . with
              a wide sleection of phones , TVS,laptops,watches and accessories
            </p>
            <p>&copy: {new Date().getFullYear()} E-Shop All right reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow us</h3>
            <div className="flex gap-2">
              <MdOutlineFacebook size={24} />

              <FaTwitterSquare size={24} />

              <FaInstagramSquare size={24} />

              <FaYoutube size={24} />
            </div>
          </FooterList>
        </div>
      </Container>
    </Footer>
  )
}
export default CustomFooter
