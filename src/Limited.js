import { useEffect ,useState } from 'react';
import "./App.css";

function Limited() {
  let fontsmall = {
    fontSize:'12px',
    fontWeight:'400'
  }

  const calculateTimeLeft = () => {
    const difference = +new Date("Aug 22, 2023 17:29:00") - + new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }else{
      timeLeft = {
        hours : '00',
        minutes : '00',
        seconds : '00'
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
    return(
    <>
      <div id='limited'>
        <div className='limited-container'>
          <div className='deal-day'>
            <div className='deal-time'>
              <h4>Limited Quantitied</h4>
              <h2>Deal of the Day</h2>
              <a href='#'>POANG</a>
              <div className='product-price'>
                <span className='sale-price'>$149.00</span>
                <span className='original-price'>Was $240.00</span>
              </div>
              <span className='timer'>
                <span className='hour green-timer'>
                  <span className='clock'>{timeLeft.hours<10? `0${timeLeft.hours}` : timeLeft.hours}</span>
                  <span style={fontsmall}>hrs</span>
                </span>
                <span className='cl'>:</span>
                <span className='mins green-timer'>
                  <span className='clock'>{timeLeft.minutes<10? `0${timeLeft.minutes}` : timeLeft.minutes}</span>
                  <span style={fontsmall}>mins</span>
                </span>
                <span className='cl'>:</span>
                <span className='secs green-timer'>
                  <span className='clock'>{timeLeft.seconds<10? `0${timeLeft.seconds}` :timeLeft.seconds}</span>
                  <span style={fontsmall}>secs</span>
                </span>
              </span>
              <button id="view-button">Shop Now →</button>
            </div>
            <div className='deal-product'>
              <img src='img/limited-1.jpg' alt='limited-img'/>
            </div>
          </div>
          <div className='agen'>
            <img src='img/limited-2.jpg' alt='agen'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Limited;