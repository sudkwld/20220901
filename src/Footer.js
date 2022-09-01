import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  let navigate = useNavigate();
  return (
    <>
      <footer>
        <div className='footer-container'>
          <Nav.Link onClick={()=> {navigate('')}}><img src='/img/header-logo.png' alt='header-logo' className='footer-logo' /></Nav.Link>
          <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu
            vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
            accumsan porttitor, facilisis luctus, metus.</p>
          <div className='call-number'>
            <h5>Got Question? Call us 24/7</h5>
            <h3>+0123 456 789</h3>
          </div>
          <div className='payments'>
            <h5>Payment Method</h5>
            <img src='/img/payments.png' alt='payments' />
          </div>
        </div>
        <div className='footer-container'>
          <ul>
            <h4>Information</h4>
            <li><a href='#'>About Molla</a></li>
            <li><a href='#'>How to shop on Molla</a></li>
            <li><a href='#'>FAQ</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>Log in</a></li>
          </ul>
        </div>
        <div className='footer-container'>
          <ul>
            <h4>Customer Service</h4>
            <li><a href='#'>Payment Methods</a></li>
            <li><a href='#'>Money-back guarantee!</a></li>
            <li><a href='#'>Returns</a></li>
            <li><a href='#'>Shipping</a></li>
            <li><a href='#'>Terms and conditions</a></li>
            <li><a href='#'>Privacy Policy</a></li>
          </ul>
        </div>
        <div className='footer-container'>
          <ul>
            <h4>My Account</h4>
            <li><a href='#'>Sign In</a></li>
            <li><a href='#'>View Cart</a></li>
            <li><a href='#'>My Wishlist</a></li>
            <li><a href='#'>Track My Order</a></li>
            <li><a href='#'>Help</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer;