import React from 'react';
//import { connect } from 'react-redux';



export default class from extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    handleSubmit(event) {

        event.preventDefault();
        console.log('test', JSON.stringify(this.formData));

        if(this.props.saveContactDetails){
            this.props.saveContactDetails(this.formData)
        }


    }

    componentDidMount() {
        this.formData = {};
    }

    componentWillUnmount() {
        this.formData = {};
    }

    handleInputchange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.formData[name] = value;

    }



    render() {




        return (
            <form id='contact' onSubmit={this.handleSubmit}>
                <div className="col-lg-12 col-sm-12 row">
                    <div className="form-group col-lg-12 col-sm-12">
                        <label className='formlabel' htmlFor="formGroupExampleInput">Contact Us</label>
                    </div>
                    <div className="form-group col-lg-12 col-sm-12">
                        <input name='name' type="text" className="form-control" placeholder="Name" onChange={this.handleInputchange.bind(this)} />
                    </div>
                    <div className="form-group col-lg-12 col-sm-12">
                        <input name='email' type="text" className="form-control" placeholder="Email ID" onChange={this.handleInputchange.bind(this)} />
                    </div>
                    <div className="form-group col-lg-12 col-sm-12">
                        <input name='phone' type="text" className="form-control" placeholder="Phone" onChange={this.handleInputchange.bind(this)} />
                    </div>
                    <div className="form-group col-lg-12 col-sm-12">
                        <textarea name='comments' className="form-control" rows={4} cols={50} placeholder="Additional comments here..." onChange={this.handleInputchange.bind(this)} />
                    </div>

                    <div className="form-group col-lg-12 col-sm-12">
                        <button type='submit' className="btn btn-danger navbar-btn" style={{ margin: '1px' }}>Submit</button>
                    </div>
                </div>
            </form>)
    }

}
