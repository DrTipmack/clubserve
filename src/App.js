import "./App.css";
import * as React from "react";

import {DataStore} from "@aws-amplify/datastore";
import {SessionType} from "./models";

async function querySessionTypes () {
	const models = await DataStore.query(SessionType);
	return (
		<div>
			{models}
		</div>
	);
}

class SessionTypesControl extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			sessionTypes: undefined
		}
	}

	componentDidMount () {
		querySessionTypes();
	}

	createSessionTypes = async (day, name) => {
		await DataStore.save(
			new SessionType({
				"sessionTypeID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
				"eligibleGroupIDs": [],
				"day": day,
				"Sessions": [],
				"sessionName": name
			})
		);

	};


	querySessionTypes = () => {
		const models = DataStore.query(SessionType);
		models.then(
			() => {
				this.setState({sessionTypes : models})
			}
		)
	};

	render () {
		return (
			<h3>
				{this.state.sessionTypes}
			</h3>
		);
	}
}

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			sessionTypes: ""
		};
	}

	render () {
		return (
			<SessionTypesControl/>
		);
	}
}

export default App;
