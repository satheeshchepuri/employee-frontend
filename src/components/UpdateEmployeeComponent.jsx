import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empId: this.props.match.params.empId,
            firstName:'',
            lastName:'',
            middleName:'',
            phone:'',
            email:''
        }
       this.onChangeEmpIdHandler=this.onChangeEmpIdHandler.bind(this);
        this.onChangeFirstNameHandler=this.onChangeFirstNameHandler.bind(this);
        this.onChangeLastNameHandler=this.onChangeLastNameHandler.bind(this);
        this.onChangeMiddleNameHandler=this.onChangeMiddleNameHandler.bind(this);
        this.onChangePhoneHandler=this.onChangePhoneHandler.bind(this);
        this.onChangeEmailHandler=this.onChangeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.empId).then( (res) =>{
            let employee = res.data;
            this.setState({empId: employee.empId,firstName: employee.firstName,
                lastName: employee.lastName,
                middleName : employee.middleName,
                phone: employee.phone,
                email: employee.email
            });
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {empId: this.state.empId, firstName: this.state.firstName, lastName: this.state.lastName, middleName: this.state.middleName, phone: this.state.phone, email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.empId));
       
        EmployeeService.updateEmployee(employee, this.state.empId).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    cancel(){
        this.props.history.push('/employees');
    }
    onChangeEmpIdHandler=(event) => {
        this.setState({empId: event.target.value});
    }
    onChangeFirstNameHandler=(event) => {
        this.setState({firstName: event.target.value});
    }
    onChangeLastNameHandler=(event) => {
        this.setState({lastName: event.target.value});
    }
    onChangeMiddleNameHandler=(event) => {
        this.setState({middleName: event.target.value});
    }
    onChangePhoneHandler=(event) => {
        this.setState({phone: event.target.value});
    }
    onChangeEmailHandler=(event) => {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Employee Id</label>
                                            <input placeholder="Employee Id" name="empId" className="form-control" 
                                            value={this.state.empId} onChange={this.onChangeEmpIdHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.onChangeFirstNameHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.onChangeLastNameHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label>Middle Name</label>
                                            <input placeholder="Middle Name" name="middleName" className="form-control" 
                                            value={this.state.MiddleName} onChange={this.onChangeMiddleNameHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input placeholder="Phone" name="phone" className="form-control" 
                                            value={this.state.phone} onChange={this.onChangePhoneHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                            value={this.state.email} onChange={this.onChangeEmailHandler} />
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}