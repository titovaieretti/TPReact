
const AboutUs = () => {
    return (
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-auto">
                  <h2> About us </h2>
                  <p>  We are a team of passionate individuals who love to create amazing things. 
                      Our mission is to provide high-quality services and products that exceed our customers' expectations.
                  </p>
                  
              </div>
          </div>
          <div className="row">
              <div className="col-md-4 col-12">
                  <div className="card">
                      <img 
                      className="card-img-top" 
                      src="src/assets/images/osopanda.jpg"
                      alt="aboutUsCard1" 
                      />
                      <div className="card-body">
                          <div className="card-title h5"> Feature 1 </div>
                          <p className="card-text">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                          </p>
                      </div>  
                  </div>
              </div>
  
              <div className="col-md-4 col-12">
                  <div className="card">
                      <img 
                      className="card-img-top" 
                      src="src/assets/images/perezoso.webp"
                      alt="aboutUsCard2" 
                      />
                      <div className="card-body">
                          <div className="card-title h5"> Feature 1 </div>
                          <p className="card-text">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                          </p>
                      </div>  
                  </div>
              </div>
  
              <div className="col-md-4 col-12">
                  <div className="card">
                      <img 
                      className="card-img-top" 
                      src="src/assets/images/venado.jpg"
                      alt="aboutUsCard3" 
                      />
                      <div className="card-body">
                          <div className="card-title h5"> Feature 1 </div>
                          <p className="card-text">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                          </p>
                      </div>  
                  </div>
              </div>
  
          </div>
  
  
  
      </div>
    );
  };
  
  export default AboutUs;