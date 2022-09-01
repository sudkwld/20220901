function Promotion() {
  const weight = {
    fontWeight: '300'
  }
  return (
    <>
      <div className='promotion'>
        <div className='promotion-container' >
          <img src='img/banner-1.jpg' alt='banner' />
          <div className='promotion-text'>
            <p className='p-6'>Clearance</p>
            <h5 className='h-b'>Coffee Tables<br /><span style={weight}>from $19.99</span></h5>
            <button className='button-b' id='view-button'>Shop Now  →</button>
          </div>
        </div>
        <div className='promotion-container'>
          <img src='img/banner-2.jpg' alt='banner' />
          <div className='promotion-text2'>
            <p>On Sale</p>
            <h5 className='h-w'>Amazing<br />Armchairs<br /><span style={weight}>from $39.99</span></h5>
            <button className='button-w' id="view-button">Discover Now  →</button>
          </div>
        </div>
        <div className='promotion-container'>
          <div className='promotion-box'>
            <img src='img/banner-3.jpg' alt='banner' />
            <div className='promotion-text3'>
              <p>New Arrivals</p>
              <h5 className='h-w'>Storage<br />Boxes Baskets</h5>
              <button className='button-w' id="view-button">Discover Now  →</button>
            </div>
          </div>
          <div className='promotion-box'>
            <img src='img/banner-4.jpg' alt='banner' />
            <div className='promotion-text3'>
              <p className='p-6'>On Sale</p>
              <h5 className='h-b'>Lamps Offer<br /><span style={weight}>up to 30% off</span></h5>
              <button className='button-b' id="view-button">Shop Now  →</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Promotion;