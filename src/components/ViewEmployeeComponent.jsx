import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empId: this.props.match.params.empId,
            employee: {}
        }

        this.handleEvent = this.handleEvent.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.empId).then( res => {
            this.setState({employee: res.data});
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                         <div className = "row">
                            <label> Employee Id: </label>
                            <div> { this.state.employee.empId }</div>
                        </div>
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Middle Name: </label>
                            <div> { this.state.employee.middleName }</div>
                        </div>
                        <div className = "row">
                            <label> Phone: </label>
                            <div> { this.state.employee.phone}</div>
                        </div>
                        <div className = "row">
                            <label> Email: </label>
                            <div> { this.state.employee.email }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
