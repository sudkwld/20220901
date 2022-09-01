import { AiOutlineRocket} from 'react-icons/ai'
import {GrRotateLeft} from 'react-icons/gr'
import { RiInformationLine } from 'react-icons/ri';
import { HiOutlineSupport } from 'react-icons/hi';

const Footer_Top = () => {
  
  return(
    <>
      <div className='footer-top'>
        <div className='logo-sign'>
          <div className='logo-container'>
            <AiOutlineRocket className='footer-icons' />
            <div className='logo-text'>
              <h4>Free Shipping</h4>
              <h5>orders $50 or more</h5>
            </div>
          </div>
          <div className='logo-container'>
            <GrRotateLeft className='footer-icons' />
            <div className='logo-text'>
              <h4>Free Returns</h4>
              <h5>within 30 days</h5>
            </div>
          </div>
          <div className='logo-container'>
            <RiInformationLine className='footer-icons' />
            <div className='logo-text'>
              <h4>Get 20% Of 1 Item</h4>
              <h5>when you sign up</h5>
            </div>
          </div>
          <div className='logo-container'>
            <HiOutlineSupport className='footer-icons' />
            <div className='logo-text'>
              <h4>We Support</h4>
              <h5>24/7 amazing services</h5>
            </div>
          </div>
        </div>
        <div className='last-deals' style={{ backgroundImage: "url('/img/footer-bg.jpg')" }}>
          <h3>Get The Latest Deals</h3>
          <p>and receive $20 coupon for first shopping</p>
          <form>
            <input type='email' placeholder='Enter your Email Address' />
            <input type='submit' value='Subscribe →' /><span></span>
          </form>
        </div>
      </div>
    </>
  )
}

export default Footer_Top;