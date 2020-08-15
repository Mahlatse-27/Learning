import React, {Component} from 'react' ;

import './UserForm.css' 

class UserForm extends Component {
    constructor(props){
        super(props)


        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);

        firstNameHandler = (event) => {
            this.state({
                firstName: event.target.value
            })
        }

        lastNameHandler = (event) => {
            this.state({
                lastName: event.target.value
            })
        }

        passwordHandler = (event) => {
            this.state({
                password: event.target.value
            })
        }

        genderHandler = (event) => {
            this.state({
                gender: event.target.value
            })
        }

        this.handleSubmit = () => {
            alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully`) ;
            console.log(this.state) ;
            this.state({
                firstName: "",
                lastName: "",
                password: "",
                gender: ""
            });
            event.preventDefault() ;
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <input type="text" value={this.state.firstName} onChange={this.firstNameHandler} placeholder="Firstname" />
                    <input type="text" value={this.state.lastName} onChange={this.lastNameHandler} placeholder="Lastname" />
                    <input type="text" value={this.state.password} onChange={this.passwordHandler} placeholder="Password" />
                    <select onChange={this.genderHandler} defaultValue="Select Gender">
                        <option defaultValue>Slect Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </form>
            </div>
        )
    }
};

export default UserForm ;