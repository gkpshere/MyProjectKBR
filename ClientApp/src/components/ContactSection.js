import React from 'react';
import { connect } from 'react-redux';



const ContactSection = props => (
<div>
 {/* Contact Section */}
 <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
              
                <h2 className="mt-0">KB Remodelling – CT</h2>
                
                <hr className="divider my-4" />
                <br/>
                <br/>
                
                
                

<p className="text-muted mb-5">
 Give us a call or send us an email and we will get back to you as soon as possible!</p>
              </div>
            </div>
            <br/>
                <br/>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center">
                <i className="fas fa-phone fa-3x mb-3 text-muted" />
                <div>+1 (###) ###-####</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted" />
                {/* Make sure to change the email address in anchor text AND the link below! */}
                <a className="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
              </div>
            </div>
          </div>
        </section>

</div>


 
);

export default connect()(ContactSection);