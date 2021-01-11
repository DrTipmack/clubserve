import React from "react";
import "./Auth.css";
import App from "./App";
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignUp} from "@aws-amplify/ui-react";
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
const AuthStateApp = () => {
	const [authState, setAuthState] = React.useState();
	const [user, setUser] = React.useState();
	React.useEffect(() => {
		onAuthUIStateChange((nextAuthState, authData) => {
			setAuthState(nextAuthState);
			setUser(authData);
		});
	}, []);
	return authState === AuthState.SignedIn && user ? (
		<div className="App">
			<App/>
		</div>
	) : (
		<AmplifyAuthenticator>
			<AmplifySignUp
				slot="sign-up"
				formFields={[
					{type: "username"},
					{type: "password"},
					{type: "email"}
				]}
			/>
		</AmplifyAuthenticator>
	);
};
export default AuthStateApp;