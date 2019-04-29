import React from 'react';
import { connect } from 'react-redux';


const Index = props => (
<div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="javascript:void()">Home</a></li>
      <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void()">Page 1 <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><a href="">Page 1-1</a></li>
          <li><a href="javascript:void(0)">Page 1-2</a></li>
          <li><a href="javascript:void(0)">Page 1-3</a></li>
        </ul>
      </li>
      <li><a href="javascript:void()">Page 2</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="javascript:void(0)"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="javascript:void(0)"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
        </nav>
        <main role="main" className="container">
          <div className="starter-template">
            <h1>Bootstrap starter template</h1>
            <p className="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.</p>
          </div>
        </main>
      </div>

);

export default connect()(Index);