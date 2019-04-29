import React from 'react';
import classnames from 'classnames';
//import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
//import { Link } from 'react-router-dom';
import './NavMenu.css';


export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.navbarCollapsed = this.navbarCollapsed.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navBarScrolled: false,
      navBarCollapsed:true,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.navbarScrolled();
    });
  }

  navbarScrolled() {
    //let navElement = document.getElementById("mainNav");
    if (window.scrollY > 100) {
      this.setState({ navBarScrolled: true })
    } else {
      this.setState({ navBarScrolled: false })
      
    }
  };

  navbarCollapsed() {
   
   
      this.setState({ navBarCollapsed: !(this.state.navBarCollapsed) })
   
  };
  render() {
    var navbar = this.state.navBarScrolled ? 'navbar-scrolled' : ''

    var classes = classnames(
      'navbar navbar-expand-lg navbar-light fixed-top py-3',
      navbar
    );

    var collapse = this.state.navBarCollapsed ? 'collapse navbar-collapse' : 'navbar'
    return (

      <nav className={classes} id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="../img/Logo.png" alt="KBRemodeling" style={{maxHeight: '80px', maxWidth: '200px'}}></img></a>
          <button className="navbar-toggler navbar-toggler-right" onClick={this.navbarCollapsed} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={collapse} id="navbarResponsive">
          {/* <div className="navbar" id="navbarResponsive"> */}
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
              <p className='phoneText'><img alt="Phone" src="../img/phone.png" className='phoneImage'></img>800-524-1233</p>
                {/* <a className="nav-link js-scroll-trigger" style={{margin: '5px'}} href="#about">About</a> */}
                {/* <button className="btn btn-danger navbar-btn" style={{margin: '1px'}}>About</button> */}
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" style={{margin: '5px'}} href="#services">Services</a>
                {/* <button className="btn btn-danger navbar-btn" style={{margin: '1px'}}>Service</button> */}
              </li>
              {/* <li className="nav-item">
                <a className="nav-link js-scroll-trigger" style={{margin: '5px'}} href="#portfolio">Portfolio</a> */}
                {/* <button className="btn btn-danger navbar-btn" style={{margin: '1px'}}>Portfolio</button> */}
              {/* </li> */}
              <li className="nav-item">
                {/* <a className="nav-link js-scroll-trigger" href="#contact">Contact</a> */}
                <button className="btn btn-danger navbar-btn" style={{margin: '1px'}} onClick={()=>{window.location.href='#contact'}}>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      // <header>
      //   <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
      //     <Container>
      //       <NavbarBrand tag={Link} to="/">Home is where our heart is</NavbarBrand>
      //       <NavbarToggler onClick={this.toggle} className="mr-2" />
      //       <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
      //         <ul className="navbar-nav flex-grow">
      //           <NavItem>
      //             <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
      //           </NavItem>
      //           <NavItem>
      //             <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
      //           </NavItem>
      //           <NavItem>
      //             <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
      //           </NavItem>
      //         </ul>
      //       </Collapse>
      //     </Container>
      //   </Navbar>
      // </header>
    );
  }
}
