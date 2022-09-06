import React from 'react';
import { Link } from 'react-router-dom'


const Navbars = () => {
    return (
        <div>
             <nav class="navbar navbar-default navbar-link">
    <div class="container-fluid container-link">
      {/* <!-- Brand and toggle get grouped for better mobile display --> */}
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="logoimg" href="homepage.html"><Link to={"/"}>
          <img class="logoimg" src="img/logo copy.jpg"/>
          </Link>
        </a>

      </div>

      {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
      <div class="collapse navbar-collapse navbar-links" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">

         <li> <Link to={"/individuals"}>Individuals</Link></li>
         <li> <Link to={"/team"}>Team</Link></li>
         <li> <Link to={"/enterprise"}>Enterprise</Link></li>


        </ul>


      </div>
      {/* <!-- /.navbar-collapse --> */}
    </div>
    {/* <!-- /.container-fluid --> */}
  </nav>

        </div>
    );
}

export default Navbars;