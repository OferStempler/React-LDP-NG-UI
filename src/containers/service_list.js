/**
 * Created by ofer on 01/11/17.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";

export  class ServiceList extends  Component {


    renderServices(serviceData){
        const id = serviceData.id;
        const uri = serviceData.uri;
        const serviceName = serviceData.serviceName;


        /* const temps = cityData.list.map(weather => weather.main.temp);
         const humidity = cityData.list.map(weather=> weather.main.pressure);
         const pressure = cityData.list.map(weather=> weather.main.humidity);*/

        return(
            <tr key={id}>
                <td> {serviceName}</td>
                <td> {uri}</td>
            </tr>
        )
    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Service Name</th>
                    <th>URI</th>
                </tr>
                </thead>
                <tbody>
                {this.props.service.map(this.renderServices)}
                </tbody>
            </table>
        );
    }


}

function  mapStateToProps({ service }) {
    return { service };// = { weather: weather }
}
export default connect(mapStateToProps)(ServiceList);