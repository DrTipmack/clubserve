import "./App.css";
import React, {useState} from "react";
import {SessionType} from "./models";
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";

Amplify.configure(awsconfig);
//TODO Fix "DataStore - Data won't be synchronized. No GraphQL endpoint configured. Did you forget `Amplify.configure(awsconfig)`?"

function SessionTypesListBox()  {
	//TODO Make Google Classroom effect
	const [SessionTypes, setSessionTypes] = useState(undefined);

	const getSessionTypes = async () => {
		const models = await DataStore.query(SessionType);
		console.log(models)
		setSessionTypes(models)
	}

	const renderData = (data) => {
		return data.map((type, i) => {
				return (
					<li key={i}>{type.sessionName}</li>
				)
			})
		}


	return(
		<div>
			<h1>
				Get All Session Types
			</h1>
			<div>
				<button onClick={getSessionTypes}>
					Go Gettem!
				</button>
				<br />
			</div>

			{/*Display received data*/}
			<div>
				<ol>
					{SessionTypes && renderData(SessionTypes)}
				</ol>
			</div>
		</div>
	)
}

function SessionTypesCreateBox() {
	const [values, setValues] = useState({})
	const createSessionTypes = async (values) => {
		try {
			await DataStore.save(
				new SessionType({
					"sessionTypeID": values.sessionTypeID,
					"eligibleGroupIDs": values.eligibleGroupIDs,
					"day": values.day,
					"Sessions": values.Sessions,
					"sessionName": values.name
				})
			);
		}catch (e) {
			console.log(e);
		}
	}

	const handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		setValues({
			[name]: value
		});
	}
	const handleSubmit = (event) => {
		createSessionTypes(values).then(r => alert("sessionType created with: " + values));
		event.preventDefault();
	}

	const render = () => {
		const inputTypes = ["sessionTypeID", "eligibleGroupIDs", "day", "Sessions", "name"];
		const inputFields = inputTypes.map((type) => {
			return (
				<div>
					<label> {type}
						<input
							name= {type}
							type= "text"
							onChange={handleInputChange}
						/>
					</label>
					<br />
				</div>
			)
		})
		return (
			<div>
				<form onSubmit={handleSubmit}>
					{inputFields}
				</form>
			</div>
		);
	}

	return (
		{render}
	);
}

function SessionTypesControl(props) {
	return (
		<div>
			<SessionTypesCreateBox />
			<SessionTypesListBox />
		</div>
	)

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
