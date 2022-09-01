import { useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'
import { useEffect } from "react";
import { addItem } from './store.js';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
//react-bootstrap
import Button from 'react-bootstrap/Button';
//icons
import { AiFillStar, AiOutlineHeart, AiOutlineCaretRight } from 'react-icons/ai';
import {GoThumbsup, GoThumbsdown} from 'react-icons/go';

import Footer from './Footer.js'


function Detail(props) {
  let [tap, setTap] = useState(0);
  let { id } = useParams();
  console.log(id);
  console.log(Number(id) + 1);

  let selproduct = props.topfurniture.find((x) => x.id == id)
  let dispatch = useDispatch()

  let [fade2, setFade2] = useState('')
  useEffect(() => {
    setFade2('end')
    return () => {
      setFade2('')
    }
  }, [])

  return (
    <>
      <div className={'start ' + fade2} id='detail-screen'>
        <div className="product-section">
          <div className="product-left">
            <img src={'/' + selproduct.img} className='detail-img' />
          </div>
          <div className="product-right">
            <h4 className="pt-5">{selproduct.title}</h4>
            <p className="section-price">{selproduct.price}</p>
            <div className="score">
              <p className='star-box'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
              <span>(2 reviews)</span>
            </div>
            <p className="describe">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
              libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.</p>
            <div className='quantity-box'>
              quantity: <input type='text' placeholder='1' className='quantity' />
              <Button variant='dark' id='cart-btn' onClick={() => {
                //  dispatch(addItem(  {id : 2, name : 'Grey Yordan', count : 1}))

                dispatch(addItem({
                  id: selproduct.id,
                  name: selproduct.title,
                  count: 1,
                }))
              }}>ADD TO CART</Button>
            </div>
            <div className="wish-list">
              <Button variant="outline-dark" id='outline-dark-btn'><AiOutlineHeart className="index-heart-icon" />ADD TO WISHLIST</Button>
            </div>
            <table className='tags'>
              <tbody>
                <tr>
                  <td>SKU: 007</td>
                </tr>
                <tr>
                  <td>Categoried: Home, Decor</td>
                </tr>
                <tr>
                  <td>Tags: Modern, Pottery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="product-tab-content">
          <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item >
              <Nav.Link id='sub-tab' onClick={() => { setTap(0) }} eventKey="link0">Description</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link id='sub-tab' onClick={() => { setTap(1) }} eventKey="link1">Additional Information</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link id='sub-tab' onClick={() => { setTap(2) }} eventKey="link2">Reviews (2) </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>

      <TabContent tap={tap} />
      <div className="recommend">
        <div className="recommend-title">
          <h3>Trending Products</h3>
          <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
        </div>
        <div className="other-product-box">
          <img src='/img/other-product1.jpg' alt='other-product' />
          <h4>BALL CLEW</h4>
          <span className="star-box"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          <p className="other-price">$20</p>
        </div>
        <div className="other-product-box">
          <img src='/img/other-product2.jpg' alt='other-product' />
          <h4>NEWSPAPER TABLE</h4>
          <span className="star-box"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          <p className="other-price">$80</p>
        </div>
        <div className="other-product-box">
          <img src='/img/other-product3.jpg' alt='other-product' />
          <h4>ANIGRAM ROOSTER</h4>
          <span className="star-box"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          <p className="other-price">$210</p>
        </div>
        <div className="other-product-box">
          <img src='/img/other-product4.jpg' alt='other-product' />
          <h4>DECO ACCESSORY</h4>
          <span className="star-box"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          <p className="other-price">$15</p>
        </div>
      </div>
      <Footer />
    </>
  )
}


function TabContent({ tap }) {
  let [fade, setFade] = useState('')
  useEffect(() => {
    setTimeout(() => { setFade('end') }, 10)
    return () => {
      setFade('')
    }
  }, [tap])

  return (
    <div className={'start ' + fade}>
      {[<>
        <div className="description">
          <div className="description-container">
            <div className="des-left">
              <h3>Description</h3>
              <p>Nam libero tempore, cum soluta nobis est eligendi
                optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est,
                omnis dolor repellendus. Temporibus autem quibusdam et
                aut officiis debitis aut rerum omnis voluptas assumenda.</p>
            </div>
            <div className="des-right">
              <img src='/img/banner-3.jpg' alt='banner' />
            </div>
          </div>
          <div className="description-container">
            <div className="des-left">
              <h3>Featured</h3>
              <ul>
                <li><AiOutlineCaretRight className='outline' />Fully padded back panel, web hauded handle</li>
                <li><AiOutlineCaretRight className='outline' />Internal padded sleeve fits 15″ laptop</li>
                <li><AiOutlineCaretRight className='outline' />Internal tricot lined tablet sleeve</li>
                <li><AiOutlineCaretRight className='outline' />One large main compartment and zippered</li>
                <li><AiOutlineCaretRight className='outline' />Premium cotton canvas fabric</li>
              </ul>
            </div>
            <div className="des-right">
              <img src='/img/banner-4.jpg' alt='banner' />
            </div>
          </div>
        </div>
      </>,
      <>
        <div className="additional">
          <h3>ADDITIONAL INFORMATION</h3>
          <table>
            <tbody>
              <tr>
                <td>Weight</td>
                <td>2kg</td>
              </tr>
              <tr>
                <td>Dimension</td>
                <td>10 X 10 X 15 cm</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Gold, White</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>Concrete, Metal</td>
              </tr>
            </tbody>
          </table>
            
        </div>
      </>,
      <>
        <div className="review">
          <h3>Reviews (2)</h3>
          <div className='review-container'>
            <div className='review-user-name'>
              <h4>Samanta J.</h4>
              <div className="star-box">
                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
              </div>
              <span>6 days ago</span>
            </div>
            <div className="opinion">
              <h4>Good, perfect size</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum 
                dolores assumenda asperiores facilis porro reprehenderit animi culpa 
                atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, 
                autem fugit beatae quae voluptas!</p>
              <div className="thumb">
                <span><GoThumbsup className="thumb-icon" />Helpful (2)</span>
                <span><GoThumbsdown className="thumb-icon"/>Unhelpful (0)</span>
              </div>
            </div>
          </div>
          <div className='review-container'>
            <div className='review-user-name'>
              <h4>John Doe</h4>
              <div className="star-box">
                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
              </div>
              <span>5 days ago</span>
            </div>
            <div className="opinion">
              <h4>Very good</h4>
              <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam 
                laborum blanditiis laudantium iste amet. Cum non voluptate 
                eos enim, ab cumque nam, modi, quas iure illum repellendus, 
                blanditiis perspiciatis beatae!</p>
              <div className="thumb">
                <span><GoThumbsup className="thumb-icon"/>Helpful (2)</span>
                <span><GoThumbsdown className="thumb-icon"/>Unhelpful (0)</span>
              </div>
            </div>
          </div>
        </div>
      </>
      ][tap]}
    </div>
  )
}

export default Detail;