import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
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
      style={{ ...style, display: "none"}}
      onClick={onClick}
      id='simple-prev'
    />
  );
}


function OtherLogo() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
          prevArrow:false,
          nextArrow:false
        }
      },{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 4,
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
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow:false,
          prevArrow:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow:false,
          prevArrow:false
        }
      },{
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow:false,
          prevArrow:false
        }
      }
    ]
  };
  return (
    <>
      <div className='other-logo'>
        <Slider {...settings} id='logo-slider'>
          <div className="logo-box">
            <img src='img/1.png' alt='other-logo' />
          </div>
          <div className="logo-box">
            <img src='img/2.png' alt='other-logo' />
          </div>
          <div className="logo-box">
            <img src='img/3.png' alt='other-logo' />
          </div>
          <div className="logo-box">
            <img src='img/4.png' alt='other-logo' />
          </div>
          <div className="logo-box">
            <img src='img/5.png' alt='other-logo' />
          </div>
          <div className="logo-box">
            <img src='img/6.png' alt='other-logo' />
          </div>
          <div className="logo-box">
            <img src='img/7.png' alt='other-logo' />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default OtherLogo;