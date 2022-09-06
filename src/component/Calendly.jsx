import React from 'react';

const Home = () => {
    return (
        <>
        <div>
            
  <div class="container">
    <div class="row">

      <div class="col-md-6">
        <h1>Easy </h1>
        <h1>scheduling </h1>
        <h1 class="ahead">ahead </h1>
        <p>Calendy is your hub for scheduling meetings proffessionaly and effeciently, eliminating the hassle of
          back-and-forth emails so you can get back to work.</p>


        <form class="form-inline">
          <div class="form-group">
            <input type="email" class="form-control email" id="exampleInputEmail2" placeholder="Enter your email"/>
          </div>
          <button type="submit" class="btn btn-default c-btn">Sign
            up</button>
        </form>

        <p>Create your free account. No credit card required</p>

      </div>


      <div class="col-md-6 sideimg">
        <img src="img/img5 copy.jpeg"/>
      </div>

    </div>
  </div>


  <br/>
  <br/>

  <div class="logo-holder">


    <div class="container">

      <div class="row">
        <div class="col-md-12">
          <div class="holder-text">
            <h3>Simplified scheduling for more than</h3>
            <h3 class="span">10,000,000</h3>
            <h3> users worldwide</h3>
          </div>
        </div>
      </div>

    </div>
     <div class="container">
    <div class="row">

      <div class="col-md-3 logo">
        <p>LOGO</p>
      </div>

      <div class="col-md-3 logo">
        <p>LOGO</p>
      </div>

      <div class="col-md-3 logo">
        <p>LOGO</p>
      </div>

      <div class="col-md-3 logo">
        <p>LOGO</p>
      </div>

    </div>
  </div>
</div>

  </div>



  <div className="container">
    <div className="row">
        <div className="col-md-4 text-center">
        <span class="badge badge1">1</span>
      <strong>Create simple rules</strong>
      <h6>
        <strong>
        Let Calendly know your availiability preferences <br/> it'll do the work for you.</strong></h6>
        </div>

        <div class="col-md-4 text-center">
      <span class="badge badge1">2</span>
      <strong>Share your link</strong>
      <p><strong>Send guests your Calendly link or embed it on your website.</strong></p>
    </div>
    <div class="col-md-4 text-center">
      <span class="badge badge1">2</span>
      <strong>Get booked</strong>
      <p><strong>They pick a time and the event is added to your calendar</strong></p>
    </div>

    </div>
  </div>

       </>
    );
}

export default Home;