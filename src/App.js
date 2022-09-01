import './App.css';
import { useState } from 'react';
import Header_middle from './Header_middle.js';
import featured from './featured.js';
import featured2 from './featured2.js';
import featured3 from './featured3.js';
import data from './data.js';
import data2 from './data2.js';
import data3 from './data3.js';
import data4 from './data4.js';
import Cart from './Cart.js';
import Detail from './Detail.js';
import Detail2 from './Detail2.js';
import OtherLogo from './OtherLogo.js';
import Promotion from './Promotion.js';
import Limited from './Limited.js';
import Blog from './Blog.js';
import Footer_Top from './Footer_Top.js';
import Footer from './Footer.js';
//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'
//라우터
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
// 아이콘
import {BsCartCheck} from 'react-icons/bs';
//slider 
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//responsive css
import './App_css_599.css';
import './App_css_600.css';
import './App_css_990.css';
import './App_css_1200.css';

import './Sub_css_1200.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
      id='simple-next'
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
      id='simple-prev'
    />
  );
}

function App() {
  let navigate = useNavigate();

  let [tap, setTap] = useState(0);   
  
  let [sellect, setSellect] = useState(0);

  let [topfurniture,setTopfurniture] = useState(featured);

  let [furniture,setFurniture] = useState(data);

  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" variant="dark" id="top-nav">
          <Container>
            <Navbar.Brand href="#home">Special collection already available. <span>Read more ...</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" />
              <Nav>
                <Nav className="me-auto">
                  <NavDropdown title="USD" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav className="me-auto">
                  <NavDropdown title="English" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav.Link href="#deets">Sign In / Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Header_middle />
      </header>
      <Routes>
          <Route path='/' element={
          <>
            <Carousel id='carousel-control'>
              <Carousel.Item>
                <img
                  className="d-block w-auto"
                  src="img/slide-1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p>Bedroom Furniture</p>
                  <h3>Find Comfort<br />That suits You.</h3>
                  <button>Shop Now →</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-auto"
                  src="img/slide-2.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <p>Deals and Promotions</p>
                  <h3>Ypperling<br />Coffee Table</h3>
                  <h4><span>$</span>49,99</h4>
                  <button>Shop Now →</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-auto"
                  src="img/slide-3.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <p>
                    Living Room
                  </p>
                  <h3>Make Your Living Room<br />Work For You.</h3>
                  <h6>from $<span>9,99</span></h6>
                  <button>Shop Now →</button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
      <OtherLogo />
      <Promotion />
      <div className='top-product'>
        <div className='top-product-title'>
          <h3>Best Selling Furniture</h3>
          <Button variant="light" id='title-tap' onClick={()=>{ setTap(0) }}>Featured</Button>{' '}
          <Button variant="light" id='title-tap' onClick={()=>{ setTap(1) }}>On Sale</Button>{' '}
          <Button variant="light" id='title-tap' onClick={()=>{ setTap(2) }}>Top Rated</Button>{' '}
        </div>
        <TabContent tap={tap}/>
      </div>
      <Limited/>
      <div className='container'>
        <div className='row'>
          <div className='top-selling-product'>
            <h3>Top Selling Products</h3>
              <Button variant="light" onClick={()=>{ setSellect(0) }}>ALL</Button>
              <Button variant="light" onClick={()=>{ setSellect(1) }}>FURNITURE</Button>
              <Button variant="light" onClick={()=>{ setSellect(2) }}>DECORATION</Button>
              <Button variant="light" onClick={()=>{ setSellect(3) }}>LIGHTING</Button>
          </div>
          <SellectContent sellect={sellect}/>
        </div>
      </div>
      <Blog/>
      <Footer_Top/>
      <Footer />
          </>}/>
          <Route path='/detail/:id' element={<Detail topfurniture={topfurniture} />}/>
          <Route path='/detail2/:id' element={<Detail2 furniture={furniture} />}/>
          {/* 404page
          <Route path='*' element={<div>없는 페이지입니다.</div>}/> */}
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/About/member' element={<Member/>}/>
    </Routes>
    </>
  );
}

function TabContent({tap}){
  let [topfurniture, setTopfurniture] = useState(featured);
  let [second, setSecond] = useState(featured2);
  let [third, setThird] = useState(featured3);

  let [res1, setRes1] = useState([-1,0,1,2,3,4,5,6,7,8]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
          prevArrow:false,
          nextArrow:false
        }
      },{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
          nextArrow:false,
          prevArrow:false
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
          nextArrow:false,
          prevArrow:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow:false,
          prevArrow:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow:false,
          prevArrow:false
        }
      }
    ]
  };
  return [<div>
            <Slider {...settings}>
              {
                topfurniture.map((a,i) => {
                  return(
                    <TopProduct topfurniture={topfurniture[i]} key={i} i={i+1} res1={res1}/>
                  )
                })
              }
            </Slider>
          </div>, 
          <div>
            <Slider {...settings}>
              {
                second.map((a,i) => {
                  return(
                    <SecondProduct second={second[i]} key={i} i={i+1} res1={res1}/>
                  )
                })
              }
            </Slider>
          </div>, 
          <div>
            <Slider {...settings}>
              {
                third.map((a,i) => {
                  return(
                    <ThirdProduct third={third[i]} key={i} i={i+4} res1={res1}/>
                  )
                })
              }
            </Slider>
          </div> ][tap]
}

function TopProduct(props) {
  let navigate = useNavigate();
  return(
    <>
      <div className='top-product-box'>
        <Nav.Link onClick={()=> {navigate('/detail/' + props.res1[props.i])}}>
          <img src={'/img/product-' + props.i + '-1.jpg'} width='100%' className='top-product-img'/>
          <img src={'/img/product-' + props.i + '-2.jpg'} width='100%' className='top-hover'/>
          <h4>{props.topfurniture.title}</h4>
          <p>{props.topfurniture.price}<span className='old-price'>{props.topfurniture.sale}</span></p>
          <h5 className='cart'><BsCartCheck className='cart-icon'/>ADD TO CART</h5>
        </Nav.Link>
      </div>
    </>
  )
}

function SecondProduct(props) {
  let navigate = useNavigate();
  return(
    <>
      <div className='top-product-box'>
        <Nav.Link onClick={()=> {navigate('/detail/' + props.res1[props.i])}}>
          <img src={'/img/product-' + props.i + '-1.jpg'} width='100%' className='top-product-img'/>
          <img src={'/img/product-' + props.i + '-2.jpg'} width='100%' className='top-hover'/>
          <h4>{props.second.title}</h4>
          <p>{props.second.price}<span className='old-price'>{props.second.sale}</span></p>
          <h5 className='cart'><BsCartCheck className='cart-icon'/>ADD TO CART</h5>
        </Nav.Link>
      </div>
    </>
  )
}


function ThirdProduct(props) {
  let navigate = useNavigate();
  return(
    <>
      <Nav.Link onClick={()=> {navigate('/detail/' + props.res1[props.i])}}>
        <div className='top-product-box'>
          <img src={'/img/product-' + props.i + '-1.jpg'} width='100%' className='top-product-img'/>
          <img src={'/img/product-' + props.i + '-2.jpg'} width='100%' className='top-hover'/>
          <h4>{props.third.title}</h4>
          <p>{props.third.price}<span className='old-price'>{props.third.sale}</span></p>
          <h5 className='cart'><BsCartCheck className='cart-icon'/>ADD TO CART</h5>
        </div>
      </Nav.Link>
    </>
  )
}

function SellectContent({sellect}) {

  let [furniture,setFurniture] = useState(data);
  let [furnitureTwo] = useState(data2);
  let [furnitureThree] = useState(data3);
  let [furnitureFour] = useState(data4);

  let [res1, setRes1] = useState([-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,2,5,6,1,4,7,8,0,3,9]);

  return [<div className='products'>
            {
              furniture.map((a,i) => {
                return(
                  <Product furniture={furniture[i]} i={i+7} key={i} res1={res1}/>
                )
              })
            }
          </div>, 
          <div className='products'>
            {
              furnitureTwo.map((a,i) => {
                return(
                  <SellingFurniture furnitureTwo={furnitureTwo[i]} i={i+17} key={i} res1={res1}/>
                )
              })
            }
          </div>, 
          <div className='products'>
            {
              furnitureThree.map((a,i) => {
                return(
                  <SellingDeco furnitureThree={furnitureThree[i]} i={i+20} key={i} res1={res1}/>
                )
              })
            }
          </div>,
          <div className='products'>
            {
              furnitureFour.map((a,i) => {
                return(
                  <SellingLight furnitureFour={furnitureFour[i]} i={i+24} key={i} res1={res1}/>
                )
              })
            }
          </div> ]
  [sellect]
}

function Product(props) {
  let navigate = useNavigate();
  return(
    <>
      <div className='col-md-4'>
        <div className='top-product-box'>
          <Nav.Link onClick={()=> {navigate('/detail2/' + props.res1[props.i])}}>
            <img src={'/img/product-' + props.i + '-1.jpg'} width='100%' className='top-product-img'/>
            <img src={'/img/product-' + props.i + '-2.jpg'} width='100%' className='top-hover'/>
            <a href='#' className='selling-list'>{props.furniture.furniture}</a>
            <h4 className='selling-title'>{props.furniture.title}</h4>
            <p className='selling-price'>{props.furniture.price}</p>
            <h5 className='cart'><BsCartCheck className='cart-icon'/>ADD TO CART</h5>
          </Nav.Link>
        </div>
      </div>
    </>
  )
}

function SellingFurniture(props) {
  let navigate = useNavigate();
  return(
    <>
      <div className='col-md-4' >
        <div className='top-product-box'>
          <Nav.Link onClick={()=> {navigate('/detail2/' + props.res1[props.i])}}>
            <img src={'/img/product-' + props.i + '-1.jpg'} width='100%' className='top-product-img'/>
            <img src={'/img/product-' + props.i + '-2.jpg'} width='100%' className='top-hover'/>
            <a href='#' className='selling-list'>{props.furnitureTwo.furniture}</a>
            <h4 className='selling-title'>{props.furnitureTwo.title}</h4>
            <p className='selling-price'>{props.furnitureTwo.price}</p>
            <h5 className='cart'><BsCartCheck className='cart-icon'/>ADD TO CART</h5>
          </Nav.Link>
        </div>
      </div>
  </>
  )
}

function SellingDeco(props) {
  let navigate = useNavigate();
  return(
    <>
      <div className='col-md-4'>
        <div className='top-product-box'>
          <Nav.Link onClick={()=> {navigate('/detail2/' + props.res1[props.i])}}>
            <img src={'/img/product-' + props.i + '-1.jpg'} width='100%' className='top-product-img'/>
            <img src={'/img/product-' + props.i + '-2.jpg'} width='100%' className='top-hover'/>
            <a href='#' className='selling-list'>{props.furnitureThree.furniture}</a>
            <h4 className='selling-title'>{props.furnitureThree.title}</h4>
            <p className='selling-price'>{props.furnitureThree.price}</p>
            <h5 className='cart'><BsCartCheck className='cart-icon'/>ADD TO CART</h5>
          </Nav.Link>
        </div>
      </div>
  </>
  )
}

function SellingLight(props) {
  let navigate = useNavigate();
  return(
    <>
      <div className='col-md-4'>
        <div className='top-product-box'>
          <Nav.Link onClick={()=> {navigate('/detail2/' + props.res1[props.i])}}>
            <img src={'/img/product-' + props.i + '-1.jpg'} width='100%' className='top-product-img'/>
            <img src={'/img/product-' + props.i + '-2.jpg'} width='100%' className='top-hover'/>
            <a href='#' className='selling-list'>{props.furnitureFour.furniture}</a>
            <h4 className='selling-title'>{props.furnitureFour.title}</h4>
            <p className='selling-price'>{props.furnitureFour.price}</p>
            <h5 className='cart'><BsCartCheck className='cart-icon'/>ADD TO CART</h5>
          </Nav.Link>
        </div>
      </div>
  </>
  )
}


function About() {
  return(
    <>
      <div>about</div>
      <Footer/>
    </>
  )
}

function Member() {
  return(
    <>
      <div>member</div>
      <Footer/>
    </>
  )
}


export default App;
