import "./Auth.css";
import {Amplify, Auth} from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import React from 'react';


Amplify.configure(awsconfig)

function LoginButton(props) {
    return (
      <div className="App">
        <button onClick={props.onClick} disabled= {props.disabled}>
            SignIn
        </button>
        <button disabled= {props.disabled}>SignUp</button>
      </div>
    );
  }
function LogoutButton(props) {
    return (
        <div>
            <button onClick={props.onClick} disabled= {props.disabled}>
                SignOut
            </button>
        </div>
    );
}

async function awsSignIn(props) {
    try {
        const user = await Auth.signIn(props.email, props.password);
        alert(user);
    } catch (error) {
        alert("Error while signing in user: " + error);
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginDetails: {
                password: "",
                email: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDisable = this.handleDisable.bind(this);
    }
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = "loginDetails." + target.name;

        this.setState({
            [name] : value
        });
    }

    handleSubmit(e) {
        console.log("In HandleSubmit:")
        console.log(e);
        console.log(this.state);
        e.preventDefault();
        this.handleDisable(true);
        this.props.onSignIn(this.state.loginDetails);
        setTimeout(() => {this.handleDisable(false);}, 2000);
    }
    handleDisable(d) {
        this.props.onDisable(d);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset disabled= {this.props.disabled} >
                    <label>
                        Email
                        <input 
                            name= "email"
                            type= "text"
                            value= {this.state.loginDetails.email}
                            onChange= {this.handleChange}
                        />
                    </label>
                    <label>
                        Password
                        <input
                            name= "password"
                            type= "password"
                            value= {this.state.loginDetails.password}
                            onChange= {this.handleChange}
                        />  
                    </label>
                    <input type="submit" value="Submit" />
                    </fieldset>
            </form>
        );
    }
}

class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isLoggedIn: false,
        isDisabled: false
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.disableEnable = this.disableEnable.bind(this);
    }

    disableEnable(s) {
        this.setState({isDisabled: s})
    }

    handleLoginClick(props) {
        console.log("in handleLoginClick");
        console.log(props);
        this.setState({isLoggedIn: true});
        alert(props);
        awsSignIn(props.email, props.password);
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let inputs;
        if (isLoggedIn) {
            inputs = <LogoutButton onClick= {this.handleLogoutClick} disabled= {this.state.isDisabled} />;
        } else {
            inputs = (
                <div>
                    {/* <LoginButton onClick= {this.handleLoginClick} disabled= {this.state.isDisabled} /> */}
                    <LoginForm onDisable= {this.disableEnable} onSignIn= {this.handleLoginClick} disabled= {this.state.isDisabled} />
                </div>
            );
        }

        return (
            <div>
                {inputs}
            </div>

        )
    }
}
  
  export default LoginBox;
  