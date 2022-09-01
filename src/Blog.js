function Blog() {
  let postTop = {
    color:'#ccc',
    margin:'0'
  }

  let postMiddle = {
    color:'#333',
    fontSize:'18px',
    fontWeight:'600',
  }
  return (
    <div className="App">
      <div className="container mt-5">
        <h4>From Our Blog</h4>
        <div className="row">
          <div className="col-sm-4">
            <a href='#'><img src='img/post-1.jpg' alt='post'/></a>
            <p style={postTop}><a href='#' style={postTop}>Now 22,2022 </a>, 0 Comments</p>
            <a href='#' style={postMiddle }>Sed adipiscing ornare.</a>
            <p><a href='#' className='continue'>Continue Reading</a></p>
          </div>
          <div className="col-sm-4">
            <a href='#'><img src='img/post-2.jpg' alt='post'/></a>
            <p style={postTop}><a href='#' style={postTop}>Dec 12,2022 </a>, 0 Comments</p>
            <a href='#' style={postMiddle }>Fusce lacinia arcuet nulla.</a>
            <p><a href='#' className='continue'>Continue Reading</a></p>
          </div>
          <div className="col-sm-4">
            <a href='#'><img src='img/post-3.jpg' alt='post'/></a>
            <p style={postTop}><a href='#' style={postTop}>Dec 19,2022 </a>, 0 Comments</p>
            <a href='#' style={postMiddle }>Quisque volutpat mattis eros.</a>
            <p><a href='#' className='continue'>Continue Reading</a></p>
          </div>
        </div>
        <button id='view-button'>View More Articles →</button>
      </div>
    </div>
  )
}

export default Blog;