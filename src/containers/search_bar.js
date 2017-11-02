import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchService } from "../actions/index"

export  class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = { term:''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        // console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
     //after we prevent the form from being submitted, we can now fetch data with this function.
    this.props.fetchService(this.state.term);
    this.setState({term: ''})
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                placeholder="Insert service name"
                className="form-control"
                value = {this.state.term}
                onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function  mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchService}, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar);