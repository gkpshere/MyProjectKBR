import React from 'react';
import { connect } from 'react-redux';
import Portfolio from './Portfolio'
import ContactSection from './ContactSection'
import NavMenu from './NavMenu';
import Form from './Form';



let SectionComponent = () => {
  return (
    <section className="page-section bg-prim" id="services">


<section className="page-section" id="services">
        <div className="container">
          <h2 className="text-center mt-0">We've got what you need !</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
              <span className='checkmark'>&#10003;</span>
                <h3 className="h4 mb-2">Home Improvement</h3>
                <p className="text-muted mb-0">Aliquam laoreet, lacus vel euismod vestibulum!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
              <span className='checkmark'>&#10003;</span>
                <h3 className="h4 mb-2">Bathroom remodeling</h3>
                <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
              <span className='checkmark'>&#10003;</span>
                <h3 className="h4 mb-2">Kitchen</h3>
                <p className="text-muted mb-0">Aliquam laoreet, lacus vel euismod vestibulum!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
              <span className='checkmark'>&#10003;</span>
                <h3 className="h4 mb-2">Home Painting</h3>
                <p className="text-muted mb-0">Aliquam laoreet, lacus vel euismod vestibulum?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
       
    </section>
  )
}



let Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="small text-center text-muted">Thank You</div>
      </div>
    </footer>
  )
}

class Home extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

      sticky: false,
      read: false
    };
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.stickyUpdate();
    });
  }

  stickyUpdate() {
    if (window.scrollY > 1010) {
      this.setState({ sticky: true })
    } else {
      this.setState({ sticky: false })

    }
    if (window.scrollY > 1010) {
      this.setState({ read: true })
    } else {
      this.setState({ read: false })

    }
  };

  render() {

    var stickyClass = this.state.sticky ? 'b-sticky' : ''
   

    return (
      <div>

        <NavMenu />

        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-style font-weight-bold">Rethink. Remodel.</h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                {/* <p className="text-style-75 font-weight-light mb-5"><strong>Improve with the help of creative team of remodelling experts here !</strong></p> */}
                <a className="btn btn-prim btn-xl js-scroll-trigger" href="#services">Find Out More</a>
              </div>
            </div>
          </div>
        </header>
        <SectionComponent />
        <div className='col-lg-12 col-sm-12 row'>
          <div className='col-lg-4 col-sm-6' >
            <div className={stickyClass}>
              <Form saveContactDetails={this.props.saveContactDetails}  />
            </div>
          </div>
          <article className='col-lg-8 col-sm-6'>
            <Portfolio />

            <ContactSection />
          </article>
        </div>


        <Footer />
      </div>

    )

  }



}

export default connect()(Home);