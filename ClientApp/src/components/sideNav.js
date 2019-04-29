import React from 'react';
import classnames from 'classnames';

import './NavMenu.css';


export default class SideNav extends React.Component {



    componentDidMount() {

    }


    render() {

        return (
<div className='mobile-nav-open'>

   <div id="sidecarNav">
            <div id="mobileNavWrapper" className="nav-wrapper" data-content-field="navigation-mobileNav">
              <nav id="mobileNavigation">
                <div className="index homepage">
                  <a href="/">
                    Work
                  </a>
                </div>
                <div className="index active">
                  <a href="/about-hayden">
                    About
                  </a>
                </div>
                <div className="collection">
                  <a href="/blog-hayden">
                    Blog
                  </a>
                </div>
                <div className="collection">
                  <a href="/hire-us-hayden">
                    Hire Us
                  </a>
                </div>
              </nav>
            </div>
          </div>
          </div>
         


        );
    }

}

